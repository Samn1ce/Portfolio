<script setup>
import Socials from '@/assets/Socials.json'
</script>

<template>
	<section id="contact" class="w-11/12 max-w-7xl mx-auto">
		<div class="flex flex-row-reverse items-center gap-4 mb-8">
			<span class="text-[#555] text-sm font-mono">03</span>
			<h2
				class="font-serif text-white text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight"
			>
				Let's Connect
			</h2>
			<div class="flex-1 border-t border-white/10"></div>
		</div>
		<div class="flex flex-col items-center gap-4 text-center">
			<!-- Eyebrow -->
			<p class="font-mono text-[#777] text-xs uppercase tracking-[0.3em]">
				Got a project in mind?
			</p>
			<h3
				class="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight max-w-2xl"
			>
				Have an idea? <br />
				<span class="text-[#cbf3ce]">Let's build it</span> together.
			</h3>
			<p class="font-sans text-[#999] text-sm leading-relaxed max-w-md">
				Whether it's a product, a freelance project, or just a
				conversation — I'm always open. Pick whatever channel works for
				you.
			</p>

			<div
				class="flex items-center gap-2 border border-white/10 px-4 py-2"
			>
				<span
					class="w-1.5 h-1.5 rounded-full bg-[#cbf3ce] animate-pulse"
				></span>
				<span
					class="font-mono text-[#555] text-[11px] uppercase tracking-widest"
				>
					Available for work
				</span>
			</div>

			<div class="w-px h-8 bg-white/10"></div>

			<div class="flex flex-wrap items-center justify-center gap-3">
				<a
					v-for="social in Socials"
					:key="social.label"
					:href="social.href"
					target="_blank"
					rel="noopener noreferrer"
					class="group flex items-center gap-3 border border-white/10 px-5 py-3 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
				>
					<component
						:is="social.icon"
						class="w-4 h-4 text-[#555] group-hover:text-white transition-colors duration-300"
					/>
					<div class="flex flex-col items-center justify-center">
						<span
							class="font-sans text-white text-xs font-medium group-hover:text-[#cbf3ce] transition-colors duration-300 leading-none mb-0.5"
						>
							{{ social.label }}
						</span>
						<!-- <span
							class="font-mono text-[#444] text-[10px] leading-none"
						>
							{{ social.handle }}
						</span> -->
					</div>
					<span
						class="text-[#333] group-hover:text-[#cbf3ce] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ml-1"
					>
						↗
					</span>
				</a>
			</div>
		</div>
		<div
			class="my-8 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
		>
			<span
				class="font-mono text-[#666] text-[11px] uppercase tracking-widest"
			>
				Ifeoluwa © {{ new Date().getFullYear() }}
			</span>
			<span
				class="font-mono text-[#666] text-[11px] uppercase tracking-widest"
			>
				Built with God by IFEOLUWA
			</span>
		</div>
	</section>
</template>
