<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
// ICONS IMPORT
import Twitter from './icons/IconTwitter.vue'
import LinkedIn from './icons/IconLinkedIn.vue'
import GitHub from './icons/IconGitHub.vue'
import Mail from './icons/IconMail.vue'
import Enter from './icons/IconEnter.vue'
import Vue from './icons/IconVue.vue'
import React from './icons/IconReact.vue'
import Tailwind from './icons/IconTailwind.vue'
import TS from './icons/IconTypescript.vue'
import JS from './icons/IconJavascript.vue'
import Close from './icons/IconClose.vue'
import Arrow from './icons/IconArrow.vue'
// GSAP IMPORT
import gsap from 'gsap'
// DATA FILES IMPORT
import Projects from '../assets/Projects.json'

// ANIMATION JS
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
const icons = [Vue, React, Tailwind, JS, TS]
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

// REF STATE VALUES
const viewProject = ref(false)
const isHovered = ref(null)

// FUNCTION TO OPEN PROJECT LINKS
const openProjectLink = (link) => {
	if (link) {
		window.open(link, '_blank')
	}
}
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
			:class="[
				'rounded-xl p-3 md:order-last transition-all duration-500',
				viewProject
					? 'bg-gradient w-full absolute right-0 top-0 z-10 h-full flex justify-between items-start'
					: 'w-45 md:w-1/4 flex justify-between items-end bg-gradient transition-all duration-500',
			]"
		>
			<div class="w-full h-full">
				<div
					:class="[
						'flex md:justify-between w-full h-full flex-col', // Added flex-col
						viewProject ? 'items-start' : 'items-end',
					]"
				>
					<div
						:class="[
							'flex w-full',
							viewProject
								? 'justify-between'
								: 'h-full items-end',
						]"
					>
						<div class="flex justify-between items-end w-full">
							<div>
								<p class="text-xxs text-detail font-semibold">
									More About Me
								</p>
								<p class="font-semibold text-xs sm:text-base">
									Projects
								</p>
							</div>
							<div>
								<Enter
									v-if="!viewProject"
									@click="viewProject = !viewProject"
									class="w-4 h-4 sm:w-7 sm:h-7 cursor-pointer"
								/>
								<Close
									class="cursor-pointer"
									v-else
									@click="viewProject = !viewProject"
								/>
							</div>
						</div>
					</div>
					<div
						:class="[
							viewProject
								? 'flex flex-col md:flex-row md:gap-4 h-[calc(100%-50px)] md:h-[calc(100%-0px)] overflow-y-auto md:overflow-x-auto md:overflow-y-hidden w-full mt-2 md:mt-0 custom-scrollbar'
								: '',
						]"
					>
						<div
							v-for="project in Projects"
							:key="project.id"
							v-if="viewProject"
							@mouseover="isHovered = project.id"
							@mouseleave="isHovered = null"
							class="w-full md:w-2/5 md:min-h-0 md:h-20 rounded-lg mb-4 md:mb-0 flex-shrink-0 overflow-hidden"
						>
							<div class="w-full h-full relative">
								<p
									class="absolute text-xs transform left-1/2 -translate-x-1/2 font-bold"
								>
									<span
										v-if="isHovered === project.id"
										v-show="isHovered === project.id"
										v-for="(language, i) in project.lang"
										:key="i"
										:style="{ color: language.color }"
									>
										{{ language.name }}
										<span
											v-if="i < project.lang.length - 1"
											class="text-white"
											>, &nbsp;
										</span>
									</span>
								</p>
								<div
									@click="openProjectLink(project.link)"
									v-if="isHovered === project.id"
									v-show="isHovered === project.id"
									target="_blank"
									:class="[
										'absolute z-50 transition-all ease-in duration-700 cursor-pointer w-12 h-12 p-1 flex justify-center items-center rounded-full border-red-500 border transform left-1/2 -translate-x-1/2 top-1/2',
										isHovered === project.id
											? '-translate-y-1/2 opacity-100'
											: 'translate-y-full opacity-0',
									]"
								>
									<div
										class="bg-red-500 w-full h-full rounded-full flex justify-center items-center"
									>
										<Arrow />
									</div>
								</div>
								<img
									:class="[
										'w-full h-full z-10 transition-all',
										isHovered === project.id
											? 'opacity-25'
											: '',
									]"
									:src="project.img"
									:alt="project.name || 'Project image'"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
/* For Webkit browsers (Chrome, Safari) */
.custom-scrollbar::-webkit-scrollbar {
	height: 4px;
	width: 4px;
	display: none; /* Hide by default */
}

.custom-scrollbar::-webkit-scrollbar-track {
	background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
	background: rgba(255, 255, 255, 0.3);
	border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
	background: rgba(255, 255, 255, 0.5);
}

/* Show scrollbar on hover */
.custom-scrollbar:hover::-webkit-scrollbar {
	display: block;
}

/* For Firefox */
.custom-scrollbar {
	scrollbar-width: none; /* Hide by default */
}

.custom-scrollbar:hover {
	scrollbar-width: thin;
	scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
}

/* Keep your existing styles */
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
