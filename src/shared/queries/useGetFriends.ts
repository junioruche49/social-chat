import {  useQuery } from '@tanstack/react-query'
import { getFriends } from '../endpoints/endpoints'

export const useGetFriends =()=>{
  return useQuery({
    queryKey: ["friends"],
    queryFn: () => getFriends(),
  })
}
