import { env } from '@/env'

export interface UndoGoalCompletedResponse {
  goalCompletion:
    | {
        id: string
        createdAt: Date
        goalId: string
      }
    | undefined
}

export function undoGoalCompleted(
  goalCompletionId: string
): Promise<UndoGoalCompletedResponse> {
  const response: Promise<UndoGoalCompletedResponse> = fetch(
    `${env.NEXT_PUBLIC_API_URL}/undo-goal-completions`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ goalCompletionId }),
    }
  )
    .then(response => response.json())
    .then((data: UndoGoalCompletedResponse) => data)

  return response
}
