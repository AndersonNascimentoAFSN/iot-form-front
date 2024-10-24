import { z } from 'zod'

export const sendParticipantSchema = z.object({
  name: z.string().min(1, 'Digite o seu nome completo'),
  educationLevelId: z.string().min(1, 'Selecione uma opção'),
  gender: z.string().min(1, 'Selecione uma opção'),
  hasStudiedProgramming: z.string().min(1, 'Selecione uma opção'),
  isUfalStudent: z.string().min(1, 'Selecione uma opção'),
  dateOfBirth: z.string().min(2, 'Selecione uma opção'),
})
// .transform((data) => ({
//   ...data,
//   hasStudiedProgramming: Boolean(data.hasStudiedProgramming),
//   isUfalStudent: Boolean(data.isUfalStudent),
// }))
