import type { IParticipants } from '@/@types/participants'
import { env } from '@/env'

export interface IDrawParticipantResponse {
  data: IParticipants[] | []
}

export function drawParticipant({
  numberOfParticipants,
}: {
  numberOfParticipants?: string
}): Promise<IDrawParticipantResponse> {
  const queryParams = new URLSearchParams()

  if (numberOfParticipants) {
    queryParams.append('numberOfParticipants', numberOfParticipants)
  }

  const response: Promise<IDrawParticipantResponse> = fetch(
    `${env.API_URL}/draw-participant?${queryParams.toString()}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then(response => response.json())
    .catch(error => {
      console.error('error', error.message)
      return Promise.resolve([])
    })

  return response
}
