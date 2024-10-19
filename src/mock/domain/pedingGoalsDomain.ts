import { http, HttpResponse } from 'msw'
import { pendingGoalsData } from '../data/pending-goals-data'

export const pendingGoalsDomain = [
  // Intercept "GET https://example.com/user" requests...
  http.get('*/pending-goals', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(pendingGoalsData)
  }),
]
