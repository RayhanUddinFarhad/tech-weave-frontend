import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUsers = () => {
    const { isLoading, error, data : users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
          fetch('https://tech-weave-backend.onrender.com/users').then(
            (res) => res.json(),
          ),
      })


      return [users, refetch]
};

export default useUsers;