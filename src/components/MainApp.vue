<template>
    <main class="relative z-0 flex-1 overflow-y-auto focus:outline-none bg-gray-100 dark:bg-gray-700 h-full w-auto">
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
                                <span class="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">
                                SVG, PNG, JPG or GIF (MAX. 800x400px)
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
                        class="flex items-center justify-center w-1/4 h-64 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400">
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
                <div class="mt-4 flex justify-center gap-4">
                    <div class="w-1/2 h-96 border border-gray-300 rounded-lg">
                        <img
                            v-if="imageUrl"
                            :src="imageUrl"
                            alt="Uploaded Image"
                            class="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div class="w-1/2 h-96 border border-gray-300 rounded-lg"></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                imageUrl: null
            };
        },
        methods: {
            handleFileUpload(event) {
                const file = event.target.files[0];
                this.imageUrl = URL.createObjectURL(file);
            },
            processOttimmuthImage() {
                if (!this.imageUrl) return;


            }
        }
    };
</script>
