<script setup lang="ts">
definePageMeta({
  title: 'Contact Us',
  description: `Get in Touch: We're All Ears!`,
  navOrder: '11',
  type: 'secondary',
  icon: 'i-mdi-home',
})
</script>

<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
      <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"/>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"/>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"/>
    </div>

    <div class="relative container mx-auto px-4 py-16">
      <!-- Header section with floating animation -->
      <div class="text-center mb-16 animate-float">
        <h1 class="text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p class="text-2xl text-neutral-600 dark:text-neutral-300 font-light">
          Get in Touch: We're All Ears!
        </p>
      </div>

      <!-- Card container with hover effects -->
      <div class="max-w-4xl mx-auto">
        <div class="transform hover:scale-[1.01] transition-all duration-500">
          <div class="relative bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            <!-- Card decoration -->
            <div class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl transform rotate-1 -z-10"/>
            
            <h2 class="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Subscribe To Our Newsletter
            </h2>
            
            <p class="mb-8 text-neutral-600 dark:text-neutral-300">
              Sign up for our newsletter to receive updates and exclusive offers
            </p>

            <!-- Form with animation -->
            <form
class="mx-auto sm:w-9/12 xl:w-8/12 transform hover:translate-y-[-2px] transition-all duration-300" 
                  action="https://www.getdrip.com/forms/243852739/submissions" 
                  method="post" 
                  target="_blank" 
                  rel="noopener" 
                  data-drip-embedded-form="243852739">
              <div class="group flex items-center bg-neutral-50 dark:bg-neutral-700/50 overflow-hidden p-2 rounded-full border border-transparent hover:border-purple-500/30 transition-all duration-300">
                <label for="emailfield" class="sr-only">Email address:</label>
                <input 
                  id="emailfield" 
                  class="border-0 flex-1 outline-none px-5 py-3 rounded-full w-full bg-transparent placeholder-neutral-400 dark:placeholder-neutral-500 focus:ring-0"
                  placeholder="email@example.com" 
                  type="email" 
                  required 
                  name="fields[email]">
                <UButton 
                  type="submit" 
                  class="ml-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 py-2 rounded-full transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  size="md">
                  Sign Up
                </UButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Custom gradient background animation */
.bg-gradient-animate {
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Smooth hover transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom shadow utilities */
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>