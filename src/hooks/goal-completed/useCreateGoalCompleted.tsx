import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createGoalCompleted } from '../../http'

export function useCreateGoalCompleted() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (goalId: string) => createGoalCompleted(goalId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['pending-goals'],
      })
      queryClient.invalidateQueries({
        queryKey: ['summary'],
      })
    },
  })
}
