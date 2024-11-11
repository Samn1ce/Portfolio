<script setup>
    import Twitter from './icons/IconTwitter.vue';
    import LinkedIn from './icons/IconLinkedIn.vue';
</script>

<template>
    <section class="w-full h-36 flex gap-4 text-white">
        <div class="border border-white w-1/4 rounded-xl bg-gradient p-3">
            <div class="w-full rounded-lg border border-[#181818] flex gap-4 bg-gradient-to-r from-[#1A1A1A] to-[#121212] justify-center">
                <div class="w-16 h-16 rounded-full bg-[#191919] border border-[#161616] flex justify-center items-center"><Twitter class="w-7 h-7" /></div>
                <div class="w-16 h-16 rounded-full border border-[#141414] bg-[#171717] flex justify-center items-center"><LinkedIn class="w-7 h-7" /></div>
            </div>
            <div>
                <div>
                    <p>Stay with me</p>
                    <p>Profiles</p>
                </div>
            </div>
        </div>
        <div class="border border-white w-1/2 rounded-xl">

        </div>
        <div class="border border-white w-1/4 rounded-xl">

        </div>
    </section>
</template>