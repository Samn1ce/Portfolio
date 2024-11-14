<script setup>
    import ExpData from '../assets/ExpData.json'
    import EduData from '../assets/EduData.json'
</script>

<template>
    <section class="w-full md:h-52 flex flex-col sm:flex-row gap-4 mb-3 text-zinc-100">
        <div class="w-full md:w-1/2 rounded-xl p-3 text-xs font-semibold flex flex-col justify-between bg-gradient gap-4 md:gap-0">
            <h3>EXPERIENCE</h3>
            <div v-for="data in ExpData">
                <p class="md:mb-1 text-detail">{{ data.year }}</p>
                <p>{{ data.project }}</p>
                <p>
                    <span 
                        v-for="(language, i) in data.lang" 
                        :key="i" 
                        :style="{ color: language.color }" 
                        class="text-detail"
                    >
                        {{ language.name }}
                        <span v-if="i < data.lang.length - 1" class="text-detail">, </span>
                    </span>
                </p>
            </div>
            <div>
                <p class="md:mb-1 text-detail"></p>
                <p></p>
                <p class="text-detail"></p>
            </div>
        </div>
         <div class="w-full md:w-1/2 rounded-xl p-3 text-xs font-semibold flex flex-col justify-between bg-gradient gap-4 md:gap-0">
            <h3>EDUCATION</h3>
            <div v-for="data in EduData">
                <p class="md:mb-1 text-detail">{{ data.year }}</p>
                <p>{{ data.level }}</p>
                <p class="text-detail">{{ data.cert }}.</p>
            </div>
        </div>
    </section>
</template>