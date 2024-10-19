import type { IPendingGoals } from '@/@types/pendingGoals'

export function mockPendingGoals(initialValue = {}): IPendingGoals {
  return {
    id: '1',
    title: 'Goal 1',
    desiredWeeklyFrequency: 3,
    completionCount: 1,
    ...initialValue,
  }
}
