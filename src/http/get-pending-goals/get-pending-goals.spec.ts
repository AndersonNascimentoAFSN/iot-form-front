import { describe, expect, it } from 'vitest'
import { getPendingGoals } from './get-pending-goals'

const sut = async () => {
  const result = await getPendingGoals()
  return {
    result,
  }
}

describe('#getPendingGoals service', () => {
  it('should return a list of pending goals', async () => {
    const { result } = await sut()

    expect(result).toEqual({
      pendingGoals: [
        {
          id: '1',
          title: 'Goal 1',
          desiredWeeklyFrequency: 3,
          completionCount: 1,
        },
        {
          id: '2',
          title: 'Goal 2',
          desiredWeeklyFrequency: 2,
          completionCount: 0,
        },
      ],
    })
  })
})
