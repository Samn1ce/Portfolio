<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import '@/assets/styles/main.css'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Stacks from './views/Stacks.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
import IconHome from './components/icons/IconHome.vue'
import IconAbout from './components/icons/IconAbout.vue'
import IconProject from './components/icons/IconProject.vue'
import IconContact from './components/icons/IconContact.vue'

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
				<component :is="IconHome" v-if="item.id === 'home'" />
				<component :is="IconAbout" v-if="item.id === 'about'" />
				<component :is="IconProject" v-if="item.id === 'projects'" />
				<component :is="IconContact" v-if="item.id === 'contact'" />
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
		<Contact />
	</div>
</template>
