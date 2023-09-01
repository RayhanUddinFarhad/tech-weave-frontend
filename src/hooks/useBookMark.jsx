'use client'
import { AuthContext } from '@/context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

const useBookMark = () => {
    const {user} = useContext(AuthContext)



    const { isLoading, error, data : bookmark = [], refetch } = useQuery({
        queryKey: ['myposts'],
        queryFn: () =>
          fetch(`https://tech-weave-backend.onrender.com/bookmark/${user?.email}`).then(
            (res) => res.json(),
          ),
      })


      return [bookmark, refetch]
};

export default useBookMark;