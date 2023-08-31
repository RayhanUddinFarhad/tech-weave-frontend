import { AuthContext } from '@/context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

const useIsAdmin = (email) => {
  const {user, loading} = useContext(AuthContext)
    const { isLoading, error, data : isAdmin = [], refetch } = useQuery({
        queryKey: ['isAdmin'],
        enabled : !loading,
        queryFn: () =>
          fetch(`https://tech-weave-backend.onrender.com/users/${user?.email}`).then(
            (res) => res.json(),
          ),
      })


      return [isAdmin, refetch, isLoading]
};

export default useIsAdmin;