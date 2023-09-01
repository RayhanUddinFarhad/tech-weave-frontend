import { AuthContext } from '@/context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

const useIsAdmin = () => {
  const { user, loading } = useContext(AuthContext);
  const { data: isAdmin, isLoading : isAdminLoading } = useQuery({
    queryKey: ['isAdmin'],
    enabled : !loading,
    queryFn: () =>
      fetch(`https://tech-weave-backend.onrender.com/admin/${user?.email}`).then(
        (res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        }
      ),
  });

  return [isAdmin, isAdminLoading ]; // Return role or null if not available
};

export default useIsAdmin;
