import z from 'zod'

export const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().default('http://localhost:3333'),
  NODE_ENV: z.string().default('development'),
})

export const env = envSchema.parse(process.env)
