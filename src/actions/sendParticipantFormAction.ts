'use server'

import {
  type CreateParticipantRequest,
  createParticipant,
} from '@/http/create-participant'
import { revalidateTag, revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function sendParticipantFormAction(
  data: CreateParticipantRequest
) {
  const createdParticipant = await createParticipant({
    ...data,
    hasStudiedProgramming: Boolean(data?.hasStudiedProgramming),
    isUfalStudent: Boolean(data?.isUfalStudent),
  })

  if (createdParticipant?.participant) {
    revalidateTag('participants')
    revalidatePath('/participants')
    redirect(`/participants/${createdParticipant?.participant.id}`)
  } else {
    return {
      error: true,
    }
  }
}
