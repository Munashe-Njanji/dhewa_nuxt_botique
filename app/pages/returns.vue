<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'


// Types
interface ReturnPolicy {
  id: string
  title: string
  description: string
  icon: string
}

interface ReturnForm {
  orderId: string
  reason: string
  items: ReturnItem[]
}

interface ReturnItem {
  id: string
  name: string
  quantity: number
  condition: string
}

// Page Meta
definePageMeta({
  title: 'Returns Portal',
  description: 'Hassle-free returns with our automated return system',
  layout: 'default',
  middleware: [],
})

// Form Validation Schema
const returnFormSchema = z.object({
  orderId: z.string().min(8, 'Order ID must be at least 8 characters'),
  reason: z.string().min(20, 'Please provide a detailed reason'),
  items: z.array(z.object({
    id: z.string(),
    name: z.string(),
    quantity: z.number().min(1),
    condition: z.string()
  })).min(1, 'Please select at least one item')
})

// Reactive State
const isSubmitting = ref(false)
const currentStep = ref(1)
const formData = reactive<ReturnForm>({
  orderId: '',
  reason: '',
  items: []
})

const returnPolicies = ref<ReturnPolicy[]>([
  {
    id: 'policy-1',
    title: '30-Day Hassle-Free Returns',
    description: 'Enjoy a full month to decide if your purchase is perfect for you.',
    icon: 'i-heroicons-calendar-days'
  },
  {
    id: 'policy-2',
    title: 'Quality Assurance',
    description: 'Items must be unworn and in original condition with all tags attached.',
    icon: 'i-heroicons-shield-check'
  },
  {
    id: 'policy-3',
    title: 'Exceptions Apply',
    description: 'Custom orders and final sale items are non-returnable.',
    icon: 'i-heroicons-exclamation-circle'
  },
  {
    id: 'policy-4',
    title: 'Shipping Guidelines',
    description: 'Return shipping is covered for defective or incorrect items.',
    icon: 'i-heroicons-truck'
  },
  {
    id: 'policy-5',
    title: 'Swift Refunds',
    description: 'Expect your refund within 5 business days of return approval.',
    icon: 'i-heroicons-currency-dollar'
  },
])

// Methods
const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    const validatedData = returnFormSchema.parse(formData)

    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // toast.success('Return request submitted successfully!')
    console.log('Return request submitted successfully!');

    resetForm()
  } catch (error) {
    if (error instanceof z.ZodError) {
      // toast.error(error.errors[0].message)
      console.error(error.errors[0].message);

    } else {
      // toast.error('An unexpected error occurred')
      console.error('An unexpected error occurred');

    }
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  Object.assign(formData, {
    orderId: '',
    reason: '',
    items: []
  })
  currentStep.value = 1
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center space-y-4 mb-16">
        <h1 class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Returns Portal
        </h1>
        <p class="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          We're committed to your satisfaction. Our streamlined returns process makes it easy to return items that
          didn't work out.
        </p>
      </div>

      <!-- Policy Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <div
v-for="policy in returnPolicies" :key="policy.id"
          class="group bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <div :class="[policy.icon, 'w-8 h-8 text-indigo-600 dark:text-indigo-400']" />
            </div>
            <div class="flex-1">
              <h3
                class="text-xl font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {{ policy.title }}
              </h3>
              <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {{ policy.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Return Form -->
      <div class="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-8">Start Your Return</h2>

        <form class="space-y-6" @submit.prevent="handleSubmit">
          <!-- Step 1: Order Details -->
          <div v-show="currentStep === 1">
            <label for="orderId" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Order ID
            </label>
            <input
id="orderId" v-model="formData.orderId" type="text"
              class="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your order ID">
          </div>

          <!-- Step 2: Return Reason -->
          <div v-show="currentStep === 2">
            <label for="reason" class="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Reason for Return
            </label>
            <textarea
id="reason" v-model="formData.reason" rows="4"
              class="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
              placeholder="Please provide detailed information about your return reason" />
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-between pt-6">
            <button
v-if="currentStep > 1" type="button"
              class="px-6 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors duration-300"
              @click="currentStep--">
              Previous
            </button>
            <button
v-if="currentStep < 2" type="button"
              class="ml-auto px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300"
              @click="currentStep++">
              Next
            </button>
            <button
v-else type="submit" :disabled="isSubmitting"
              class="ml-auto px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              <span v-if="isSubmitting">Processing...</span>
              <span v-else>Submit Return</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.returns-container {
  @apply min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800;
}

/* Custom animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in {
  animation: slideIn 0.5s ease-out forwards;
}

/* Form transitions */
.form-enter-active,
.form-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.form-enter-from,
.form-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>