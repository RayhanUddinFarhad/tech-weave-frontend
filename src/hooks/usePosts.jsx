import { useQuery } from '@tanstack/react-query';
import React from 'react';

const usePosts = () => {
    const { isLoading : postLoading, error, data : posts = [], refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
          fetch('https://tech-weave-backend.onrender.com/post').then(
            (res) => res.json(),
          ),
      })


      return [posts, refetch, postLoading]
};

export default usePosts;