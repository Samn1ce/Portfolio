<script setup>
import IconGitHub from '@/components/icons/IconGitHub.vue'
import IconLink from '@/components/icons/IconLink.vue'
import projects from '@/assets/Projects.json'
import workExperience from '@/assets/workExperience.json'
</script>

<template>
	<section
		id="projects"
		class="w-11/12 max-w-7xl mx-auto md:px-6 pt-0 md:pb-16"
	>
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
				v-for="(project, index) in projects"
				:key="project.id"
				:href="project.link"
				class="group relative flex flex-col justify-between border border-white/10 p-6 md:p-8 aspect-square hover:bg-white/3 transition-all duration-300"
			>
				<div class="flex items-center justify-between">
					<span class="text-[#555] text-xs font-mono">{{
						String(index + 1).padStart(2, '0')
					}}</span>
					<span class="text-[#444] text-xs font-mono">{{
						project.year
					}}</span>
				</div>
				<div class="flex flex-col gap-3 mb-6">
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
				<div class="flex items-end justify-between gap-2 mb-6">
					<div class="flex flex-wrap gap-2">
						<span
							v-for="lang in project.langs"
							:key="lang"
							class="text-[#999] text-[10px] font-mono uppercase tracking-wider border border-white/10 rounded px-2 py-0.5"
						>
							{{ lang }}
						</span>
					</div>
				</div>
				<div class="w-full border border-white/10"></div>
				<div class="flex gap-4 mt-6">
					<a
						:href="project.github"
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

		<div class="flex items-center gap-4">
			<h3
				class="font-serif text-white text-2xl md:text-3xl font-medium tracking-tight shrink-0"
			>
				Work Experience
			</h3>
			<div class="flex-1 border border-white/10"></div>
		</div>

		<div class="relative">
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
					v-for="(job, index) in workExperience"
					:key="job.company"
					class="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0"
				>
					<div
						class="absolute left-2 sm:left-[4.5px] top-6 w-3 h-3 rounded-full bg-[#cbf3ce] border-2 border-[#0d0d0d] z-10 md:left-1/2 md:-translate-x-1/2"
					></div>

					<div
						:class="[
							'group md:border-t md:border-b border-white/10 p-6 pl-10 transition-all duration-300',
							'md:pl-6',
							index % 2 === 0
								? 'md:col-start-1 md:pr-12'
								: 'md:col-start-2 md:pl-12',
						]"
					>
						<div
							:class="[
								'flex items-center justify-between',
								index % 2 === 0
									? 'md:flex-row-reverse'
									: 'md:flex-row',
							]"
						>
							<div
								:class="[
									'flex flex-col gap-0.5',
									index % 2 === 0
										? 'md:items-end'
										: 'md:items-start',
								]"
							>
								<h4
									:class="[
										'font-serif text-white text-xl md:text-2xl font-medium group-hover:text-[#cbf3ce] transition-colors duration-300 mb-1',
										index % 2 === 0
											? 'md:text-right'
											: 'md:text-left',
									]"
								>
									{{ job.role }}
								</h4>
								<p
									class="text-[#cbf3ce] text-xs font-mono uppercase tracking-wider"
								>
									{{ job.company }}
								</p>
								<p class="text-[#555] text-xs font-mono mb-4">
									{{ job.location }}
								</p>
							</div>
							<p class="text-[#444] text-xs font-mono">
								{{ job.period }}
							</p>
						</div>

						<div class="border-t border-white/10 mb-4"></div>

						<div
							:class="[
								'flex flex-col',
								index % 2 === 0
									? 'md:items-end'
									: 'md:items-start',
							]"
						>
							<p
								:class="[
									'font-sans text-[#666] text-sm leading-relaxed mb-4',
									index % 2 === 0
										? 'md:text-right'
										: 'md:text-left',
								]"
							>
								{{ job.description }}
							</p>
							<div class="flex flex-wrap gap-2">
								<span
									v-for="lang in job.langs"
									:key="lang"
									class="text-[#999] text-[10px] font-mono uppercase tracking-wider border border-white/10 rounded px-2 py-0.5"
								>
									{{ lang }}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
