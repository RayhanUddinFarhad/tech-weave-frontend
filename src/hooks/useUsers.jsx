import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUsers = () => {
    const { isLoading, error, data : users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () =>
          fetch('http://localhost:5000/users').then(
            (res) => res.json(),
          ),
      })


      return [users, refetch]
};

export default useUsers;