import { sendParticipantSchema } from "@/schemas/sendParticipantSchema";
import { z } from "zod";

export type sendParticipantFormData = z.infer<typeof sendParticipantSchema>