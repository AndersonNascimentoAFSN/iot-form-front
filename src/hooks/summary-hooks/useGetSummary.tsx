'use client'

import { useQuery } from '@tanstack/react-query'

import { type SummaryResponse, SummaryService } from '../../http'

export function useGetSummary() {
  const oneMinute = 1000 * 60

  return useQuery<SummaryResponse>({
    queryKey: ['summary'],
    queryFn: SummaryService,
    staleTime: oneMinute * 10,
  })
}
