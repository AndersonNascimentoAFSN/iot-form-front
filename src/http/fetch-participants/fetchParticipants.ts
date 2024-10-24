import type { IParticipants } from '@/@types/participants'
import { env } from '@/env'

export interface IParticipantsResponse {
  data: IParticipants[]
  limit: number
  page: number
  total: number
}

export function fetchParticipants(): Promise<IParticipantsResponse> {
  const oneMinute = 60 * 1000

  const response: Promise<IParticipantsResponse> = fetch(
    `${env.API_URL}/participants?limit=150`,
    {
      next: {
        revalidate: oneMinute * 60,
        tags: ['participants'],
      },
    }
  )
    .then(response => response.json())
    .catch(error => {
      console.error('error', error.message)
      return Promise.resolve({
        data: [],
      })
    })

  return response
}
