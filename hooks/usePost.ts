import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const usePost = (popstId: string) => {
  const url = popstId ? `/api/posts/${popstId}` : null
  const { data, error, isLoading, mutate } = useSWR(url, fetcher)

  return {
    data,
    error,
    isLoading,
    mutate
  }
}

export default usePost
