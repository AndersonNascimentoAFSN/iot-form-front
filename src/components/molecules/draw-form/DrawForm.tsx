'use client'

import { drawParticipantsFormAction } from '@/actions/drawParticipantsAction'
import { Button } from '@/components/ui/button'
import type { IParticipantResponse } from '@/http/get-participant/getParticipant'
import { type FormEvent, useState } from 'react'

export function DrawForm() {
  const [participant, setParticipant] = useState<IParticipantResponse>()

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const participantDraw = await drawParticipantsFormAction({})
    setParticipant(participantDraw)
  }

  console.log('participant', participant)
  return (
    <div className="flex flex-col gap-5">
      <span className="text-xs text-zinc-400">
        Nome do ganhador: <strong>{participant?.data.at(0)?.name}</strong>
      </span>

      <form onSubmit={event => handleSubmit(event)}>
        <Button type="submit">Sortear</Button>
      </form>
    </div>
  )
}
