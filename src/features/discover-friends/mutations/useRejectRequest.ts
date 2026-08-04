import { useMutation, useQueryClient } from '@tanstack/react-query'
import useToast from "@/shared/hooks/useToast"
import { rejectRequest } from '../endpoints/endpoints'


export const  useRejectRequest = ()=>{
	const queryClient = useQueryClient();
    const { showSuccess } = useToast();
    return useMutation({
        mutationFn: (requestId: string) => rejectRequest(requestId), 
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:["incoming-requests"]})
            showSuccess("Request Rejected")
    }})
}
