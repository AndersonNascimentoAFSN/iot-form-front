import type { IParticipants } from '@/@types/participants'
import { env } from '@/env'

export interface IParticipantSummaryResponse {
  data: Array<{
    totalIsUfalStudent: number
    totalHasStudiedProgramming: number
    totalBirthdayThisDay: number
    totalMale: number
    totalFemale: number
    totalOther: number
    totalParticipant: number
  }>
}
export function getParticipantSummary(): Promise<IParticipantSummaryResponse> {
  const response: Promise<IParticipantSummaryResponse> = fetch(
    `${env.API_URL}/summary-participants`
  )
    .then(response => response.json())
    .catch(error => {
      console.error('error', error.message)
      return Promise.resolve({
        data: [],
      })
    })

  return response
}