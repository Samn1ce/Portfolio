<script setup lang="ts">
import IconDark from './icons/IconDark.vue'
import IconLight from './icons/IconLight.vue'
const toggleDark = () => {
	document.documentElement.classList.toggle('dark')
}
</script>

<template>
	<div
		class="md:w-4/6 h-16 hidden md:flex items-center justify-between px-10"
	>
		<div class="bg-white h-10 w-10 border rounded-full shadow-lg"></div>

		<div
			class="bg-white dark:border-blue-400 border flex py-2 px-5 rounded-full gap-4 font-semibold shadow-lg"
		>
			<p>Home</p>
			<p>Project</p>
			<p>Contact</p>
		</div>
		<div
			class="bg-white flex justify-center items-center h-10 w-10 border rounded-full shadow-lg"
		>
			<component
				:is="isDark ? IconLight : IconDark"
				@click="toggleDark"
				class="cursor-pointer"
			/>
		</div>
	</div>
</template>
