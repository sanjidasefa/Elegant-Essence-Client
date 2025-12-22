import React from 'react';
import { useAuth } from './useAuth';
import useUser from './useUser';
import { useQuery } from '@tanstack/react-query'

const useRoles = () => {
  const {user , loading} = useAuth()
  const axios = useUser()
 const { data: role, isLoading: roleLoading,} = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ['role', user?.email],
    queryFn: async () => {
      const result = await axios(`/user/role/${user?.email}`)
     //console.log(result)
      return result.data.role || 'client'
    },
  })
    return [role, roleLoading]
};

export default useRoles;