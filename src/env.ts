import z from 'zod'

export const envSchema = z.object({
  API_URL: z.string().url().default('http://localhost:3333'),
  FRONT_URL: z.string().url().default('http://localhost:3000'),
  NODE_ENV: z.string().default('development'),
})

export const env = envSchema.parse(process.env)
