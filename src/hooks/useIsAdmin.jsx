import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useIsAdmin = (email) => {
    const { isLoading, error, data : isAdmin = [], refetch } = useQuery({
        queryKey: ['isAdmin'],
        queryFn: () =>
          fetch(`https://tech-weave-backend.onrender.com/users/${email}`).then(
            (res) => res.json(),
          ),
      })


      return [isAdmin, refetch]
};

export default useIsAdmin;