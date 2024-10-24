'use server'

// import { env } from '@/env'
import type { IParticipantResponse } from '@/http/get-participant/getParticipant'
import { headers } from 'next/headers'

export async function searchParticipantFormAction({
  name,
  uuid,
}: {
  name?: string
  uuid?: string
}) {
  const newHeaders = new Headers()
  newHeaders.append('Content-Type', 'application/json')
  if (name) newHeaders.append('name', name)
  if (uuid) newHeaders.append('uuid', uuid)

  const headersList = headers()
  const host = headersList.get('host')
  const protocol = headersList.get('x-forwarded-proto') || 'http'
  const fullUrl = `${protocol}://${host}/api/search-participant`

  // const url = `${env.FRONT_URL}/api/search-participant`

  const response: IParticipantResponse = await fetch(fullUrl, {
    method: 'GET',
    headers: newHeaders,
    // headers: {
    //   'Content-Type': 'application/json',
    //   ...(name ? { 'name': name } : {}),
    //   ...(uuid ? { 'name': uuid } : {}),
    // },
  })
    .then(response => response.json())
    .catch(err => {
      console.error('error', err.message)
      return Promise.resolve({
        data: [],
        filter: {
          search: {
            name,
            uuid,
          },
        },
      })
    })

  return response
}
