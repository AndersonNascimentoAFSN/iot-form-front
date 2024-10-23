'use server'

import {
  type CreateParticipantRequest,
  createParticipant,
} from '@/http/create-participant'
// import { createGoalCompleted } from '@/http'
// import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export async function sendParticipantFormAction(
  data: CreateParticipantRequest
) {
  const createdParticipant = await createParticipant(data)
  console.log('createdParticipant', createdParticipant)

  if (createdParticipant.participant) {
    redirect('/finish')
  } else {
    return {
      error: true,
    }
  }
}
