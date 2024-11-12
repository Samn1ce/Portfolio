<script setup>
    import Asterics from './icons/IconAsterics.vue';
</script>

<template>
    <section class="w-full sm:h-56 flex sm:flex-row md:justify-center gap-4 mb-3 text-white">
        <div class="sm:w-1/3 rounded-xl bg-gradient hidden sm:block">

        </div>
        <div class="w-full sm:w-2/3 rounded-xl flex flex-col justify-between gap-4">
            <div class="flex items-center gap-2">
                <Asterics class="w-5 h-5 md:w-8 md:h-8" />
                <h1 class="text-xl md:text-4xl">SELF-SUMMARY</h1>
                <Asterics class="w-5 h-5 md:w-8 md:h-8" />
            </div>
            <div class="rounded-xl h-3/4 flex flex-col justify-end p-3 gap-2 bg-gradient">
                <h3 class="md:text-2xl text-lg font-semibold">Ifeoluwa Samnice</h3>
                <p class="text-xs">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi et dolore recusandae eveniet? Aliquam consectetur, illum eius rerum blanditiis eos dolores deleniti, officiis obcaecati numquam provident et animi laudantium similique! Aliquam consectetur, illum eius rerum blanditiis eos dolores delenit</p>
            </div>
        </div>
    </section>
</template>