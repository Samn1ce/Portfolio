<script setup>
import Mail from './icons/IconMail.vue'
import GitHub from './icons/IconGitHub.vue'
import Twitter from './icons/IconTwitter.vue'
import LinkedIn from './icons/IconLinkedIn.vue'
</script>

<template>
	<div class="w-full h-10">
		<div
			class="w-full h-[1px] bg-gradient-to-r from-[#171717] from-60% via-[#494949] via-25% to-[#121212] to-15%"
		></div>
		<div
			class="w-full h-5/6 flex justify-center items-center gap-4 text-zinc-400 font-poppins font-semibold"
		>
			<p>
				&copy; {{ new Date().getFullYear()
				}}<span class="font-edu"><i> Ifeoluwa Samnice</i></span
				>.
			</p>
		</div>
	</div>
</template>
