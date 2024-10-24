'use server'

import {
  type CreateParticipantRequest,
  createParticipant,
} from '@/http/create-participant'
import { revalidatePath, revalidateTag } from 'next/cache'
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
    revalidateTag('summary-participants')
    revalidatePath('/participants')
    revalidatePath('/participants/summary')
    redirect(`/participants/${createdParticipant?.participant.id}`)
  } else {
    return {
      error: true,
    }
  }
}
