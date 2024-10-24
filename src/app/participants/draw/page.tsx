import { InOrbitIcon } from '@/components/atoms/in-orbit-icon'
import { DrawForm } from '@/components/molecules/draw-form/DrawForm'

export default function DrawPage() {
  return (
    <main className="py-10 max-w-[600px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <InOrbitIcon />
        <h1 className="text-lg font-semibold">Sorteio</h1>
      </div>

      <DrawForm />
    </main>
  )
}
