import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useApprovedClasses = () => {
  const { data: approvedClasses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['approvedClasses'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/classes/approved');
      return res.data; 
    },
  });

  return [approvedClasses, refetch, loading];
};

export default useApprovedClasses;