import { useQuery } from '@tanstack/react-query';
import React from 'react';

const usePosts = () => {
    const { isLoading, error, data : posts = [], refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
          fetch('http://localhost:5000/post').then(
            (res) => res.json(),
          ),
      })


      return [posts, refetch]
};

export default usePosts;