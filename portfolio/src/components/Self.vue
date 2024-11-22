<script setup>
import Asterics from './icons/IconAsterics.vue'
</script>

<template>
	<section
		class="w-full lg:h-56 flex sm:flex-row md:justify-center gap-4 mb-3 text-zinc-100"
	>
		<div
			class="sm:w-1/3 rounded-xl bg-gradient hidden sm:block relative p-2"
		>
			<Transition name="purple">
				<div
					class="w-1/4 h-[2px] absolute top-0 rounded-full bg-gradient-to-l from-purple-800 to-[#191919] purple-enter-active opacity-0"
				></div>
			</Transition>
			<Transition name="blue">
				<div
					class="w-[2px] h-1/4 absolute left-0 bottom-[0%] rounded-b-full bg-gradient-to-t from-blue-800 to-[#191919] blue-enter-active opacity-0"
				></div>
			</Transition>
			<Transition name="red">
				<div
					class="w-1/4 h-[2px] absolute bottom-0 right-[0%] rounded-full bg-gradient-to-r from-red-800 to-[#191919] red-enter-active opacity-0"
				></div>
			</Transition>
			<Transition name="pink">
				<div
					class="w-[2px] h-1/4 absolute right-0 rounded-full bg-gradient-to-b from-pink-800 to-[#191919] pink-enter-active opacity-0"
				></div>
			</Transition>
			<div
				class="w-full h-full flex justify-center items-center overflow-hidden rounded-xl"
			>
				<img class="rounded-xl opacity-50" src="/pfp.png" />
			</div>
		</div>
		<div
			class="w-full sm:w-2/3 rounded-xl flex flex-col justify-between gap-4"
		>
			<div class="flex items-center gap-2">
				<Asterics class="w-5 h-5 md:w-8 md:h-8" />
				<h1 class="text-xl md:text-4xl">SELF-SUMMARY</h1>
				<Asterics class="w-5 h-5 md:w-8 md:h-8" />
			</div>
			<div
				class="rounded-xl lg:h-3/4 flex flex-col justify-end p-3 gap-2 bg-gradient"
			>
				<h3 class="md:text-2xl text-lg font-semibold">
					Ifeoluwa Samnice
				</h3>
				<div class="text-xs text-zinc-500">
					<p>
						Hi there. I'm
						<span class="text-blue-400 font-edu"
							><i>IFEOLUWA</i></span
						>.
					</p>
					<p>
						I'm a Front-End Web Developer — Lagos, Nigeria —
						Specialized in
						<span class="text-blue-400">Tailwind CSS</span>,
						<span class="text-js">Javascript</span>,
						<span class="text-react">React</span>,
						<span class="text-vue">VUE</span>. I'm a big fan of
						COMPUTER and Gaming. When i was younger i preferred
						computer to any other gadget and i've always wanted to
						know how things worked underground. I do say till now,
						if i'm to choose one i would pick a COMPUTER over a
						MOBILE PHONE don't worry, i'd make my calls on google
						meet😁
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
@keyframes transitionTOP {
	0% {
		left: 0;
		transform: translateX(0);
		opacity: 0.1;
	}
	50% {
		opacity: 1;
	}
	90% {
		opacity: 0.5;
	}
	100% {
		left: 100%;
		transform: translateX(-100%);
		opacity: 0.1;
	} /* Stops at the container's end */
}

.purple-enter-active {
	animation: transitionTOP 5s ease-in-out forwards infinite;
	animation-delay: 14s;
}

@keyframes transitionR {
	0% {
		top: 0;
		transform: translateY(0);
		opacity: 0.1;
	}
	50% {
		opacity: 1;
	}
	90% {
		opacity: 0.5;
	}
	100% {
		top: 100%;
		transform: translateY(-100%);
	} /* Stops at the container's end */
}

.pink-enter-active {
	animation: transitionR 5s ease-in-out forwards infinite;
	animation-delay: 4s;
}

@keyframes transitionB {
	0% {
		right: 0;
		transform: translateX(0);
		opacity: 0.1;
	}
	50% {
		opacity: 1;
	}
	90% {
		opacity: 0.5;
	}
	100% {
		right: 100%;
		transform: translateX(100%);
	} /* Stops at the container's end */
}

.red-enter-active {
	animation: transitionB 5s ease-in-out forwards infinite;
	animation-delay: 7s;
}

@keyframes transitionL {
	0% {
		bottom: 0;
		transform: translateY(0);
		opacity: 0.1;
	}
	50% {
		opacity: 1;
	}
	90% {
		opacity: 0.5;
	}
	100% {
		bottom: 100%;
		transform: translateY(100%);
	} /* Stops at the container's end */
}

.blue-enter-active {
	animation: transitionL 5s ease-in-out forwards infinite;
	animation-delay: 11s;
}
</style>
