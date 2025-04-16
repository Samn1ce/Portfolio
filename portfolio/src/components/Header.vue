<script setup>
import IconDark from './icons/IconDark.vue'
import IconLight from './icons/IconLight.vue'

defineProps(['isDark', 'toggleDark'])
</script>

<template>
	<div
		class="md:w-4/6 h-16 hidden md:flex items-center justify-between px-10"
	>
		<div class="bg-white h-10 w-10 border rounded-full shadow-lg"></div>

		<div
			class="bg-white border flex py-2 px-5 rounded-full gap-4 font-semibold shadow-lg dark:bg-neutral-950 dark:text-zinc-50"
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
</template>
