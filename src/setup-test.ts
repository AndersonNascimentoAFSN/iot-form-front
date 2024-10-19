import '@testing-library/jest-dom'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'
import { server } from './mock/node'

vi.mock('react', () => {
  const originalReact = vi.importActual('react') // Importa tudo de React
  return {
    ...originalReact,
    cache: vi.fn(fn => vi.fn(() => fn())), // Mock simples que apenas executa a função
  }
})

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
