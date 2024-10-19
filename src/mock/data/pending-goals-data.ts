import type { PendingGoalsResponse } from '@/http'
import { mockPendingGoals } from './entities'

export const pendingGoalsData: PendingGoalsResponse = {
  pendingGoals: [
    mockPendingGoals({
      id: '1',
      title: 'Goal 1',
      desiredWeeklyFrequency: 3,
      completionCount: 1,
    }),
    mockPendingGoals({
      id: '2',
      title: 'Goal 2',
      desiredWeeklyFrequency: 2,
      completionCount: 0,
    }),
  ],
}
