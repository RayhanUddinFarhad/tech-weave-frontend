import { useQuery } from '@tanstack/react-query';

const useIsAdmin = (email) => {
    if (!email) {
        throw new Error('Email is required for useIsAdmin hook.');
    }

    const { isLoading, error, data: isAdmin = false, refetch } = useQuery(
        ['isAdmin', email], // Include email in the query key
        async () => {
            const response = await fetch(`https://tech-weave-backend.onrender.com/users/${email}`);
            if (!response.ok) {
                throw new Error('Failed to fetch user data.');
            }
            const userData = await response.json();
            return userData.isAdmin || false;
        }
    );

    return {
        isAdmin,
        isLoading,
        error,
        refetch,
    };
};

export default useIsAdmin;
