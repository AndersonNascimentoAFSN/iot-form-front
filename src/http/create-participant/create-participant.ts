import { env } from '@/env'

export interface CreateParticipantRequest {
  name: string
  dateOfBirth: string
  educationLevelId: string
  gender: string
  hasStudiedProgramming: boolean
  isUfalStudent: boolean
}

export interface CreateParticipantResponse {
  participant:
    | {
        id: string
        name: string
        dateOfBirth: string
        gender: string
        hasStudiedProgramming: boolean
        isUfalStudent: boolean
        createdAt: string
        educationLevelId: string
      }
    | undefined
}

export function createParticipant({
  name,
  gender,
  dateOfBirth,
  educationLevelId,
  hasStudiedProgramming,
  isUfalStudent,
}: CreateParticipantRequest): Promise<CreateParticipantResponse> {
  const response: Promise<CreateParticipantResponse> = fetch(
    `${env.NEXT_PUBLIC_API_URL}/participants`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        gender,
        dateOfBirth,
        educationLevelId,
        hasStudiedProgramming,
        isUfalStudent,
      }),
    }
  )
    .then(response => response.json())
    .then((data: CreateParticipantResponse) => data)
    .catch(err => {
      console.error('error', err.message)
      return Promise.resolve({
        participant: undefined,
      })
    })

  return response
}
