<!-- About.vue -->
<script setup>
const services = [
	{
		number: '01',
		title: 'Web Development',
		description:
			'React, Laravel, Node.js. Complete web solutions built for speed and scale.',
	},
	{
		number: '02',
		title: 'Backend & APIs',
		description:
			'RESTful APIs, database design, auth systems and cloud ready deployments.',
	},
	{
		number: '03',
		title: 'UI / UX Design',
		description:
			'Interfaces built with clarity, accessibility and design-first thinking.',
	},
]
</script>

<template>
	<section id="about" class="w-11/12 max-w-7xl mx-auto md:px-6 pt-0 pb-16">
		<div class="flex items-center gap-4 mb-8 md:mb-16">
			<span class="text-[#555] text-sm font-mono">01</span>
			<h2
				class="text-white text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight"
			>
				About Ifeoluwa
			</h2>
			<div class="flex-1 border border-white/10"></div>
		</div>

		<!-- Two column body -->
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
			<!-- Left: Bio -->
			<div class="flex flex-col gap-7 font-sans">
				<p
					class="text-white text-xl md:text-3xl leading-snug font-instrumentserif"
				>
					I'm Ifeoluwa, a Full-Stack Developer crafting
					<em class="text-[#cbf3ce]">precise, performant</em>
					digital products — from interface to infrastructure.
				</p>

				<p class="text-[#777] text-[15px] leading-relaxed font-light">
					With
					<span class="text-white font-medium"
						>3 years of hands-on experience</span
					>, I've built across the
					<span class="text-white font-medium">entire stack</span> —
					turning complex problems into clean, scalable solutions. It
					started in
					<span class="text-white font-medium">2022</span> with an
					idea to build for gamers. That spark became a discipline.
				</p>

				<p class="text-[#777] text-[15px] leading-relaxed font-light">
					Beyond the screen, I'm a
					<span class="text-white font-medium">musician</span> —
					piano, drums, and a guitar I'm still negotiating with. The
					same
					<span class="text-white font-medium">ear for detail</span> I
					bring to music follows me into every line of code I write.
				</p>
			</div>

			<!-- Right: Services -->
			<div class="flex flex-col">
				<div
					v-for="service in services"
					:key="service.number"
					class="flex gap-6 py-5 border-t border-white/10 group hover:border-white/25 transition-colors"
				>
					<span class="text-[#555] text-xs font-mono mt-1 shrink-0">{{
						service.number
					}}</span>
					<div>
						<h3
							class="text-white font-semibold mb-1 group-hover:text-[#cbf3ce] transition-colors"
						>
							{{ service.title }}
						</h3>
						<p class="text-[#777] text-sm leading-relaxed">
							{{ service.description }}
						</p>
					</div>
				</div>
				<!-- Bottom border -->
				<div class="border-t border-white/10"></div>
			</div>
		</div>
	</section>
</template>
