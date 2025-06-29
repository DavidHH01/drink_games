export const useGameSocket = () => {
  const socket = useSocket('main')
  
  const joinRoom = (roomId: string, playerName: string) => {
    socket.emit('join-room', { roomId, playerName })
  }
  
  const createRoom = (roomId: string, playerName: string) => {
    socket.emit('create-room', { roomId, playerName })
  }
  
  const toggleReady = (roomId: string, ready: boolean) => {
    socket.emit('toggle-ready', { roomId, ready })
  }
  
  const startGame = (roomId: string) => {
    socket.emit('start-game', { roomId })
  }
  
  const leaveRoom = (roomId: string) => {
    socket.emit('leave-room', { roomId })
  }
  
  const closeRoom = (roomId: string) => {
    socket.emit('close-room', { roomId })
  }
  
  return {
    socket,
    joinRoom,
    createRoom,
    toggleReady,
    startGame,
    leaveRoom,
    closeRoom
  }
}