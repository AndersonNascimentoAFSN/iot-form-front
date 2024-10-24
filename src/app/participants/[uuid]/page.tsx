import { Confetti } from '@/components/atoms/confetti/Confetti'
import { InOrbitIcon } from '@/components/atoms/in-orbit-icon'
// import { ParticipantTable } from '@/components/molecules/participant-table/ParticipantTable'
import { Separator } from '@/components/ui/separator'
import { getParticipant } from '@/http/get-participant/getParticipant'
import Link from 'next/link'
// import Link from 'next/link'

export default async function FinishPage({
  params,
}: { params: { uuid: string } }) {
  const participant = await getParticipant({ uuid: params.uuid })

  return (
    <main className="py-10 max-w-[600px] px-5 mx-auto flex flex-col gap-6 min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <h1 className="text-lg font-semibold">
            Sua inscrição no sorteio foi realizada com sucesso!
          </h1>
        </div>
      </div>

      <Separator />

      <div className="text-md text-zinc-400 flex flex-col gap-2">
        <span>Parabéns, {participant.data.at(0)?.name}!</span>
        <span>Agora você está concorrendo ao sorteio</span>
      </div>

      {/* <ParticipantTable participant={participant} /> */}

      {/* <div className="flex items-center justify-between text-xs text-zinc-400">
        <Link href="/participants">
          <span>Clique aqui para verificar se seu nome consta na lista de participantes</span>
        </Link>
      </div> */}

      <div className="flex items-center justify-between text-xs text-zinc-400">
        <Link href="/participants">
          <span>Clique aqui para ver quem está participando do sorteio</span>
        </Link>
      </div>

      <Separator />

      <span className="text-xs text-zinc-400">
        Obs.: O sorteio será realizado no final do mini curso.
      </span>

      <Confetti />
    </main>
  )
}
