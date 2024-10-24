import type { IParticipants } from '@/@types/participants'
import { env } from '@/env'

export interface IParticipantsResponse {
  data: IParticipants[]
}

export function fetchParticipants(): Promise<IParticipantsResponse> {
  const oneMinute = 60 * 1000

  const response: Promise<IParticipantsResponse> = fetch(
    `${env.NEXT_PUBLIC_API_URL}/participants`,
    {
      next: {
        revalidate: oneMinute * 60,
        tags: ['participants'],
      },
    }
  )
    .then(response => response.json())
    .then((data: IParticipantsResponse) => data)
    .catch(error => {
      console.error('error', error.message)
      return Promise.resolve({
        data: [],
      })
    })

  return response
}
