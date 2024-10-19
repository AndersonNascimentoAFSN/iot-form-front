'use server'

import { undoGoalCompleted } from '@/http/undo-goal-completed'
import { revalidateTag } from 'next/cache'

export async function undoGoalCompletedAction(goalId: string) {
  console.log('goalId', goalId)

  const undoGoalCompletedResult = await undoGoalCompleted(goalId)
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

  return undoGoalCompletedResult
}
