import { fetchParticipants } from '@/http/fetch-participants'

export async function ParticipantList() {
  const participants = await fetchParticipants()
  console.log(participants)

  return (
    <table className="w-full border-collapse border border-zinc-200">
      <thead>
        <tr className="bg-zinc-100">
          <th className="border border-zinc-900 p-2 text-zinc-900">Nome</th>
          <th className="border border-zinc-900 p-2 text-zinc-900">
            Data de nascimento
          </th>
        </tr>
      </thead>

      <tbody>
        {participants.data.map(participant => (
          <tr key={participant.id}>
            <td className="border border-zinc-900 p-2">{participant.name}</td>
            <td className="border border-zinc-900 p-2">
              {participant.dateOfBirth}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
