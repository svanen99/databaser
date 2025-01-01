'use client'

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Textarea } from '@/components/textarea';
import { postSchema } from '@/actions/schemas';
import { createPost } from '@/actions/create-post';
import { useMutation } from '@tanstack/react-query';

const createPostSchema = postSchema
  .omit({ image: true })
  .extend({ image: z.any().optional() });

export const CreatePostForm = () => {
  const { mutate, error, isPending } = useMutation({
    mutationFn: createPost,
    onError: (error) => toast.error(error.message),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((values) => {
        const imageFile = values.image instanceof FileList && values.image.length > 0
          ? values.image[0]
          : null;

        const formData = {
          title: values.title,
          content: values.content,
          image: imageFile,
        };

        mutate(formData);
      })}
      className="flex w-full flex-col gap-4"
    >
      <Input {...register('title')} label="Title" error={errors.title} />
      <Textarea {...register('content')} label="Content" error={errors.content} />
      <Input {...register('image')} type="file" label="Image" error={errors.image} />
      <Button type="submit">{isPending ? 'Uploading post...' : 'Post'}</Button>
      {error && <p className="text-primary">{error.message}</p>}
    </form>
  );
};
