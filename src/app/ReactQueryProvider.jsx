'use client'
import React from 'react';
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
  
  const queryClient = new QueryClient()
  

const ReactQueryProvider = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
      </QueryClientProvider>
    );
};

export default ReactQueryProvider;