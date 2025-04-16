<script setup>
import { onMounted } from 'vue'
import Header from '../components/Header.vue'
import Self from '../components/Self.vue'
import Footer from '../components/Footer.vue'
import gsap from 'gsap'
import MyProjects from '@/components/MyProjects.vue'

onMounted(() => {
	// Select all main content sections
	const sections = ['content'].map((selector) =>
		document.querySelector(selector)
	)

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
		class="bg-about w-full flex flex-col gap-4 items-center bg-zinc-200 py-5"
	>
		<Header />
		<div
			class="content sm:max-w-7xl w-11/12 md:w-3/5 font-poppins bg-white shadow-md rounded-xl"
		>
			<Self />
			<MyProjects />
		</div>
		<Footer />
	</main>
</template>
