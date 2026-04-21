<script setup>
import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconLink from '@/components/icons/IconLink.vue'

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
		location: 'Lagos, Nigeria',
		description:
			'Designing and building web applications for clients across Nigeria and internationally. From scoping to deployment.',
		tags: ['Vue', 'Laravel', 'MySQL', 'Tailwind'],
	},
	{
		company: 'TechStudio NG',
		role: 'Frontend Developer Intern',
		period: '2023',
		location: 'Lagos, Nigeria',
		description:
			'Collaborated on a team of 4 building internal dashboards and client-facing web apps using React and Tailwind.',
		tags: ['React', 'TypeScript', 'Tailwind'],
	},
]
</script>

<template>
	<section id="projects" class="w-11/12 max-w-7xl mx-auto md:px-6 pt-0 pb-16">
		<div class="flex flex-row-reverse items-center gap-4 mb-8 md:mb-16">
			<span class="text-[#555] text-sm font-mono">02</span>
			<h2
				class="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight"
			>
				Projects & Work
			</h2>
			<div class="flex-1 border-t border-white/10"></div>
		</div>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 md:mb-24"
		>
			<div
				v-for="project in projects"
				:key="project.number"
				:href="project.link"
				class="group relative flex flex-col justify-between border border-white/10 p-6 md:p-8 aspect-square hover:bg-white/3 transition-all duration-300"
			>
				<div class="flex items-center justify-between">
					<span class="text-[#555] text-xs font-mono">{{
						project.number
					}}</span>
					<span class="text-[#444] text-xs font-mono">{{
						project.year
					}}</span>
				</div>
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
				<div class="flex items-end justify-between gap-2">
					<div class="flex flex-wrap gap-2">
						<span
							v-for="tag in project.tags"
							:key="tag"
							class="text-[#999] text-[10px] font-mono uppercase tracking-wider border border-white/10 rounded px-2 py-0.5"
						>
							{{ tag }}
						</span>
					</div>
				</div>
				<div class="w-ful border border-white/10"></div>
				<div class="flex gap-4">
					<a
						:href="project.link"
						target="_blank"
						rel="noopener noreferrer"
						class="border border-white/10 aspect-square p-3 hover:bg-white/5 cursor-pointer transition-all duration-300"
					>
						<component
							:is="IconGitHub"
							class="w-5 h-5 text-[#999]"
						/>
					</a>
					<a
						:href="project.link"
						target="_blank"
						rel="noopener noreferrer"
						class="border border-white/10 aspect-square p-3 hover:bg-white/5 cursor-pointer transition-all duration-300"
					>
						<component :is="IconLink" class="w-5 h-5 text-[#999]" />
					</a>
				</div>
			</div>
		</div>

		<!-- Work Experience sub-header -->
		<div class="flex items-center gap-4">
			<h3
				class="font-serif text-white text-2xl md:text-3xl font-medium tracking-tight shrink-0"
			>
				Work Experience
			</h3>
			<div class="flex-1 border border-white/10"></div>
		</div>

		<!-- Timeline -->
		<div class="relative">
			<!-- Mobile: left line | Desktop: center line -->
			<div
				class="absolute left-3 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2"
				style="
					background: linear-gradient(
						to bottom,
						transparent,
						rgba(255, 255, 255, 0.2) 20%,
						rgba(255, 255, 255, 0.2) 80%,
						transparent
					);
				"
			></div>

			<div class="flex flex-col gap-8 py-14">
				<div
					v-for="(job, index) in jobs"
					:key="job.company"
					class="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0"
				>
					<!-- Mobile: left dot | Desktop: center dot -->
					<div
						class="absolute left-2 md:left-[4.5px] top-6 w-3 h-3 rounded-full bg-[#cbf3ce] border-2 border-[#0d0d0d] z-10 md:left-1/2 md:-translate-x-1/2"
					></div>

					<!-- Card -->
					<div
						:class="[
							'group md:border-t md:border-b border-white/10 p-6 pl-10 transition-all duration-300',
							'md:pl-6',
							index % 2 === 0
								? 'md:col-start-1 md:pr-12'
								: 'md:col-start-2 md:pl-12',
						]"
					>
						<!-- Role -->
						<h4
							class="font-serif text-white text-xl md:text-2xl font-medium group-hover:text-[#cbf3ce] transition-colors duration-300 mb-1"
						>
							{{ job.role }}
						</h4>

						<!-- Company + period row -->
						<div class="flex items-center justify-between mb-1">
							<span
								class="text-[#cbf3ce] text-xs font-mono uppercase tracking-wider"
							>
								{{ job.company }}
							</span>
							<span class="text-[#444] text-xs font-mono">{{
								job.period
							}}</span>
						</div>

						<!-- Location -->
						<p class="text-[#555] text-xs font-mono mb-4">
							{{ job.location }}
						</p>

						<!-- Divider -->
						<div class="border-t border-white/10 mb-4"></div>

						<!-- Description -->
						<p
							class="font-sans text-[#666] text-sm leading-relaxed mb-4"
						>
							{{ job.description }}
						</p>

						<!-- Tags -->
						<div class="flex flex-wrap gap-2">
							<span
								v-for="tag in job.tags"
								:key="tag"
								class="text-[#999] text-[10px] font-mono uppercase tracking-wider border border-white/10 rounded px-2 py-0.5"
							>
								{{ tag }}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
