
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const usePaymentHistory = () => {
    const {user} = useContext(AuthContext);
  const { data: paymentsHistory = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['paymentsHistory'],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/payments/history?email=${user?.email}`);
      return res.data; 
    },
  });

  return [paymentsHistory, refetch, loading];
};

export default usePaymentHistory;
