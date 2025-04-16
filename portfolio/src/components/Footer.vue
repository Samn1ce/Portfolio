<script setup>
import { ref, watch } from 'vue'
import Enter from './icons/IconEnter.vue'
import IconMail from './icons/IconMail.vue'
import IconGitHub from './icons/IconGitHub.vue'
import IconTwitter from './icons/IconTwitter.vue'
import IconLinkedIn from './icons/IconLinkedIn.vue'
import SocialLinks from '../assets/SocialLinks.json'
import gsap from 'gsap'

const showSocials = ref(false)
console.log(showSocials)

const iconMap = {
	Twitter: IconTwitter,
	LinkedIn: IconLinkedIn,
	Mail: IconMail,
	Github: IconGitHub,
}

watch(showSocials, (newVal) => {
	if (newVal) {
		// Run GSAP animation when `showSocials` is true
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
</script>

<template>
	<div
		class="w-11/12 max-w-7xl md:w-3/5 h-24 md:h-36 relative shadow-md rounded-xl overflow-hidden"
	>
		<div
			class="w-full h-full bg-white flex justify-between items-end p-3 absolute"
		>
			<div class="text-2xl md:text-3xl lg:text-4xl font-semibold">
				<p>Lets</p>
				<p>Work <span class="text-blue-500">Together.</span></p>
			</div>
			<Enter
				@click="showSocials = !showSocials"
				class="w-7 h-7 cursor-pointer"
			/>
		</div>
		<div
			@click="showSocials = !showSocials"
			v-show="showSocials"
			class="absolute w-full h-full rounded-xl backdrop-blur-sm flex justify-center items-center gap-8 border-red-500 social-link"
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
