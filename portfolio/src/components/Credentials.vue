<script setup>
    import Twitter from './icons/IconTwitter.vue';
    import LinkedIn from './icons/IconLinkedIn.vue';
    import Enter from './icons/IconEnter.vue';
</script>

<template>
    <section class="w-full md:h-36 flex-wrap sm:flex-nowrap flex gap-4 text-white">
        <div class="w-45 md:w-1/4 flex flex-col justify-between rounded-xl bg-gradient p-3 order-1">
            <div class="w-full rounded-lg border border-[#181818] flex gap-4 bg-gradient-to-r from-[#101010] to-[#020202] justify-center">
                <div class="w-8 h-8 sm:w-16 sm:h-16 rounded-full bg-[#161616] border border-[#101010] flex justify-center items-center"><Twitter class="h-4 w-4 md:w-7 md:h-7" /></div>
                <div class="w-8 h-8 sm:w-16 sm:h-16 rounded-full border border-[#101010] bg-[#050505] flex justify-center items-center"><LinkedIn class="h-4 w-4 md:w-7 md:h-7" /></div>
            </div>
            <div class="flex justify-between items-center p-2">
                <div>
                    <p class="text-xxs text-detail font-semibold">Stay with me</p>
                    <p class="font-semibold text-xs sm:text-base">Profiles</p>
                </div>
                <Enter class="w-4 h-4 sm:w-7 sm:h-7 cursor-pointer" />
            </div>
        </div>
        <div class="w-full md:w-1/2 rounded-xl bg-gradient flex justify-between items-end p-3 order-3 sm:order-2">
            <div class="text-2xl md:text-3xl lg:text-4xl font-semibold">
                <p>Lets</p>
                <p>Work <span class="text-blue-500">Together.</span></p>
            </div>
            <Enter class="w-7 h-7 cursor-pointer" />
        </div>
        <div class="w-45 md:w-1/4 rounded-xl flex justify-between items-end p-3 bg-gradient order-2 sm:order-3">
            <div>
                <p class="text-xxs text-detail font-semibold">More About Me</p>
                <p class="font-semibold text-xs sm:text-base">Credentials</p>
            </div>
            <Enter class="w-4 h-4 sm:w-7 sm:h-7 cursor-pointer" />
        </div>
    </section>
</template>