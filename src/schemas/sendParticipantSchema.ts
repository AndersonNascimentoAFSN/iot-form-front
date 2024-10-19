import { z } from "zod";

export const sendParticipantSchema = z.object({
  name: z.string().min(1, 'Digite o seu nome completo'),
  levelOfEducation: z.coerce.number().min(1).max(12, 'Selecione uma opção'),
  gender: z.string().min(1, 'Selecione uma opção'),
  programming: z.coerce.boolean({ message: 'Selecione uma opção' }),
  student: z.coerce.boolean({ message: 'Selecione uma opção' }),
  dateOfBirth: z.string().min(1, 'Selecione uma opção'),
})