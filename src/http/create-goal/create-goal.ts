import { env } from '@/env'

export interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export interface CreateGoalResponse {
  goal:
    | {
        id: string
        title: string
        desiredWeeklyFrequency: number
        createdAt: Date
      }
    | undefined
}

export function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest): Promise<CreateGoalResponse> {
  const response: Promise<CreateGoalResponse> = fetch(
    `${env.NEXT_PUBLIC_API_URL}/goals`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, desiredWeeklyFrequency }),
    }
  )
    .then(response => response.json())
    .then((data: CreateGoalResponse) => data)
    .catch(err => {
      console.error('error', err.message)
      return Promise.resolve({
        goal: undefined,
      })
    })

  return response
}
