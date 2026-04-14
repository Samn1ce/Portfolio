<script setup>
import '@/assets/styles/main.css'

const skills = [
	'Web Development',
	'Web Design',
	'Frontend Development',
	'Backend Development',
]
</script>

<template>
	<div
		class="min-h-screen bg-[#0d0d0d] flex flex-col items-center relative selection:bg-[#cbf3ce] selection:text-black"
	>
		<!-- Grain overlay -->
		<div class="grain-overlay"></div>
		<nav
			class="absolute z-20 w-11/12 md:w-auto top-4 mt-4 bg-[#1a1a1c] border border-white/10 rounded-full px-6 py-3 flex justify-between items-center md:items-center gap-6 shadow-xl"
		>
			<a
				href="#"
				class="bg-[#2e2e30] p-2 rounded-full text-white transition-colors hover:bg-white hover:text-black"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-5 h-5"
				>
					<path
						d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
					/>
					<path
						d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
					/>
				</svg>
			</a>
			<a
				href="#"
				class="text-gray-400 hover:text-white transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-5 h-5"
				>
					<circle cx="8" cy="21" r="1" />
					<circle cx="19" cy="21" r="1" />
					<path
						d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
					/>
				</svg>
			</a>
			<a
				href="#"
				class="text-gray-400 hover:text-white transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-5 h-5"
				>
					<rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
					<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
				</svg>
			</a>
			<a
				href="#"
				class="text-gray-400 hover:text-white transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-5 h-5"
				>
					<path
						d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"
					/>
				</svg>
			</a>
			<a
				href="#"
				class="text-gray-400 hover:text-white transition-colors"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="w-5 h-5"
				>
					<path
						d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"
					/>
					<path d="m3.27 6.96 2.41-.82" />
					<path d="m20.73 6.96-2.41-.82" />
					<path d="M12 22v-4" />
					<path d="M8 18h8" />
				</svg>
			</a>
		</nav>

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
