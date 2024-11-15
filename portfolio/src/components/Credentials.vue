<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
// import { Twitter, Linkedin, Mail, Github } from "lucide-vue-next";
// import SocialLinks from "../assets/SocialLinks.json";
import Twitter from './icons/IconTwitter.vue'
import LinkedIn from './icons/IconLinkedIn.vue'
import GitHub from './icons/IconGitHub.vue'
import Mail from './icons/IconMail.vue'
import Enter from './icons/IconEnter.vue'
import Vue from './icons/IconVue.vue'
import React from './icons/IconReact.vue'
import Tailwind from './icons/IconTailwind.vue'
import JS from './icons/IconJavascript.vue'
import gsap from 'gsap'

const henry = ref(false)

watch(henry, (newVal) => {
	if (newVal) {
		// Run GSAP animation when `henry` is true
		gsap.fromTo(
			'.social-link',
			{ opacity: 0, y: 20 }, // Start state
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.1, // Delay between each element
				ease: 'power2.inOut',
			}
		)
	}
})

// Array of icons for the slideshow
// Icons array and state management for slideshow
const icons = [Vue, React, Tailwind, JS]
const currentIconIndex = ref(0)
const nextIconIndex = ref(1)
let intervalId

const cycleIcons = () => {
	const tl = gsap.timeline()

	// First set the next icon to its starting position
	gsap.set('.next-icon', {
		opacity: 0,
		scale: 0.8,
	})

	tl.to('.current-icon', {
		opacity: 0,
		scale: 0.8,
		duration: 0.4,
		ease: 'power2.inOut',
	}).to(
		'.next-icon',
		{
			opacity: 1,
			scale: 1,
			duration: 0.4,
			ease: 'power2.inOut',
			onComplete: () => {
				currentIconIndex.value = nextIconIndex.value
				nextIconIndex.value = (nextIconIndex.value + 1) % icons.length

				// Reset the positions for the next transition
				gsap.set('.current-icon', {
					opacity: 1,
					scale: 1,
				})
				gsap.set('.next-icon', {
					opacity: 0,
					scale: 0.8,
				})
			},
		},
		'-=0.3'
	) // Slight overlap for smoother transition
}

onMounted(() => {
	nextIconIndex.value = (currentIconIndex.value + 1) % icons.length
	// Set initial states
	gsap.set('.current-icon', { opacity: 1, scale: 1 })
	gsap.set('.next-icon', { opacity: 0, scale: 0.8 })
	intervalId = setInterval(cycleIcons, 5000)
})

onBeforeUnmount(() => {
	clearInterval(intervalId)
	// Clean up any remaining animations
	gsap.killTweensOf(['.current-icon', '.next-icon'])
})
</script>

<template>
	<section
		class="w-full md:h-36 flex-wrap md:flex-nowrap flex gap-4 text-zinc-100"
	>
		<div
			class="w-45 md:w-1/4 flex flex-col justify-between rounded-xl bg-gradient p-3 order-first"
		>
			<div class="slideshow-container relative w-full aspect-square">
				<div
					class="current-icon absolute inset-0 flex items-center justify-center"
				>
					<component :is="icons[currentIconIndex]" />
				</div>
				<div
					class="next-icon absolute inset-0 flex items-center justify-center"
				>
					<component :is="icons[nextIconIndex]" />
				</div>
			</div>
		</div>
		<div class="w-full h-36 order-last relative">
			<div
				class="w-full h-full rounded-xl bg-gradient flex justify-between items-end p-3 absolute"
			>
				<div class="text-2xl md:text-3xl lg:text-4xl font-semibold">
					<p>Lets</p>
					<p>Work <span class="text-blue-500">Together.</span></p>
				</div>
				<Enter @click="henry = !henry" class="w-7 h-7 cursor-pointer" />
			</div>
			<div
				@click="henry = !henry"
				v-show="henry"
				class="absolute w-full h-full rounded-xl backdrop-blur-sm flex justify-center items-center gap-8"
			>
				<a
					href="https://x.com/IfeoluwaSamnice"
					target="_blank"
					class="social-link w-10 h-10 bg-zinc-900/50 border border-white rounded-full flex justify-center items-center hover:bg-zinc-900 transition-all cursor-pointer"
					><Twitter class="text-white"
				/></a>
				<a
					href="https://www.linkedin.com/in/ifeoluwa-babatunde-9036b7288/"
					target="_blank"
					class="social-link w-10 h-10 bg-zinc-900/50 border border-white rounded-full flex justify-center items-center hover:bg-zinc-900 transition-all cursor-pointer"
					><LinkedIn class="text-white"
				/></a>
				<a
					href="mailto:iamsamnice@gmail.com"
					target="_blank"
					class="social-link w-10 h-10 bg-zinc-900/50 border border-white rounded-full flex justify-center items-center hover:bg-zinc-900 transition-all cursor-pointer"
					><Mail class="text-white"
				/></a>
				<a
					href="https://github.com/Samn1ce"
					target="_blank"
					class="social-link w-10 h-10 bg-zinc-900/50 border border-white rounded-full flex justify-center items-center hover:bg-zinc-900 transition-all cursor-pointer"
					><GitHub class="text-white"
				/></a>
			</div>
		</div>
		<div
			class="w-45 md:w-1/4 rounded-xl flex justify-between items-end p-3 bg-gradient md:order-last"
		>
			<div>
				<p class="text-xxs text-detail font-semibold">More About Me</p>
				<p class="font-semibold text-xs sm:text-base">Credentials</p>
			</div>
			<Enter class="w-4 h-4 sm:w-7 sm:h-7 cursor-pointer" />
		</div>
	</section>
</template>

<style scoped>
.slideshow-container {
	position: relative;
}

.slideshow-container :deep(svg) {
	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: 100%;
}

.current-icon,
.next-icon {
	transform-origin: center;
	will-change: transform, opacity;
	pointer-events: none;
}
</style>
