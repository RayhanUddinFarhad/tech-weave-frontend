import { useQuery } from '@tanstack/react-query';
import React from 'react';

const usePosts = () => {
    const { isLoading, error, data : posts = [], refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
          fetch('https://tech-weave-backend.onrender.com/post').then(
            (res) => res.json(),
          ),
      })


      return [posts, refetch]
};

export default usePosts;