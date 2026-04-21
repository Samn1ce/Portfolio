<script setup>
const projects = [
	{
		number: '01',
		name: 'Arenagg',
		description:
			'A competitive gaming platform where players discover tournaments, track rankings, and connect with teams. Built for speed and real-time updates.',
		tags: ['Vue', 'Laravel', 'MySQL', 'WebSockets'],
		year: '2024',
		link: '#',
	},
	{
		number: '02',
		name: 'Ledger',
		description:
			'A personal finance tracker with clean data visualisation, expense categorisation, and monthly budget insights for individuals and small teams.',
		tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL'],
		year: '2023',
		link: '#',
	},
]

const jobs = [
	{
		company: 'Freelance',
		role: 'Full-Stack Developer',
		period: '2022 — Present',
		description:
			'Designing and building web applications for clients across Nigeria and internationally. From scoping to deployment.',
	},
	{
		company: 'TechStudio NG',
		role: 'Frontend Developer Intern',
		period: '2023',
		description:
			'Collaborated on a team of 4 building internal dashboards and client-facing web apps using React and Tailwind.',
	},
]
</script>

<template>
	<section id="projects" class="w-11/12 max-w-7xl mx-auto md:px-6 pt-0 pb-16">
		<!-- Header -->
		<div class="flex flex-row-reverse items-center gap-4 mb-8 md:mb-16">
			<span class="text-[#555] text-sm font-mono">02</span>
			<h2
				class="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight"
			>
				Projects & Work
			</h2>
			<div class="flex-1 border-t border-white/10"></div>
		</div>

		<!-- Projects grid -->
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 md:mb-24"
		>
			<a
				v-for="project in projects"
				:key="project.number"
				:href="project.link"
				class="group relative flex flex-col justify-between border border-white/10 p-6 md:p-8 aspect-square hover:bg-white/3 transition-all duration-300"
			>
				<!-- Top row: number + year -->
				<div class="flex items-center justify-between">
					<span class="text-[#555] text-xs font-mono">{{
						project.number
					}}</span>
					<span class="text-[#444] text-xs font-mono">{{
						project.year
					}}</span>
				</div>

				<!-- Middle: title + description -->
				<div class="flex flex-col gap-3">
					<h3
						class="font-serif text-white text-2xl md:text-3xl font-medium group-hover:text-[#cbf3ce] transition-colors duration-300 leading-tight"
					>
						{{ project.name }}
					</h3>
					<p
						class="font-sans text-[#666] text-sm leading-relaxed line-clamp-3"
					>
						{{ project.description }}
					</p>
				</div>

				<!-- Bottom: tags + arrow -->
				<div class="flex items-end justify-between gap-2">
					<div class="flex flex-wrap gap-2">
						<span
							v-for="tag in project.tags"
							:key="tag"
							class="text-[#555] text-[10px] font-mono uppercase tracking-wider border border-white/10 rounded px-2 py-0.5"
						>
							{{ tag }}
						</span>
					</div>
					<span
						class="text-[#444] group-hover:text-[#cbf3ce] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-lg shrink-0"
					>
						→
					</span>
				</div>
			</a>
		</div>

		<!-- Work Experience sub-header -->
		<div class="flex items-center gap-4 mb-8">
			<h3
				class="font-serif text-white text-2xl md:text-3xl font-medium tracking-tight shrink-0"
			>
				Work Experience
			</h3>
			<div class="flex-1 border-t border-white/10"></div>
		</div>

		<!-- Jobs list -->
		<div class="grid-cols-1 md:grid-cols-2">
			<div
				v-for="job in jobs"
				:key="job.company"
				class="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-12 border-t border-white/10 py-6 md:py-8 hover:bg-white/[0.03] transition-all duration-300 -mx-4 px-4 md:-mx-6 md:px-6"
			>
				<div>
					<div
						class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2"
					>
						<h4
							class="font-serif text-white text-xl md:text-2xl font-medium group-hover:text-[#cbf3ce] transition-colors duration-300"
						>
							{{ job.company }}
						</h4>
						<span
							class="text-[#555] text-xs font-mono uppercase tracking-wider"
						>
							{{ job.role }}
						</span>
					</div>
					<p
						class="font-sans text-[#666] text-sm leading-relaxed max-w-xl"
					>
						{{ job.description }}
					</p>
				</div>
				<div class="flex items-start md:items-center mt-1 md:mt-0">
					<span
						class="text-[#444] text-xs font-mono whitespace-nowrap"
						>{{ job.period }}</span
					>
				</div>
			</div>
			<div class="border-t border-white/10"></div>
		</div>
	</section>
</template>
