'use client'

import { createPostSchema } from "@/actions/schemas";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { createPost } from "@/actions/create-post";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function CreatePage() {
  const {mutate, error, isPending} = useMutation ({
    mutationFn: createPost,
    onError: (error) => toast.error(error.message)
  })

  const {
    register, 
    handleSubmit, 
    formState: {errors}, 
  } = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema)
  })

  return (
    <main className='main'>
      <h1 className='mb-8 pl-2 text-2xl font-bold'>create post</h1>
      <form  onSubmit={handleSubmit((values) => mutate(values))}className="flex w-full flex-col gap-4">
          <Input {...register('title')} label="title" error={errors.title} />
          <Textarea {...register('content')} label="content"/>
          <Button type="submit">{isPending ? 'uploading post...' : 'post'}</Button> 
      </form>
    </main>
  )
}
