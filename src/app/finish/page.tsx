import { InOrbitIcon } from "@/components/atoms/in-orbit-icon";
import { Separator } from "@/components/ui/separator";

export default function FinishPage() {
  return (
    <main className="py-10 max-w-[600px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <h1 className="text-lg font-semibold">
            Sua inscrição no sorteio foi realizada com sucesso!
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            O sorteio será realizado no final do mini curso.
          </span>
        </div>
      </div>

      <Separator />
    </main>
  )
}