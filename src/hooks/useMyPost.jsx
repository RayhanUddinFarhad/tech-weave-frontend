'use client'
import { AuthContext } from '@/context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

const useMyPost = () => {

    const {user} = useContext(AuthContext)



    const { isLoading : dataloading, error, data : myposts = [], refetch } = useQuery({
        queryKey: ['myposts'],
        queryFn: () =>
          fetch(`https://tech-weave-backend.onrender.com/${user?.email}`).then(
            (res) => res.json(),
          ),
      })


      return [myposts, refetch, dataloading]
};

export default useMyPost;