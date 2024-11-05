'use client'
import { useQuery } from "@tanstack/react-query"
import { HomePostsType, getHomePosts } from "@/utils/supabase/queries"
import { HomePost } from "./post"
 
export const HomePosts = ({
  initialPosts,
}: {
  initialPosts: HomePostsType
}) => {
  const {data: posts} = useQuery({
    queryKey: ['home-posts'],
    queryFn: async () => {
      const {data, error} = await getHomePosts()
 
      if (error) throw error
      return data
    },
    initialData: initialPosts,
    refetchOnMount: false,
    staleTime: 1000 * 10,   //10 sec
  })
 
  return <section className='flex flex-col items-center gap-4'>
    {posts.map(({id, title, slug, users}) => (
      <HomePost
    key={id}
    title={title}
    slug={slug}
    author={users?.email || 'anonymous'}/>
    ))}
  </section>
}