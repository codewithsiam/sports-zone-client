import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useAllClass = () => {
  const { data: allClass = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['allClass'],
    queryFn: async () => {
      const res = await axios.get('https://sports-zone-server.vercel.app/classes/approved');
      return res.data; 
    },
  });

  return [allClass, refetch, loading];
};

export default useAllClass;
