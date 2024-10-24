'use server'

import type { IParticipantResponse } from '@/http/get-participant/getParticipant'
import { headers } from 'next/headers'

export async function drawParticipantsFormAction({
  numberOfParticipants,
}: {
  numberOfParticipants?: string
}) {
  const newHeaders = new Headers()
  newHeaders.append('Content-Type', 'application/json')
  if (numberOfParticipants) newHeaders.append('numberOfParticipants', numberOfParticipants)

  const headersList = headers()
  const host = headersList.get('host')
  const protocol = headersList.get('x-forwarded-proto') || 'http'
  const fullUrl = `${protocol}://${host}/api/draw-participants`

  const response: IParticipantResponse = await fetch(fullUrl, {
    method: 'GET',
    headers: newHeaders,
  })
    .then(response => response.json())
    .catch(err => {
      console.error('error', err.message)
      return Promise.resolve({
        data: [],
      })
    })

  return response
}
