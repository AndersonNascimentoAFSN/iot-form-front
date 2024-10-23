import type { IEducationLevels } from '@/@types/educationLevels'
import { env } from '@/env'

export interface IEducationLevelsResponse {
  data: IEducationLevels[]
}

export function fetchEducationLevels(): Promise<IEducationLevelsResponse> {
  const oneMinute = 60 * 1000

  const response: Promise<IEducationLevelsResponse> = fetch(
    `${env.NEXT_PUBLIC_API_URL}/education-levels`,
    {
      next: {
        revalidate: oneMinute * 60,
        tags: ['education-levels'],
      },
    }
  )
    .then(response => response.json())
    .then((data: IEducationLevelsResponse) => data)
    .catch(error => {
      console.error('error', error.message)
      return Promise.resolve({
        data: [],
      })
    })

  return response
}
