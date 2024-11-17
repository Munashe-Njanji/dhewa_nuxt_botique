<script setup lang="ts">
import { ref } from 'vue'
import { useLocalization } from '../composables/useLocalization'
import type { DeliveryZone, Policy } from '../types/delivery'

const { t } = useLocalization()

const deliveryNetwork = ref<Map<string, DeliveryZone>>(new Map([
  ['NAMR', { name: 'North America', avgDeliveryTime: '1-3 days', coverage: 0.98 }],
  ['EUMR', { name: 'Europe', avgDeliveryTime: '2-4 days', coverage: 0.95 }],
  ['APAC', { name: 'Asia Pacific', avgDeliveryTime: '3-5 days', coverage: 0.92 }],
]))

const deliveryPolicies = ref<Policy[]>([
  {
    id: 'global-reach',
    title: 'Global Logistics Network',
    description: 'Leveraging AI-powered routing algorithms for optimal delivery paths across 197 countries',
    icon: 'i-carbon-globe',
    metrics: { reliability: 0.995, satisfaction: 0.98 },
    features: ['Smart Routing', 'Cross-Border Optimization', 'Customs Pre-clearance']
  },
  {
    id: 'speed-optimization',
    title: 'Hyperloop Integration',
    description: 'Ultra-fast delivery utilizing next-gen transportation infrastructure',
    icon: 'i-carbon-delivery',
    metrics: { speedIndex: 98.5, efficiency: 0.94 },
    features: ['Quantum Tracking', 'Predictive ETAs', 'Real-time Rerouting']
  },
  {
    id: 'tracking-system',
    title: 'Advanced Telemetry',
    description: 'Military-grade tracking system with blockchain verification',
    icon: 'i-carbon-satellite',
    metrics: { accuracy: 0.999, uptime: 0.9999 },
    features: ['Blockchain Verification', 'IoT Integration', 'Environmental Monitoring']
  }
])
</script>

<template>
  <div class="delivery-policy-container min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 p-12">
    <div class="max-w-7xl mx-auto text-center">
      <h1 class="text-5xl font-bold mb-6">{{ t('delivery.title') }}</h1>
      <p class="text-xl mb-12">{{ t('delivery.subtitle') }}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="policy in deliveryPolicies" :key="policy.id" class="policy-card p-8 bg-white dark:bg-neutral-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 text-neutral-900 dark:text-neutral-100">
          <div class="icon-wrapper flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full">
            <div :class="policy.icon"/>
          </div>
          <h3 class="text-2xl font-semibold mb-2">{{ policy.title }}</h3>
          <p class="text-lg">{{ policy.description }}</p>
          <div class="metrics-grid grid grid-cols-2 gap-4 mt-4">
            <div v-for="(value, key) in policy.metrics" :key="key" class="metric-card p-4 bg-neutral-50 dark:bg-neutral-700 rounded-lg shadow-inner text-center">
              <span class="metric-label text-sm text-neutral-500">{{ key }}</span>
              <span class="metric-value text-xl font-bold">{{ typeof value === 'number' ? value.toFixed(2) : value }}</span>
            </div>
          </div>
          <ul class="features-list mt-4 space-y-2">
            <li v-for="feature in policy.features" :key="feature" class="feature-item flex items-center text-sm">
              <div class="i-carbon-checkmark-filled text-primary-600 dark:text-primary-400 mr-2"/>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-wrapper {
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%);
}
</style>
