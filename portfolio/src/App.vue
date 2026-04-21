<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import '@/assets/styles/main.css'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Stacks from './views/Stacks.vue'
import Projects from './views/Projects.vue'

const activeSection = ref('home')

const navItems = [
	{ id: 'home', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'contact', label: 'Contact' },
]

let observer = null

onMounted(() => {
	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					activeSection.value = entry.target.id
				}
			})
		},
		{ threshold: 0.5 }
	)

	navItems.forEach(({ id }) => {
		const el = document.getElementById(id)
		if (el) observer.observe(el)
	})
})

onUnmounted(() => observer?.disconnect())

const scrollTo = (id) => {
	document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
	<div
		class="flex flex-col border-white min-h-screen relative bg-[#0d0d0d] selection:bg-[#cbf3ce] selection:text-black"
	>
		<div class="grain-overlay"></div>
		<nav
			class="liquid-glass fixed z-20 left-1/2 -translate-x-1/2 top-6 px-6 py-3 flex items-center gap-2"
		>
			<button
				v-for="item in navItems"
				:key="item.id"
				@click="scrollTo(item.id)"
				:class="[
					'relative p-2.5 rounded-full transition-all duration-300',
					activeSection === item.id
						? 'text-white shadow-inner'
						: 'text-white/40 hover:text-white/80 hover:bg-white/10',
				]"
				:title="item.label"
			>
				<!-- Home -->
				<svg
					v-if="item.id === 'home'"
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path
						d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
					/>
					<path
						d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
					/>
				</svg>

				<!-- About -->
				<svg
					v-if="item.id === 'about'"
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
						clip-rule="evenodd"
					/>
				</svg>

				<!-- Projects -->
				<svg
					v-if="item.id === 'projects'"
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
					<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
				</svg>

				<!-- Contact -->
				<svg
					v-if="item.id === 'contact'"
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
						clip-rule="evenodd"
					/>
				</svg>

				<!-- Active dot -->
				<span
					v-if="activeSection === item.id"
					class="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white"
				/>
			</button>
		</nav>
		<Home />
		<About />
		<Stacks />
		<Projects />
	</div>
</template>
