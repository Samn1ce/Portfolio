<script setup>
import Projects from '@/assets/Projects.json'
</script>

<template>
	<div
		id="projects"
		class="lg:px-28 px-5 p-4 pt-9 bg-white rounded-b-xl"
		x-data="{ type: 'Web' }"
	>
		<div class="text-xl font-bold">Projects</div>
		<p class="leading-6 dark:text-neutral-400 mt-2 text-xs">
			My fun projects, cool experiments, serious endeavors and everything
			in between, here’s a glimpse into what I work on in my spare time
		</p>
		<div
			class="grid md:grid-cols-2 gap-5 w-full my-4"
			v-for="project in Projects"
			:key="project.id"
		>
			<div
				class="border rounded-2xl w-full min-h-[9.2rem] border-neutral-300 dark:border-blue-400/30 dark:bg-neutral-900/60 p-4 dark:bg-neutral-850/50"
				x-show="type === @js($project['type'])"
			>
				<div class="text-lg dark:text-neutral-300 font-semibold">
					{{ project.name }}
				</div>
				<div
					class="my-1 text-neutral-700 text-[11px] dark:text-neutral-500"
				>
					{{ project.description }}
				</div>
				<div class="flex items-center gap-5 mt-2">
					<a
						class="cursor-pointer {{ $project['svg'] === 'link' || $project['svg'] === 'both' ? 'block' : 'hidden' }}"
						href="{{ $project['url'] }}"
						target="_blank"
					>
						<x-svg.link size="24" />
					</a>
					<a
						class="cursor-pointer {{ $project['svg'] === 'github' || $project['svg'] === 'both' ? 'block' : 'hidden' }}"
						href="{{ $project['githubUrl'] }}"
						target="_blank"
					>
						<x-svg.github size="24" />
					</a>
				</div>
				<div class="flex items-center gap-3 mt-3">
					<div class="text-neutral-600 text-xs">
						-- {{ $project['date'] }}
					</div>
					<div
						class="w-1 h-1 bg-gray-500 dark:bg-neutral-400 rounded-full"
					></div>
					<div class="text-neutral-600 text-xs">
						{{ $project['type'] }}
					</div>
				</div>
			</div>
			@endforeach
		</div>
	</div>
</template>
