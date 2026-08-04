import { useMutation } from '@tanstack/react-query'
import { sendRequest } from '../endpoints/endpoints'

export const  useSendRequest =()=>{
  return useMutation({mutationFn: (receiverId: string) => sendRequest(receiverId)})
}
