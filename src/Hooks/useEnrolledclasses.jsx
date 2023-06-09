
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useEnrolledClasses = () => {
    const {user} = useContext(AuthContext);
  const { data: enrolledClasses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['enrolledClasses'],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/payments/enrolled/student?email=${user?.email}`);
      return res.data; 
    },
  });

  return [enrolledClasses, refetch, loading];
};

export default useEnrolledClasses;
