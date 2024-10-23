import type { sendParticipantSchema } from '@/schemas/sendParticipantSchema'
import type { z } from 'zod'

export type sendParticipantFormData = z.infer<typeof sendParticipantSchema>
