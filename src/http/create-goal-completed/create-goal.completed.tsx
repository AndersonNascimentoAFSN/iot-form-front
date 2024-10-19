import { env } from '@/env'

export interface CreateGoalCompletedResponse {
  goalCompletion:
    | {
        id: string
        createdAt: Date
        goalId: string
      }
    | undefined
}

export function createGoalCompleted(
  goalId: string
): Promise<CreateGoalCompletedResponse> {
  const response: Promise<CreateGoalCompletedResponse> = fetch(
    `${env.NEXT_PUBLIC_API_URL}/goal-completions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ goalId }),
    }
  )
    .then(response => response.json())
    .then((data: CreateGoalCompletedResponse) => data)

  return response
}
