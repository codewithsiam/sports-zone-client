import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useTopClasses = () => {
  const { data: topClasses = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['topClasses'],
    queryFn: async () => {
      const res = await axios.get('https://sports-zone-server.vercel.app/classes/popular');
      return res.data; 
    },
  });

  return [topClasses, refetch, loading];
};

export default useTopClasses;
