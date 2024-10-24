'use client'

import { type FormEvent, useEffect, useRef, useState } from 'react'

import { searchParticipantFormAction } from '@/actions/searchParticipantAction'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { IParticipantResponse } from '@/http/get-participant/getParticipant'

export function SearchForm() {
  const ref = useRef<HTMLInputElement>(null)
  const [participant, setParticipant] = useState<IParticipantResponse>()

  async function onSubmit(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    const value = ref.current?.value

    const searchParticipant = await searchParticipantFormAction({
      name: value,
    })

    setParticipant(searchParticipant)
  }

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <>
      <form className="flex flex-col gap-2">
        <Label htmlFor="participant">Buscar participante</Label>

        <Input
          placeholder="Insira o nome completo do participante..."
          id="participant"
          ref={ref}
        />

        <Button type="submit" onClick={event => onSubmit(event)}>
          Buscar
        </Button>
      </form>

      <code>{JSON.stringify(participant, null, 2)}</code>
    </>
  )
}
