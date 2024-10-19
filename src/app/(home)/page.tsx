import { InOrbitIcon } from '@/components/atoms/in-orbit-icon'
import { ParticipantForm } from '@/components/molecules/participant-form/ParticipantForm'
import { Separator } from '@/components/ui/separator'
export default function Home() {
  return (
    <main className="py-10 max-w-[600px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <h1 className="text-lg font-semibold">
            Formulário de participação no mini curso
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Preencha o formulário abaixo para participar do sorteio.
          </span>
        </div>
      </div>

      <Separator />


      <div className="flex flex-col gap-6 h-full">
        <ParticipantForm />
      </div>
    </main>
  )
}
