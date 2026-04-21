<script setup>
const skills = [
	'Web Development',
	'Web Design',
	'Frontend Development',
	'Backend Development',
]
</script>

<template>
	<div
		id="home"
		class="max-w-7xl mx-auto w-full min-h-screen 2xl:min-h-156 flex flex-col items-center relative"
	>
		<main
			class="flex-1 flex flex-col items-center justify-center w-full px-4 max-w-5xl mx-auto mt-10 md:mt-auto relative z-10"
		>
			<div
				class="relative w-96 overflow-hidden flex items-center mb-4 md:mb-0"
				style="
					mask-image: linear-gradient(
						to right,
						transparent,
						black 15%,
						black 85%,
						transparent
					);
				"
			>
				<div class="flex gap-3 animate-marquee whitespace-nowrap">
					<span
						v-for="skill in [...skills, ...skills]"
						:key="skill"
						class="px-5 py-2 rounded-full bg-[#1e1e1f] text-gray-300 text-sm font-medium border border-white/5"
					>
						{{ skill }}
					</span>
				</div>
			</div>

			<h1
				class="text-center font-serif tracking-tight flex flex-col items-center mt-2"
			>
				<span
					class="text-[#8c8c8c] text-4xl md:text-6xl lg:text-7xl leading-[0.95] font-medium"
					>I'm Ifeoluwa,</span
				>
				<span
					class="text-white text-4xl md:text-6xl lg:text-7xl leading-[0.95] font-medium mt-2"
					>Software Developer.</span
				>
			</h1>

			<p
				class="mt-4 text-[#999999] text-base text-center md:text-lg font-sans tracking-wide"
			>
				Nigerian-based digital software creative for worldwide brands.
			</p>

			<div class="flex flex-col sm:flex-row gap-4 mt-8">
				<a
					href="#"
					class="px-8 py-3 rounded-full bg-[#cbf3ce] text-black font-semibold text-lg hover:bg-[#b5e0b8] transition-colors text-center shadow-lg"
				>
					See work
				</a>
				<a
					href="#"
					class="px-8 py-3 rounded-full bg-[#242426] text-white font-medium text-lg border border-white/5 hover:bg-[#2e2e30] transition-colors text-center"
				>
					Download CV
				</a>
			</div>
		</main>
	</div>
</template>
