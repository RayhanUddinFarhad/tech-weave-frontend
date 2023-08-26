'use client'
import { AuthContext } from '@/context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';

const useMyPost = () => {

    const {user} = useContext(AuthContext)



    const { isLoading, error, data : myposts = [], refetch } = useQuery({
        queryKey: ['myposts'],
        queryFn: () =>
          fetch(`http://localhost:5000/my-post/${user?.email}`).then(
            (res) => res.json(),
          ),
      })


      return [myposts, refetch]
};

export default useMyPost;