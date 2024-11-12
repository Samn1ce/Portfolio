<script setup>
    import Header from '../components/Header.vue';
    import Self from '../components/Self.vue';
    import About from '../components/About.vue';
    import Credentials from '../components/Credentials.vue';
    import Footer from '../components/Footer.vue';
</script>

<template>
    <main class="bg-bgColor w-full min-h-screen flex flex-col justify-between items-center gap-4 py-3 bg-dark-about">
        <Header />
        <div class="max-w-7xl w-9/12 lg:max-h-xl font-poppins">
            <Self />
            <About />
            <Credentials />
        </div>
        <Footer />
    </main>
</template>