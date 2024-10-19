'use server'

// import { createGoalCompleted } from '@/http'
// import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export async function sendParticipantFormAction() {
  // const createdGoalCompleted = await createGoalCompleted(goalId)
  //   .then(data => {
  //     return Promise.resolve({
  //       data: data,
  //       success: true,
  //     })
  //   })
  //   .catch(err => {
  //     console.error('error', err.message)
  //     return Promise.resolve({
  //       data: undefined,
  //       success: false,
  //     })
  //   })

  // revalidateTag('week-summary')
  // revalidateTag('pending-goals')
  redirect('/finish')

  // return createdGoalCompleted
}
