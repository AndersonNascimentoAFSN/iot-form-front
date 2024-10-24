import type { IParticipants } from '@/@types/participants'
import { env } from '@/env'

export interface IParticipantResponse {
  data: IParticipants[] | []
  filter: {
    search: {
      name?: string
      uuid?: string
    }
  }
}

export function getParticipant({
  name,
  uuid,
}: {
  name?: string
  uuid?: string
}): Promise<IParticipantResponse> {
  const queryParams = new URLSearchParams()

  if (name) {
    queryParams.append('name', name)
  }

  if (uuid) {
    queryParams.append('uuid', uuid)
  }

  const response: Promise<IParticipantResponse> = fetch(
    `${env.API_URL}/participant?${queryParams.toString()}`,
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
