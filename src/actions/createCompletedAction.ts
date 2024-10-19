'use server'

import { createGoalCompleted } from '@/http'
import { revalidateTag } from 'next/cache'

export async function createCompletedAction(goalId: string) {
  const createdGoalCompleted = await createGoalCompleted(goalId)
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
