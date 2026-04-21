<script setup>
const stacks = [
	{
		name: 'HTML',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
	},
	{
		name: 'CSS',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
	},
	{
		name: 'Tailwind',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
	},
	{
		name: 'JavaScript',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
	},
	{
		name: 'TypeScript',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
	},
	{
		name: 'React',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
	},
	{
		name: 'Vue',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
	},
	{
		name: 'Next.js',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
	},
	{
		name: 'PHP',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
	},
	{
		name: 'Laravel',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
	},
	{
		name: 'Supabase',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
	},
	{
		name: 'MySQL',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
	},
	{
		name: 'PostgreSQL',
		icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
	},
]
</script>

<template>
	<section id="stack" class="w-11/12 md:w-9/12 max-w-5xl mx-auto px-6 pb-20">
		<div class="flex items-center gap-4 mb-8">
			<div class="w-full flex-1 border border-white/10"></div>
			<h2
				class="font-serif text-white text-3xl md:text-4xl font-medium tracking-tight"
			>
				Tools of the trade
			</h2>
			<div class="w-full flex-1 border border-white/10"></div>
		</div>

		<!-- Grid -->
		<div class="flex flex-wrap gap-4">
			<div v-for="stack in stacks" :key="stack.name" class="group">
				<div
					class="flex items-center justify-center gap-2 p-3 border border-white/10 hover:bg-white/5 transition-all duration-200 cursor-default"
				>
					<img
						:src="stack.icon"
						:alt="stack.name"
						class="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
					/>
					<span
						class="text-[#555] text-[11px] font-mono group-hover:text-[#999] transition-colors duration-200"
					>
						{{ stack.name }}
					</span>
				</div>
			</div>
		</div>
	</section>
</template>
