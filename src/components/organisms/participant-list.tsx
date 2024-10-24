import { fetchParticipants } from '@/http/fetch-participants'
import { ParticipantsTable } from '../molecules/participants-table/ParticipantsTable'

export async function ParticipantList() {
  const participants = await fetchParticipants()

  return (
    <>
      <ParticipantsTable participants={participants} />
    </>
  )
}
