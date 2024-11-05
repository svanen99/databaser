'use client'
import { toast } from "sonner"
import { useMutation } from "@tanstack/react-query"
import { deletePost } from "@/actions/delete-post"
import { Button } from "./button"
import { on } from "events"

export const DeletePostButton = ({postId }: { postId: string }) => {
    const { mutate } = useMutation({
        mutationFn: () => deletePost(postId), 
        onError: (error) =>  toast.error(error.message), 
        onSuccess: () => toast.success('your post was deleted'),
        onMutate: () => toast.loading('deleting post...'),
        onSettled: () => toast.dismiss()
    })

    return (
        <Button onClick={() => mutate()} variant='secondary'>
            delete
        </Button>
    )
}