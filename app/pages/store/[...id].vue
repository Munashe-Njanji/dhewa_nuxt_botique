<script setup lang="ts">
definePageMeta({
  name: 'store',
  title: 'Store',
  description: `Shop 'til You Drop: Your E-Commerce Haven!`,
  navOrder: '3',
  hidden: true,
  type: 'primary',
  icon: 'i-mdi-home',
})

const route = useRoute()
const { id: productId } = route.params

const { fetchProduct } = await useProduct(+productId)
const { title, price, description, image, rating, badge, shipping } = fetchProduct()

useHead({
  title: title || '',
})

useServerSeoMeta({
  description: () => description || '',
})

const colors = [
  { id: 1, name: 'Gray', class: 'bg-gray-500' },
  { id: 2, name: 'Black', class: 'bg-black' },
  { id: 3, name: 'White', class: 'bg-white border-2 border-gray-200' },
  { id: 4, name: 'Blue', class: 'bg-blue-500' },
]

const selected = ref(colors[0].id)

const current = computed(() =>
  colors.find((color) => color.id === selected.value),
)
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 transition-colors duration-300">
    <section class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        <!-- Product Image Section -->
        <div class="relative group perspective">
          <div class="absolute inset-0 bg-gradient-to-r                       from-neutral-200 via-neutral-100 to-neutral-50 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 rounded-3xl transform -rotate-1 transition-all duration-500 group-hover:rotate-2"/>
          <div class="relative bg-white dark:bg-white p-8 rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 overflow-hidden">
            <div class="absolute inset-0 bg-pattern opacity-5 dark:opacity-10"/>
            <NuxtImg 
              :src="image" 
              class="w-full h-auto max-h-[600px] object-contain transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <!-- Product Details Section -->
        <div class="space-y-8">
          <!-- Title and Badge -->
          <div class="relative">
            <UBadge 
              v-if="badge" 
              :label="badge" 
              class="absolute -top-7 transform hover:scale-105 transition-transform"
            />
            <h1 class="text-4xl font-serif font-bold bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300 bg-clip-text text-transparent">
              {{ title }}
            </h1>
          </div>

          <!-- Rating and Shipping -->
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <StarsRate 
                class="transform hover:scale-105 transition-transform" 
                :value="rating.rate" 
              />
              <span class="text-neutral-600 dark:text-neutral-400">
                {{ rating.count }} reviews
              </span>
            </div>
            <div class="text-primary-600 dark:text-primary-400 font-medium">
              {{ shipping }}
            </div>
          </div>

          <!-- Price and Seller -->
          <div v-if="badge || shipping" class="flex items-center justify-between">
            <div class="text-3xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-500 bg-clip-text text-transparent">
              ${{ price }}
            </div>
            <div class="text-neutral-600 dark:text-neutral-400 font-medium">
              Best Deals Inc.
            </div>
          </div>

          <!-- Color Selection -->
          <div class="space-y-4">
            <label class="block text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Select Color
            </label>
            <div class="flex space-x-4">
              <button
                v-for="color in colors"
                :key="color.id"
                :class="[
                  color.class,
                  'w-8 h-8 rounded-full transition-transform duration-200 hover:scale-110',
                  selected === color.id ? 'ring-2 ring-offset-2 ring-primary-500 dark:ring-primary-400' : ''
                ]"
                @click="selected = color.id"
              />
            </div>
          </div>

          <!-- Add to Cart Button -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity"/>
            <UButton 
              label="Add To Cart" 
              class="relative w-full rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-500 dark:to-primary-400 transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              size="xl"
            >
              <span class="py-3 text-lg font-medium">Add To Cart</span>
            </UButton>
          </div>

          <!-- Product Description -->
          <div class="prose prose-neutral dark:prose-invert max-w-none">
            <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {{ description }}
            </p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='currentColor' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.perspective {
  perspective: 1000px;
}

.prose {
  max-width: 65ch;
}

:root {
  --primary-color: theme('colors.primary.500');
}

@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: theme('colors.primary.400');
  }
}
</style>