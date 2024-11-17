<script setup lang="ts">
definePageMeta({
  title: 'Track Order',
  description: `Track Your Order, Every Step of the Way!`,
  navOrder: '7',
  type: 'secondary',
  icon: 'i-mdi-home',
})

const trackingSteps = ref([
  {
    title: 'Order Placed',
    description: 'We have received your order at our facility.',
    time: '10:30 AM',
    date: '2024-01-15',
    status: 'completed',
    icon: 'i-mdi-package-variant-closed',
  },
  {
    title: 'Processing',
    description: 'Your order is being prepared and packed.',
    time: '2:45 PM',
    date: '2024-01-15',
    status: 'completed',
    icon: 'i-mdi-cog',
  },
  {
    title: 'Shipped',
    description: 'Your package is en route to your location.',
    time: '9:15 AM',
    date: '2024-01-16',
    status: 'active',
    icon: 'i-mdi-truck-fast',
  },
  {
    title: 'Out for Delivery',
    description: 'The package is out for final delivery.',
    time: 'Pending',
    date: 'Estimated 2024-01-17',
    status: 'pending',
    icon: 'i-mdi-map-marker-radius',
  },
  {
    title: 'Delivered',
    description: 'Package successfully delivered.',
    time: 'Pending',
    date: 'Estimated 2024-01-17',
    status: 'pending',
    icon: 'i-mdi-check-circle',
  }
])

const currentStep = ref(2)
const isAnimating = ref(false)

const getStepClass = (index: number) => {
  if (index < currentStep.value) return 'completed'
  if (index === currentStep.value) return 'active'
  return 'pending'
}
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-12 space-y-4">
        <h1
          class="text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent animate-gradient">
          Track Your Order
        </h1>
        <p class="text-xl text-neutral-600 dark:text-neutral-400">
          Real-time updates on your package's journey
        </p>
      </div>

      <!-- Order Info Card -->
      <div
        class="bg-white dark:bg-neutral-800 rounded-2xl p-6 mb-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="tracking-info-card">
            <span class="text-sm text-neutral-500 dark:text-neutral-400">Order Number</span>
            <span class="text-xl font-bold">#ORD-2024-1234</span>
          </div>
          <div class="tracking-info-card">
            <span class="text-sm text-neutral-500 dark:text-neutral-400">Estimated Delivery</span>
            <span class="text-xl font-bold">Jan 17, 2024</span>
          </div>
          <div class="tracking-info-card">
            <span class="text-sm text-neutral-500 dark:text-neutral-400">Shipping Method</span>
            <span class="text-xl font-bold">Express Delivery</span>
          </div>
        </div>
      </div>

      <!-- Timeline Section -->
      <div class="timeline-container relative">
        <div class="progress-line"/>

        <div v-for="(step, index) in trackingSteps" :key="index" class="timeline-step" :class="getStepClass(index)">

          <!-- Timeline Connector -->
          <div class="timeline-connector" :class="getStepClass(index)"/>

          <!-- Icon Container -->
          <div class="step-icon-container" :class="getStepClass(index)">
            <div class="step-icon">
              <i :class="step.icon"/>
            </div>
            <div class="pulse-ring"/>
          </div>

          <!-- Content -->
          <div class="step-content">
            <div class="step-header">
              <h3 class="step-title">{{ step.title }}</h3>
              <div class="step-time">
                <span>{{ step.time }}</span>
                <span class="text-sm text-neutral-500">{{ step.date }}</span>
              </div>
            </div>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- Map Preview -->
      <div class="mt-12 bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-xl">
        <div class="h-64 bg-neutral-100 dark:bg-neutral-700 rounded-xl animate-pulse">
          <div class="w-full h-full flex items-center justify-center">
            <span class="text-neutral-400 dark:text-neutral-500">Map Preview</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tracking-info-card {
  @apply flex flex-col space-y-2 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors duration-300;
}

.timeline-container {
  @apply relative space-y-8 py-4;
}

.progress-line {
  @apply absolute left-6 top-0 w-1 h-full bg-neutral-200 dark:bg-neutral-700;
  transform: translateX(-50%);
}

.timeline-step {
  @apply relative flex items-start gap-6;
}

.timeline-connector {
  @apply absolute left-6 top-0 w-1 h-full -translate-x-1/2;
}

.timeline-connector.completed {
  @apply bg-primary-500;
  animation: growLine 0.5s ease forwards;
}

.step-icon-container {
  @apply relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-700 transition-all duration-300;
}

.step-icon-container.completed {
  @apply bg-primary-500 text-white;
  animation: completeStep 0.5s ease forwards;
}

.step-icon-container.active {
  @apply bg-primary-500 text-white;
}

.step-icon {
  @apply text-xl;
}

.pulse-ring {
  @apply absolute inset-0 rounded-full;
}

.step-icon-container.active .pulse-ring {
  @apply border-8 border-primary-500/90;
  animation: pulse 2s infinite;
}

.step-content {
  @apply flex-1;
}

.step-header {
  @apply flex items-start justify-between mb-2;
}

.step-title {
  @apply text-lg font-semibold;
}

.step-time {
  @apply flex flex-col items-end text-sm text-neutral-500;
}

.step-description {
  @apply text-neutral-600 dark:text-neutral-400;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes completeStep {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes growLine {
  from {
    transform: scaleY(0);
  }

  to {
    transform: scaleY(1);
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>