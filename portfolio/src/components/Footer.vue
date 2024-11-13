<script setup>
    import Mail from './icons/IconMail.vue';
    import GitHub from './icons/IconGitHub.vue';
    import Twitter from './icons/IconTwitter.vue';
    import LinkedIn from './icons/IconLinkedIn.vue';
</script>

<template>
    <div class="w-full h-20">
        <div class="w-full h-[1px] bg-gradient-to-r from-[#171717] from-60% via-[#494949] via-25% to-[#121212] to-15%"></div>
        <div class="w-full h-5/6 flex justify-center items-center gap-4">
            <a 
                href="https://x.com/IfeoluwaSamnice"
                target="_blank"
                class="w-10 h-10 border border-white rounded-full flex justify-center items-center hover:bg-slate-900 transition-all cursor-pointer"><Twitter class="text-white" /></a>
            <a 
                href="https://www.linkedin.com/in/ifeoluwa-babatunde-9036b7288/"
                target="_blank"
                class="w-10 h-10 border border-white rounded-full flex justify-center items-center hover:bg-slate-900 transition-all cursor-pointer"><LinkedIn class="text-white" /></a>
            <a 
                href="mailto:iamsamnice@gmail.com"
                target="_blank"
                class="w-10 h-10 border border-white rounded-full flex justify-center items-center hover:bg-slate-900 transition-all cursor-pointer"><Mail class="text-white" /></a>
            <a 
                href="https://github.com/Samn1ce"
                target="_blank"
                class="w-10 h-10 border border-white rounded-full flex justify-center items-center hover:bg-slate-900 transition-all cursor-pointer"><GitHub class="text-white" /></a>
        </div>
    </div>
</template>