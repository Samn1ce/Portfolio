<script setup>
import MyProjects from '@/components/MyProjects.vue'
import MobileHeader from '@/components/MobileHeader.vue'
import Footer from '@/components/Footer.vue'
import Self from './Self.vue'

defineProps(['isDark', 'toggleDark'])
</script>

<template>
	<div
		class="md:hidden flex flex-col gap-4 mb-10 justify-center items-center w-full pt-20"
	>
		<MobileHeader :is-dark="isDark" :toggle-dark="toggleDark" />
		<Self />
		<MyProjects />
	</div>
</template>
