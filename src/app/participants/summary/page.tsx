import { InOrbitIcon } from '@/components/atoms/in-orbit-icon'
import { getParticipantSummary } from '@/http/get-participant-summary/get-participant-summary'

export default async function SummaryPage() {
  const summary = await getParticipantSummary()

  return (
    <main className="py-10 max-w-[600px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <InOrbitIcon />
        <h1 className="text-lg font-semibold">
          Dados estatísticos dos participantes
        </h1>
      </div>

      <code>{JSON.stringify(summary, null, 2)}</code>
    </main>
  )
}
