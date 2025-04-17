<script setup>
import Projects from '@/assets/Projects.json'
import IconEnter from './icons/IconEnter.vue'
</script>

<template>
	<div class="lg:px-28 px-5 p-4 pt-9 rounded-b-xl">
		<div class="text-xl font-bold dark:text-neutral-300">Projects</div>
		<p class="leading-6 dark:text-neutral-400 mt-2 text-xs">
			My fun projects, cool experiments, serious endeavors and everything
			in between, here’s a glimpse into what I work on in my spare time
		</p>
		<div class="grid md:grid-cols-2 gap-4 w-full my-4">
			<div v-for="project in Projects" :key="project.id">
				<div
					class="border rounded-2xl w-full min-h-[9.2rem] border-neutral-300 dark:border-blue-400/30 p-4"
				>
					<!-- dark:bg-neutral-900/60 dark:bg-neutral-850/50 -->
					<div class="text-lg dark:text-neutral-300 font-semibold">
						{{ project.name }}
					</div>
					<div
						class="my-1 text-neutral-700 text-[11px] dark:text-neutral-500"
					>
						{{ project.description }}
					</div>
					<div class="flex items-center gap-3 mt-3">
						<div class="text-neutral-600 text-xs flex">
							--
							<div v-for="(language, i) in project.lang">
								{{ language.name
								}}<span
									v-if="i < project.lang.length - 1"
									class="text-neutral-900 dark:text-neutral-500"
									>,&nbsp;
								</span>
							</div>
						</div>
						<div
							class="w-1 h-1 bg-gray-500 dark:bg-neutral-400 rounded-full"
						></div>
					</div>
					<div class="flex items-center gap-5 mt-2">
						<a
							class="cursor-pointer"
							:href="project.link"
							target="_blank"
						>
							<IconEnter />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
