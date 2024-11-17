import { z } from 'zod'

export const DeliveryZoneSchema = z.object({
  name: z.string(),
  avgDeliveryTime: z.string(),
  coverage: z.number().min(0).max(1),
})

export const PolicyMetricsSchema = z.object({
  reliability: z.number().optional(),
  satisfaction: z.number().optional(),
  speedIndex: z.number().optional(),
  efficiency: z.number().optional(),
  accuracy: z.number().optional(),
  uptime: z.number().optional(),
  carbonOffset: z.number().optional(),
  recycleRate: z.number().optional(),
  responseTime: z.number().optional(),
  resolutionRate: z.number().optional(),
})

export const PolicySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  metrics: PolicyMetricsSchema,
  features: z.array(z.string()),
})

export const TrackingStatusSchema = z.object({
  status: z.enum(['pending', 'in_transit', 'delivered', 'failed']),
  location: z.object({
    lat: z.number(),
    lng: z.number(),
  }),
  estimatedDelivery: z.date(),
  confidence: z.number().min(0).max(1),
})

// Export types
export type DeliveryZone = z.infer<typeof DeliveryZoneSchema>
export type Policy = z.infer<typeof PolicySchema>
export type TrackingStatus = z.infer<typeof TrackingStatusSchema>
