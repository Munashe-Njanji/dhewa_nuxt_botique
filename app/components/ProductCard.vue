<script setup lang="ts">
import type { Product } from '~~/types/store';
const { id, title, price, image, badge, shipping } = defineProps<Product>();
</script>

<template>
  <NuxtLink
    class="relative w-full md:w-1/3 lg:w-1/4 xl:w-1/5 m-4 overflow-hidden transform hover:scale-105 hover:-rotate-1 transition duration-200"
    :to="`/store/${id}`"
  >
    <!-- Badge - Blazing dark mode attempt -->
    <span
      v-if="badge"
      class="absolute top-0 right-0 bg-rose-600 text-gray-100 dark:bg-rose-400 dark:text-black font-extrabold text-xs py-1 px-3 rounded-br-lg z-10 tracking-widest"
      :style="{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.7)', clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 100%)' }"
    >
      {{ badge }}
    </span>

    <!-- Dark mode styled card that doesn’t hold back -->
    <UCard class="relative border border-gray-500 bg-gray-800 dark:bg-gray-900 dark:border-gray-700 text-gray-300 dark:text-gray-200 hover:shadow-xl transform transition-all duration-300 ease-out hover:bg-gray-700 dark:hover:bg-gray-800">
      <template #header>
        <div class="flex justify-center p-4">
          <!-- Dark overlay cheat for white background images -->
          <div class="bg-gray-300 dark:bg-gray-700 h-60 w-full flex items-center justify-center rounded-md shadow-inner relative">
            <NuxtImg
              class="object-cover max-h-full h-52 w-52 saturate-200 dark:saturate-150 filter drop-shadow-lg"
              :src="image"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-gray-800 dark:from-gray-900 dark:to-gray-900 opacity-50"></div>
          </div>
        </div>
      </template>
      
      <!-- Edgy styling for title and price in dark mode -->
      <div class="p-4 border-t border-gray-400 dark:border-gray-700">
        <span class="block font-sans text-lg font-semibold tracking-wide uppercase leading-snug text-gray-100 dark:text-gray-400">
          {{ title }}
        </span>
        <div class="flex justify-between items-center mt-2">
          <span class="text-xl font-bold text-lime-400 dark:text-lime-300 tracking-widest">${{ price }}</span>
          <span
            v-if="shipping"
            class="text-xs font-semibold text-rose-500 dark:text-rose-300 uppercase italic"
          >
            {{ shipping }}
          </span>
        </div>
      </div>
    </UCard>
  </NuxtLink>
</template>

<style scoped>
/* Dark mode extra edge */
.bg-rose-600 {
  background-color: #E11D48;
}

.bg-gray-800 {
  background-color: #1F2937;
}

.bg-gray-700 {
  background-color: #374151;
}

.bg-gray-900 {
  background-color: #111827;
}

.text-lime-400 {
  color: #A3E635;
}

.text-rose-500 {
  color: #F43F5E;
}

.shadow-inner {
  box-shadow: inset 0px 2px 6px rgba(0, 0, 0, 0.3);
}

.bg-gradient-to-t {
  background-image: linear-gradient(to top, var(--tw-gradient-stops));
}

.from-gray-800 {
  --tw-gradient-from: #1F2937;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(31, 41, 55, 0));
}

.via-transparent {
  --tw-gradient-stops: var(--tw-gradient-from), transparent, var(--tw-gradient-to, rgba(31, 41, 55, 0));
}

.to-gray-800 {
  --tw-gradient-to: #1F2937;
}
</style>
