import { createClient } from './server'

export type Post = {
  id: string
  title: string
  slug: string
  users: { email: string | null } | null
}

export const getHomePosts = async () => {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, users(email)')
    .order('created_at', { ascending: false })

  if (error) throw new Error(error.message)
  return data as Post[] 
}

export type HomePostsType = Awaited<ReturnType<typeof getHomePosts>>
export { createClient }
