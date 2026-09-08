<script setup>
import IconTailwind from '@/components/icons/IconTailwind.vue'
import IconReact from '@/components/icons/IconReact.vue'
import IconJavascript from '@/components/icons/IconJavascript.vue'
import IconTypescript from '@/components/icons/IconTypescript.vue'
import IconVue from '@/components/icons/IconVue.vue'
import IconHtml from '@/components/icons/IconHtml.vue'
import IconCss from '@/components/icons/IconCss.vue'
import IconNextJs from '@/components/icons/IconNextJs.vue'
import IconPhp from '@/components/icons/IconPhp.vue'
import IconLaravel from '@/components/icons/IconLaravel.vue'
import IconSql from '@/components/icons/IconSql.vue'
import IconSupabase from '@/components/icons/IconSupabase.vue'
import IconPostgreSql from '@/components/icons/IconPostgreSql.vue'
import IconAlpineJs from '@/components/icons/IconAlpineJs.vue'
import IconMongoDB from '@/components/icons/IconMongoDB.vue'
import IconNode from '@/components/icons/IconNode.vue'
import IconExpress from '@/components/icons/IconExpress.vue'

const stacks = [
	{
		name: 'HTML',
		icon: IconHtml,
	},
	{
		name: 'CSS',
		icon: IconCss,
	},
	{
		name: 'Tailwind',
		icon: IconTailwind,
	},
	{
		name: 'JavaScript',
		icon: IconJavascript,
	},
	{
		name: 'TypeScript',
		icon: IconTypescript,
	},
	{
		name: 'React',
		icon: IconReact,
	},
	{
		name: 'Vue',
		icon: IconVue,
	},
	{
		name: 'Next.js',
		icon: IconNextJs,
	},
	{
		name: 'Alpine.js',
		icon: IconAlpineJs,
	},
	{
		name: 'PHP',
		icon: IconPhp,
	},
	{
		name: 'Laravel',
		icon: IconLaravel,
	},
	{
		name: 'Node.js',
		icon: IconNode,
	},
	{
		name: 'Express.js',
		icon: IconExpress,
	},
	{
		name: 'MongoDB',
		icon: IconMongoDB,
	},
	{
		name: 'Supabase',
		icon: IconSupabase,
	},
	{
		name: 'MySQL',
		icon: IconSql,
	},
	{
		name: 'PostgreSQL',
		icon: IconPostgreSql,
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
					<component
						:is="stack.icon"
						:alt="stack.name"
						class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
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
