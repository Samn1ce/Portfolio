<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Self from '../components/Self.vue'
import Footer from '../components/Footer.vue'
import gsap from 'gsap'
import MyProjects from '@/components/MyProjects.vue'
import MobileHeader from '@/components/MobileHeader.vue'

const isDark = ref(false)

const toggleDark = () => {
	isDark.value = !isDark.value
	document.documentElement.classList.toggle('dark', isDark.value)
	localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
	// Load saved theme from localStorage (manual toggle only)
	const saved = localStorage.getItem('theme')
	isDark.value = saved === 'dark'
	if (isDark.value) {
		document.documentElement.classList.add('dark')
	}

	// Select all main content sections
	const sections = ['content'].map((selector) =>
		document.querySelector(selector)
	)

	// Initial state
	gsap.set('.main', {
		y: 50,
		opacity: 0,
	})

	// Animate sections with stagger effect
	gsap.to('.main', {
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
		class="bg-about dark:bg-darkAbout bg-fixed w-full flex flex-col gap-4 items-center bg-zinc-200 py-5 content"
	>
		<Header :is-dark="isDark" :toggle-dark="toggleDark" />

		<div
			class="main sm:max-w-7xl w-11/12 md:w-3/5 font-poppins bg-white dark:bg-neutral-950 shadow-md rounded-xl"
		>
			<div class="hidden md:block">
				<Self :is-dark="isDark" :toggle-dark="toggleDark" />
				<MyProjects :is-dark="isDark" :toggle-dark="toggleDark" />
			</div>
			<!-- Mobile Display -->
			<div
				class="md:hidden flex flex-col gap-4 mb-10 justify-center items-center w-full pt-20"
			>
				<MobileHeader :is-dark="isDark" :toggle-dark="toggleDark" />
				<section id="home">
					<Self :is-dark="isDark" :toggle-dark="toggleDark" />
				</section>
				<section id="project">
					<MyProjects :is-dark="isDark" :toggle-dark="toggleDark" />
				</section>
			</div>
		</div>

		<Footer :is-dark="isDark" :toggle-dark="toggleDark" />
	</main>
</template>
