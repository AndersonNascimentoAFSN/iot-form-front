import { z } from 'zod'

export const sendParticipantSchema = z.object({
  name: z.string().min(1, 'Digite o seu nome completo'),
  educationLevelId: z.string().min(1, 'Selecione uma opção'),
  gender: z.string().min(1, 'Selecione uma opção'),
  hasStudiedProgramming: z.coerce.boolean({ message: 'Selecione uma opção' }),
  isUfalStudent: z.coerce.boolean({ message: 'Selecione uma opção' }),
  dateOfBirth: z.string().min(1, 'Selecione uma opção'),
})
