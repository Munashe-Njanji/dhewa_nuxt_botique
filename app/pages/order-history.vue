<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  title: 'Order History',
  description: 'Your Complete Purchase Journey & Order History',
  navOrder: '8',
  type: 'secondary',
  icon: 'i-mdi-history',
})

interface OrderItem {
  name: string
  quantity: number
  price: number
  image: string
  sku: string
}

interface Order {
  id: string
  date: string
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled'
  total: number
  items: OrderItem[]
  trackingNumber?: string
  deliveryDate?: string
  paymentMethod: string
  shippingAddress: {
    street: string
    city: string
    state: string
    zip: string
  }
}

const orders = ref<Order[]>([
  {
    id: 'ORD-2024-001',
    date: '2024-01-15T10:30:00',
    status: 'Delivered',
    total: 150.00,
    paymentMethod: 'Visa •••• 4242',
    trackingNumber: 'TRK123456789',
    deliveryDate: '2024-01-20T14:25:00',
    shippingAddress: {
      street: '123 Fashion Ave',
      city: 'Harare',
      state: 'Harare',
      zip: '00000'
    },
    items: [
      {
        name: 'Custom Tailored Suit',
        quantity: 1,
        price: 100.00,
        image: '/images/suit.jpg',
        sku: 'SUIT-001'
      },
      {
        name: 'Silk Tie',
        quantity: 1,
        price: 50.00,
        image: '/images/tie.jpg',
        sku: 'TIE-001'
      }
    ]
  },
  {
    id: 'ORD-2024-002',
    date: '2024-02-20T15:45:00',
    status: 'Processing',
    total: 300.00,
    paymentMethod: 'Mastercard •••• 5555',
    shippingAddress: {
      street: '456 Style Street',
      city: 'Bulawayo',
      state: 'Bulawayo',
      zip: '00001'
    },
    items: [
      {
        name: 'Elegant Evening Dress',
        quantity: 1,
        price: 300.00,
        image: '/images/dress.jpg',
        sku: 'DRESS-001'
      }
    ]
  },
  {
    id: 'ORD-2024-003',
    date: '2024-03-10T12:00:00',
    status: 'Shipped',
    total: 75.00,
    paymentMethod: 'EcoCash',
    trackingNumber: 'TRK987654321',
    deliveryDate: '2024-03-15T10:30:00',
    shippingAddress: {
      street: '789 Culture Rd',
      city: 'Gweru',
      state: 'Midlands',
      zip: '00002'
    },
    items: [
      {
        name: 'African Print Dress',
        quantity: 1,
        price: 75.00,
        image: '/images/african-dress.jpg',
        sku: 'AFRICAN-DRESS-001'
      }
    ]
  },
  {
    id: 'ORD-2024-004',
    date: '2024-04-25T09:15:00',
    status: 'Cancelled',
    total: 50.00,
    paymentMethod: 'PayPal',
    shippingAddress: {
      street: '654 Heritage Ave',
      city: 'Mutare',
      state: 'Manicaland',
      zip: '00003'
    },
    items: [
      {
        name: 'Leather Handbag',
        quantity: 1,
        price: 50.00,
        image: '/images/handbag.jpg',
        sku: 'HANDBAG-001'
      }
    ]
  },
  {
    id: 'ORD-2024-005',
    date: '2024-05-05T14:50:00',
    status: 'Delivered',
    total: 200.00,
    paymentMethod: 'Visa •••• 1234',
    trackingNumber: 'TRK567890123',
    deliveryDate: '2024-05-10T13:00:00',
    shippingAddress: {
      street: '321 Fashion St',
      city: 'Masvingo',
      state: 'Masvingo',
      zip: '00004'
    },
    items: [
      {
        name: 'Designer Shoes',
        quantity: 2,
        price: 100.00,
        image: '/images/shoes.jpg',
        sku: 'SHOES-001'
      }
    ]
  },
  {
    id: 'ORD-2024-006',
    date: '2024-06-01T16:00:00',
    status: 'Processing',
    total: 60.00,
    paymentMethod: 'Mastercard •••• 6789',
    shippingAddress: {
      street: '159 Boutique Blvd',
      city: 'Chinhoyi',
      state: 'Mashonaland West',
      zip: '00005'
    },
    items: [
      {
        name: 'Traditional Headwrap',
        quantity: 3,
        price: 20.00,
        image: '/images/headwrap.jpg',
        sku: 'HEADWRAP-001'
      }
    ]
  },
  {
    id: 'ORD-2024-007',
    date: '2024-07-10T11:25:00',
    status: 'Shipped',
    total: 85.00,
    paymentMethod: 'EcoCash',
    trackingNumber: 'TRK654321098',
    deliveryDate: '2024-07-15T09:00:00',
    shippingAddress: {
      street: '753 Trendy St',
      city: 'Kariba',
      state: 'Mashonaland West',
      zip: '00006'
    },
    items: [
      {
        name: 'Beaded Necklace',
        quantity: 5,
        price: 17.00,
        image: '/images/necklace.jpg',
        sku: 'NECKLACE-001'
      }
    ]
  }
])


const statusColors = {
  Delivered: 'emerald',
  Processing: 'amber',
  Shipped: 'blue',
  Cancelled: 'red'
}

const sortOptions = ref([
  { label: 'Most Recent', value: 'date-desc' },
  { label: 'Oldest First', value: 'date-asc' },
  { label: 'Highest Amount', value: 'amount-desc' },
  { label: 'Lowest Amount', value: 'amount-asc' }
])

const selectedSort = ref('date-desc')
const searchQuery = ref('')

const filteredAndSortedOrders = computed(() => {
  let result = [...orders.value]

  // Filter by search
  if (searchQuery.value) {
    result = result.filter(order =>
      order.id.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      order.items.some(item => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    )
  }

  // Sort
  result.sort((a, b) => {
    switch (selectedSort.value) {
      case 'date-desc':
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case 'date-asc':
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case 'amount-desc':
        return b.total - a.total
      case 'amount-asc':
        return a.total - b.total
      default:
        return 0
    }
  })

  return result
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
    <div class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-12 space-y-4">
        <h1
          class="text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent animate-gradient">
          Order History
        </h1>
        <p class="text-xl text-neutral-600 dark:text-neutral-400">
          Your Complete Purchase Journey
        </p>
      </div>

      <!-- Controls Section -->
      <div class="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div class="relative w-full sm:w-96">
          <input v-model="searchQuery" type="search" placeholder="Search orders..."
            class="w-full px-4 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
          <span class="absolute right-3 top-2.5 text-neutral-400">
            <i class="i-mdi-magnify text-xl" />
          </span>
        </div>

        <select v-model="selectedSort"
          class="px-4 py-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300">
          <option v-for="option in sortOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
      </div>

      <!-- Orders List -->
      <div class="space-y-6">
        <div v-for="order in filteredAndSortedOrders" :key="order.id"
          class="bg-white dark:bg-neutral-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">

          <!-- Order Header -->
          <div class="p-6 border-b border-neutral-200 dark:border-neutral-700">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="space-y-1">
                <div class="flex items-center gap-3">
                  <h2 class="text-2xl font-bold">#{{ order.id }}</h2>
                  <span
                    :class="`px-3 py-1 rounded-full text-sm font-medium bg-${statusColors[order.status]}-100 dark:bg-${statusColors[order.status]}-900 text-${statusColors[order.status]}-700 dark:text-${statusColors[order.status]}-300`">
                    {{ order.status }}
                  </span>
                </div>
                <p class="text-sm text-neutral-500 dark:text-neutral-400">
                  Ordered on {{ formatDate(order.date) }}
                </p>
              </div>

              <div class="text-right">
                <p class="text-2xl font-bold text-primary-600 dark:text-primary-400">
                  {{ formatPrice(order.total) }}
                </p>
                <p class="text-sm text-neutral-500 dark:text-neutral-400">
                  {{ order.paymentMethod }}
                </p>
              </div>
            </div>
          </div>

          <!-- Order Items -->
          <div class="divide-y divide-neutral-200 dark:divide-neutral-700">
            <div v-for="item in order.items" :key="item.sku"
              class="p-6 flex items-center gap-6 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors duration-200">
              <div class="w-20 h-20 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                <i class="i-mdi-image text-3xl text-neutral-400" />
              </div>

              <div class="flex-1">
                <h3 class="text-lg font-medium mb-1">{{ item.name }}</h3>
                <p class="text-sm text-neutral-500 dark:text-neutral-400">
                  SKU: {{ item.sku }} • Quantity: {{ item.quantity }}
                </p>
              </div>

              <div class="text-right">
                <p class="font-medium">{{ formatPrice(item.price) }}</p>
              </div>
            </div>
          </div>

          <!-- Order Footer -->
          <div class="p-6 bg-neutral-50 dark:bg-neutral-800/50">
            <div class="flex flex-wrap gap-6 text-sm text-neutral-600 dark:text-neutral-400">
              <div v-if="order.trackingNumber" class="flex items-center gap-2">
                <i class="i-mdi-truck-fast" />
                <span>Tracking: {{ order.trackingNumber }}</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="i-mdi-map-marker" />
                <span>Shipped to: {{ order.shippingAddress.street }}, {{ order.shippingAddress.city }}, {{
                  order.shippingAddress.state }} {{ order.shippingAddress.zip }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredAndSortedOrders.length === 0" class="text-center py-12">
        <div
          class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 mb-4">
          <i class="i-mdi-package-variant text-3xl text-neutral-400" />
        </div>
        <h3 class="text-lg font-medium text-neutral-900 dark:text-neutral-100">No Orders Found</h3>
        <p class="mt-1 text-neutral-500 dark:text-neutral-400">
          {{ searchQuery ? 'Try adjusting your search terms' : 'Your order history is empty' }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

/* Add smooth transitions for all interactive elements */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  @apply bg-neutral-300 dark:bg-neutral-600 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-neutral-400 dark:bg-neutral-500;
}
</style>