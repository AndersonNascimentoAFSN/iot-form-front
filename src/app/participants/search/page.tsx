import { InOrbitIcon } from '@/components/atoms/in-orbit-icon'
import { SearchForm } from '@/components/molecules/search-form/SearchForm'

export default function SearchPage() {
  return (
    <main className="py-10 max-w-[600px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <InOrbitIcon />
        <h1 className="text-lg font-semibold">Busca de participante</h1>
      </div>

      <SearchForm />
    </main>
  )
}
