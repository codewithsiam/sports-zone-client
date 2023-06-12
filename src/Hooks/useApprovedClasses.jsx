import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useApprovedClasses = () => {
  const { data: approvedClasses = [], isLoading: loading, refetch: approvedClassRefetch } = useQuery({
    queryKey: ['approvedClasses'],
    queryFn: async () => {
      const res = await axios.get('https://sports-zone-server.vercel.app/classes/approved');
      return res.data; 
    },
  });

  return [approvedClasses, approvedClassRefetch, loading];
};

export default useApprovedClasses;
