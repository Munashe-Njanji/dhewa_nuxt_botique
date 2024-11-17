<script setup lang="ts">
import site from '~~/site'
const { github } = site

definePageMeta({
  // layout: 'default',
  name: 'quick-start',
  // alias: '[...slug]',
  title: 'Quick Start',
  description: `Unleash Elegance, Step into Style: Your Boutique Shopping Experience!`,
  navOrder: '2',
  type: 'primary',
  icon: 'i-mdi-home',
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})

const slug =
  useRoute().params.slug.toString().replace(/,/g, '/') ||
  useRoute().name.toString().replace(/,/g, '/')

useServerSeoMeta({
  description: () => slug || '',
})
</script>
<template>
  <div
    class="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 transition-colors duration-300">
    <!-- Hero Section with Animated Elements -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 bg-pattern opacity-5 dark:opacity-10 animate-fade-in"></div>
      <div class="container mx-auto px-6 py-24">
        <h1
          class="text-5xl md:text-7xl font-serif font-bold text-center bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300 bg-clip-text text-transparent mb-8 animate-title">
          Couture & Craftsmanship
        </h1>
        <p class="text-center text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto animate-fade-up">
          Where timeless elegance meets contemporary vision
        </p>
      </div>
    </section>

    <!-- Collection Grid with Enhanced Interactions -->
    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Bespoke Card -->
        <div class="group relative perspective">
          <div
            class="absolute inset-0 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-50 dark:from-amber-900 dark:via-amber-800 dark:to-amber-700 rounded-2xl transform rotate-1 transition-all duration-500 group-hover:rotate-3 group-hover:scale-105">
          </div>
          <div
            class="relative bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            <div
              class="absolute top-0 right-0 -mr-3 -mt-3 w-24 h-24 bg-gradient-to-br from-amber-200 to-amber-50 dark:from-amber-700 dark:to-amber-900 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity">
            </div>
            <h2 class="text-3xl font-serif font-bold mb-4 relative text-neutral-900 dark:text-neutral-100">Bespoke
              Artistry</h2>
            <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed relative">
              Experience the pinnacle of tailoring mastery where each garment is a canvas for personal expression. Our
              master artisans craft suits that transcend fashion, creating living legacies.
            </p>
            <div class="mt-6 relative overflow-hidden">
              <span
                class="inline-block px-6 py-3 bg-gradient-to-r from-amber-100 to-amber-50 dark:from-amber-900 dark:to-amber-800 text-amber-900 dark:text-amber-100 rounded-full text-sm font-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                Discover More →
              </span>
            </div>
          </div>
        </div>

        <!-- Haute Couture Card with Parallax Effect -->
        <div class="group relative perspective translate-y-8">
          <div
            class="absolute inset-0 bg-gradient-to-r from-rose-200 via-rose-100 to-rose-50 dark:from-rose-900 dark:via-rose-800 dark:to-rose-700 rounded-2xl transform -rotate-1 transition-all duration-500 group-hover:-rotate-3 group-hover:scale-105">
          </div>
          <div
            class="relative bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            <div
              class="absolute top-0 right-0 -mr-3 -mt-3 w-24 h-24 bg-gradient-to-br from-rose-200 to-rose-50 dark:from-rose-700 dark:to-rose-900 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity">
            </div>
            <h2 class="text-3xl font-serif font-bold mb-4 relative text-neutral-900 dark:text-neutral-100">Haute Couture
            </h2>
            <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed relative">
              Immerse yourself in a collection where dreams take form. Each dress is an architectural marvel, combining
              innovative design with timeless elegance.
            </p>
            <div class="mt-6 relative overflow-hidden">
              <span
                class="inline-block px-6 py-3 bg-gradient-to-r from-rose-100 to-rose-50 dark:from-rose-900 dark:to-rose-800 text-rose-900 dark:text-rose-100 rounded-full text-sm font-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                Explore Collection →
              </span>
            </div>
          </div>
        </div>

        <!-- Luxury Casual Card -->
        <div class="group relative perspective">
          <div
            class="absolute inset-0 bg-gradient-to-r from-emerald-200 via-emerald-100 to-emerald-50 dark:from-emerald-900 dark:via-emerald-800 dark:to-emerald-700 rounded-2xl transform rotate-1 transition-all duration-500 group-hover:rotate-3 group-hover:scale-105">
          </div>
          <div
            class="relative bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80">
            <div
              class="absolute top-0 right-0 -mr-3 -mt-3 w-24 h-24 bg-gradient-to-br from-emerald-200 to-emerald-50 dark:from-emerald-700 dark:to-emerald-900 rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity">
            </div>
            <h2 class="text-3xl font-serif font-bold mb-4 relative text-neutral-900 dark:text-neutral-100">Refined
              Casual</h2>
            <p class="text-neutral-600 dark:text-neutral-300 leading-relaxed relative">
              Where comfort meets unprecedented sophistication. Our casual collection redefines everyday luxury with
              sustainable materials and innovative cuts.
            </p>
            <div class="mt-6 relative overflow-hidden">
              <span
                class="inline-block px-6 py-3 bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900 dark:to-emerald-800 text-emerald-900 dark:text-emerald-100 rounded-full text-sm font-medium transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                View Range →
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced About Section -->
    <section class="container mx-auto px-6 py-24">
      <div class="relative max-w-4xl mx-auto perspective">
        <div
          class="absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-50 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-900 rounded-3xl transform -rotate-1 transition-transform duration-500 hover:rotate-2">
        </div>
        <div
          class="relative bg-white dark:bg-neutral-800 p-12 rounded-3xl shadow-xl backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
          <div class="absolute inset-0 bg-pattern opacity-5 dark:opacity-10"></div>
          <h2
            class="text-4xl md:text-5xl font-serif font-bold text-center mb-8 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-300 bg-clip-text text-transparent">
            Our Atelier Legacy
          </h2>
          <div class="space-y-6 text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
            <p class="transform hover:scale-[1.02] transition-transform duration-300">
              Founded on the principles of uncompromising quality and visionary design, our atelier stands as a beacon
              of innovation in the world of luxury fashion. We don't just create garments; we craft experiences that
              resonate with the soul of contemporary elegance.
            </p>
            <p class="transform hover:scale-[1.02] transition-transform duration-300">
              Our commitment to sustainability drives us to source the finest eco-conscious materials while preserving
              traditional craftsmanship. Each piece is a testament to our dedication to creating fashion that transcends
              seasons and celebrates individual expression.
            </p>
            <p class="transform hover:scale-[1.02] transition-transform duration-300">
              With a team of master artisans whose expertise spans generations, we blend time-honored techniques with
              cutting-edge innovation. Our creations are more than fashion statements—they're artifacts of artistic
              excellence designed to inspire and endure.
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

@keyframes title {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-title {
  animation: title 1s ease-out forwards;
}

.animate-fade-up {
  animation: fadeUp 1s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 0.05;
  }
}
</style>
