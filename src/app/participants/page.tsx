import { InOrbitIcon } from '@/components/atoms/in-orbit-icon'
import { ParticipantsTable } from '@/components/organisms/participants-table/ParticipantTable'
import { ParticipantList } from '@/components/organisms/participant-list'

export default function ParticipantsPage() {
  return (
    <main className="py-10 max-w-[600px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <h1 className="text-lg font-semibold">Lista de Participantes</h1>
        </div>
      </div>

      <ParticipantList />

      {/* <ParticipantsTable /> */}
    </main>
  )
}
