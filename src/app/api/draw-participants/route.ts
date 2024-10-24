import { drawParticipant } from '@/http/draw-participants/drawParticipants'
import { getParticipant } from '@/http/get-participant/getParticipant'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestHeaders = new Headers(request.headers)
  const numberOfParticipants = requestHeaders.get('numberOfParticipants') ?? undefined

  const result = await drawParticipant({
    numberOfParticipants
  })

  return NextResponse.json(result, {
    status: 200,
  })
}
