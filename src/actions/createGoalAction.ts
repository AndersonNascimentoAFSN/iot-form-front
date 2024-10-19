'use server'

import { revalidateTag } from 'next/cache'
import z from 'zod'

import { createGoal } from '@/http'

const createGoalSchema = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

export async function createGoalAction({
  title,
  desiredWeeklyFrequency,
}: { title: string; desiredWeeklyFrequency: number }) {
  const result = createGoalSchema.safeParse({
    title,
    desiredWeeklyFrequency,
  })

  if (result.error) {
    return {
      success: false,
      data: undefined,
    }
  }

  const createdGoalCompleted = await createGoal(result.data)
    .then(data => {
      return Promise.resolve({
        data: data,
        success: true,
      })
    })
    .catch(err => {
      console.error('error', err.message)
      return Promise.resolve({
        data: undefined,
        success: false,
      })
    })

  revalidateTag('week-summary')
  revalidateTag('pending-goals')

  return createdGoalCompleted
}
