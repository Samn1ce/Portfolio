<script setup>
import { onMounted } from 'vue'
import Header from '../components/Header.vue'
import Self from '../components/Self.vue'
import About from '../components/About.vue'
import Credentials from '../components/Credentials.vue'
import Footer from '../components/Footer.vue'
import gsap from 'gsap'
import MyProjects from '@/components/MyProjects.vue'

onMounted(() => {
	// Select all main content sections
	const sections = [
		'.self-section',
		'.about-section',
		'.credentials-section',
	].map((selector) => document.querySelector(selector))

	// Initial state
	gsap.set(sections, {
		y: 50,
		opacity: 0,
	})

	// Animate sections with stagger effect
	gsap.to(sections, {
		duration: 1,
		y: 0,
		opacity: 1,
		ease: 'power2.out',
		stagger: {
			amount: 0.5, // Total amount of time between start of each animation
		},
	})
})
</script>

<template>
	<main
		class="bg-bgColor w-full min-h-screen flex flex-col justify-between items-center gap-4 bg-zinc-200"
	>
		<Header />
		<div class="w-[90%] sm:max-w-7xl sm:w-3/5 font-poppins">
			<Self />
			<MyProjects />
			<!-- <div class="about-section">
				<About />
			</div>
			<div class="credentials-section">
				<Credentials />
			</div> -->
		</div>
		<Footer />
	</main>
</template>
