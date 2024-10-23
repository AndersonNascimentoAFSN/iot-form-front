export function mockPendingGoals(initialValue = {}) {
  return {
    id: '1',
    title: 'Goal 1',
    desiredWeeklyFrequency: 3,
    completionCount: 1,
    ...initialValue,
  }
}
