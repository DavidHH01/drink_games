import { io, type Socket } from 'socket.io-client'

export default defineNuxtPlugin((nuxtApp) => {
  const socket: Socket = io('https://modo-caos-backend-aged-resonance-6210.fly.dev', {
    transports: ['websocket'],
  })

  socket.on('connect', () => {
    console.log('🔌 Conectado al backend con ID:', socket.id)
  })

  socket.on('disconnect', () => {
    console.warn('⚠️ Desconectado del servidor')
  })

  nuxtApp.provide('socket', socket)
})
