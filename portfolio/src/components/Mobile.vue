<script setup>
import IconDark from './icons/IconDark.vue'
import IconLight from './icons/IconLight.vue'

defineProps(['isDark', 'toggleDark'])
</script>

<template>
	<div
		class="md:hidden flex flex-col gap-4 mb-10 justify-center items-center w-full py-5"
	>
		<div class="w-44 h-44 rounded-full border-2 border-blue-500"></div>
		<h1 class="text-3xl font-bold text-center dark:text-neutral-300">
			BABATUNDE IFEOLUWA
		</h1>
		<div class="flex gap-4 sticky top-5">
			<div
				class="bg-white dark:bg-neutral-950 dark:text-neutral-400 border flex py-2 px-5 rounded-full gap-4 font-semibold shadow-lg"
			>
				<p>Home</p>
				<p>Project</p>
				<p>Contact</p>
			</div>
			<div
				@click="toggleDark"
				class="bg-white dark:bg-neutral-950 flex justify-center items-center h-10 w-10 border rounded-full shadow-lg cursor-pointer"
			>
				<component
					:is="isDark ? IconLight : IconDark"
					class="cursor-pointer"
				/>
			</div>
		</div>
		<div class="space-y-1 text-sm mt-2 dark:text-zinc-50">
			<p>
				say hi:
				<a
					href="mailto:iamsamnice@gmail.com"
					class="border-dotted border-b border-blue-500 text-blue-500"
					>iamsamnice@gmail.com</a
				>
			</p>
			<p>
				github
				<a
					href="https://github.com/samn1ce"
					class="border-dotted border-b border-blue-500 text-blue-500"
					>samn1ce</a
				>
			</p>
			<p>
				linkedin:
				<a
					class="border-dotted border-b border-blue-500 text-blue-500"
					href="https://www.linkedin.com/in/ifeoluwa-babatunde-9036b7288/"
					>Ifeoluwa Babatunde</a
				>
			</p>
			<p>
				twitter(x):
				<a
					href="https://x.com/ifeoluwasamnice"
					class="border-dotted border-b border-blue-500 text-blue-500"
					>ifeoluwasamnice</a
				>
			</p>
		</div>
	</div>
</template>
