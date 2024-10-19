import { env } from '@/env'

export type GoalsPerDayType = Record<
  string,
  Array<{
    id: string
    title: string
    completedAt: Date
  }>
>

export type SummaryType = {
  completed: number
  total: number
  goalsPerDay: GoalsPerDayType | null
}

export interface SummaryResponse {
  summary: SummaryType
  lastUpdate: Date | null
  cacheHeader: string | null
}

export function SummaryService(): Promise<SummaryResponse> {
  const oneMinute = 60 * 1000
  let cacheHeader: string | null = null

  const response: Promise<SummaryResponse> = fetch(
    `${env.NEXT_PUBLIC_API_URL}/week-summary`,
    {
      next: {
        revalidate: oneMinute * 5,
        tags: ['week-summary'],
      },
    }
  )
    .then(response => {
      cacheHeader = response.headers.get('cache-control')
      return response.json()
    })
    .then((data: SummaryResponse) => ({ ...data, cacheHeader }))
    .catch(error => {
      console.error('error', error.message)
      return Promise.resolve({
        summary: {
          completed: 0,
          total: 0,
          goalsPerDay: null,
        },
        lastUpdate: null,
        cacheHeader: null,
      })
    })

  return response
}
