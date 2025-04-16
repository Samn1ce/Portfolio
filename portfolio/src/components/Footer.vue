<script setup>
import { ref } from 'vue'
import Enter from './icons/IconEnter.vue'

const showSocials = ref(false)
</script>

<template>
	<div class="w-11/12 max-w-7xl md:w-3/5 h-36 relative">
		<div
			class="w-full h-full rounded-xl bg-white flex justify-between items-end p-3 absolute"
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
</template>
