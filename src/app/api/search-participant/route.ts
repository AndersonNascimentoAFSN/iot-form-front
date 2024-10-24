import { getParticipant } from '@/http/get-participant/getParticipant'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const currentUrl = request.url
  console.log('currentUrl', currentUrl)

  const requestHeaders = new Headers(request.headers)
  const name = requestHeaders.get('name') ?? undefined
  const uuid = requestHeaders.get('uuid') ?? undefined

  const result = await getParticipant({
    name,
    uuid,
  })

  return NextResponse.json(result, {
    status: 200,
  })
}
