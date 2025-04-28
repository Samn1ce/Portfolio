<script setup>
import { ref, watch, nextTick } from 'vue'
import Enter from './icons/IconEnter.vue'
import IconMail from './icons/IconMail.vue'
import IconGitHub from './icons/IconGitHub.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconLinkedIn from './icons/IconLinkedIn.vue'
import SocialLinks from '../assets/SocialLinks.json'
import gsap from 'gsap'

const showSocials = ref(false)

const iconMap = {
	Twitter: IconTwitter,
	LinkedIn: IconLinkedIn,
	Mail: IconMail,
	Github: IconGitHub,
}

watch(showSocials, async (newVal) => {
	await nextTick()
	if (newVal) {
		// Animate in
		gsap.fromTo(
			'.social-link',
			{ opacity: 0, y: 20 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				stagger: 0.1,
				ease: 'power2.inOut',
			}
		)
	} else {
		// Animate out
		gsap.to('.social-link', {
			opacity: 0,
			y: 20,
			duration: 0.3,
			ease: 'power2.inOut',
		})
	}
})
</script>

<template>
	<div
		id="contact"
		class="w-11/12 max-w-7xl md:w-3/5 h-24 md:h-36 relative shadow-md rounded-xl overflow-hidden"
	>
		<div
			class="w-full h-full bg-white dark:bg-neutral-950 flex justify-between items-end p-3 absolute z-10"
		>
			<div
				class="text-2xl md:text-3xl lg:text-4xl font-semibold dark:text-neutral-300"
			>
				<p>Lets</p>
				<p>Work <span class="text-blue-500">Together.</span></p>
			</div>
			<div @click="showSocials = !showSocials">
				<Enter class="w-7 h-7 cursor-pointer" />
			</div>
		</div>
		<div
			@click="showSocials = false"
			v-show="true"
			:class="[
				'absolute w-full h-full rounded-xl flex justify-center items-center gap-8 border-red-500',
				showSocials ? 'backdrop-blur-sm z-20' : 'cursor-pointer',
			]"
		>
			<a
				v-for="social in SocialLinks"
				:key="social.href"
				:href="social.href"
				target="_blank"
				class="social-link w-10 h-10 bg-zinc-900/50 border border-white rounded-full flex justify-center items-center hover:bg-zinc-900 transition-all cursor-pointer"
				><component :is="iconMap[social.icon]" class="text-white"
			/></a>
		</div>
	</div>
</template>
