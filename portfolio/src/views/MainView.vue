<script setup>
    import Self from '../components/Self.vue';
    import About from '../components/About.vue';
    import Credentials from '../components/Credentials.vue';
</script>

<template>
    <main class="bg-bgColor w-full h-screen flex justify-center items-center py-3">
        <div class=" max-w-7xl w-9/12 max-h-xl">
            <Self />
            <About />
            <Credentials />
        </div>
    </main>
</template>