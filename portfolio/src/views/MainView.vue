<script setup>
import { onMounted } from 'vue'
import Hero from '../components/Hero.vue'

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
	<main>
		<Hero />
	</main>
</template>
