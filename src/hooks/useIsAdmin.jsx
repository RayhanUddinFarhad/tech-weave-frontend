import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useIsAdmin = (email) => {
    const { isLoading, error, data : isAdmin = [], refetch } = useQuery({
        queryKey: ['isAdmin'],
        queryFn: () =>
          fetch(`http://localhost:5000/users/${email}`).then(
            (res) => res.json(),
          ),
      })


      return [isAdmin, refetch]
};

export default useIsAdmin;