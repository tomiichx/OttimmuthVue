<template>
    <main class="relative z-0 flex-1 w-auto h-full overflow-y-auto bg-gray-100 focus:outline-none dark:bg-gray-700">
        <div class="flex items-center justify-center">
            <div class="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8">
                <div class="flex gap-4">
                    <label
                        for="dropzone-file"
                        class="flex flex-col items-center justify-center w-3/4 h-64 border border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16">
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                <span class="font-semibold">Klicken Sie zum Hochladen</span> oder ziehen Sie es hierher
                            </p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG oder GIF (MAX. 800x400px)
                            </p>
                        </div>
                        <input
                            id="dropzone-file"
                            type="file"
                            class="hidden"
                            @change="handleFileUpload" />
                    </label>
                    <button
                        @click="processOttimmuthImage"
                        :disabled="!imageUrl"
                        class="flex items-center justify-center w-1/4 h-64 text-white rounded-lg bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400 disabled:opacity-50">
                        <svg
                            class="w-8 h-8 text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24">
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </button>
                </div>
                <div
                    class="flex justify-center gap-4 mt-4"
                    v-if="imageUrl || processedImageUrl">
                    <div
                        class="w-auto border border-gray-500 rounded-lg h-96"
                        v-if="imageUrl">
                        <img
                            :src="imageUrl"
                            alt="Hochgeladenes Bild"
                            class="object-contain w-full h-full rounded-lg" />
                    </div>
                    <div
                        class="w-auto border border-gray-500 rounded-lg h-96"
                        v-if="processedImageUrl">
                        <img
                            :src="processedImageUrl"
                            alt="Bearbeitetes Bild"
                            class="object-contain w-full h-full rounded-lg" />
                    </div>
                </div>
                <div
                    v-else
                    class="flex items-center justify-center w-full h-96">
                    <p class="text-gray-500 dark:text-gray-400">Sie haben noch kein Bild hochgeladen.</p>
                </div>
                <ProcessSpinner v-if="imageLoading || processedLoading" />
            </div>
        </div>
    </main>
</template>

<script setup>
    import { ref } from "vue";
    import ProcessSpinner from "./ProcessSpinner.vue";

    const imageUrl = ref("");
    const processedImageUrl = ref("");
    const imageLoading = ref(false);
    const processedLoading = ref(false);

    const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if ((!file || !file.type.match("image.*")) && !imageUrl.value) {
            alert("Bitte wählen Sie eine Bilddatei aus.");
            return;
        }

        if (!file) {
            return;
        }

        if (imageUrl.value) {
            imageUrl.value = "";
            processedImageUrl.value = "";
        }

        imageLoading.value = true;
        const reader = new FileReader();

        reader.onload = (e) => {
            imageLoading.value = false;
            imageUrl.value = e.target.result;
        };

        reader.readAsDataURL(file);
    };

    const processOttimmuthImage = async () => {
        if (!imageUrl.value) {
            return;
        }

        processedLoading.value = true;

        await timeout(0);

        const image = new Image();
        image.onload = async () => {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.width = image.width;
            canvas.height = image.height;
            context.drawImage(image, 0, 0, image.width, image.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

            for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    if (isOttimmuth(x, y, imageData, canvas.width, canvas.height)) {
                        const index = (y * canvas.width + x) * 4;
                        imageData.data[index] = 255;
                        imageData.data[index + 1] = 255;
                        imageData.data[index + 2] = 255;
                        imageData.data[index + 3] = 255;
                    }
                }

                if (y % 10 === 0) {
                    await timeout(1);
                }
            }

            context.putImageData(imageData, 0, 0);
            processedImageUrl.value = canvas.toDataURL();
            processedLoading.value = false;
        };
        image.src = imageUrl.value;
    };

    const isOttimmuth = (x, y, imageData, width, height) => {
        const index = (y * width + x) * 4;
        const currentPixel = [
            imageData.data[index],
            imageData.data[index + 1],
            imageData.data[index + 2],
            imageData.data[index + 3]
        ];

        if (x > 0 && comparePixels(currentPixel, getPixel(x - 1, y, imageData, width))) {
            return true;
        }

        if (x < width - 1 && comparePixels(currentPixel, getPixel(x + 1, y, imageData, width))) {
            return true;
        }

        if (y > 0 && comparePixels(currentPixel, getPixel(x, y - 1, imageData, width))) {
            return true;
        }

        if (y < height - 1 && comparePixels(currentPixel, getPixel(x, y + 1, imageData, width))) {
            return true;
        }

        return false;
    };

    const getPixel = (x, y, imageData, width) => {
        const index = (y * width + x) * 4;
        return [imageData.data[index], imageData.data[index + 1], imageData.data[index + 2], imageData.data[index + 3]];
    };

    const comparePixels = (pixel1, pixel2) => {
        for (let i = 0; i < 4; i++) {
            if (pixel1[i] !== pixel2[i]) {
                return false;
            }
        }
        return true;
    };
</script>
