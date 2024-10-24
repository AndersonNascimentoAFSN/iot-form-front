'use server'

import {
  type CreateParticipantRequest,
  createParticipant,
} from '@/http/create-participant'
// import { revalidateTag } from 'next/cache'
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
    redirect('/finish')
  } else {
    return {
      error: true,
    }
  }
}
