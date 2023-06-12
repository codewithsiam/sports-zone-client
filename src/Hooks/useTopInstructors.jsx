import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useTopInstructors = () => {
  const { data: topInstructors = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['topInstructors'],
    queryFn: async () => {
      const res = await axios.get('https://sports-zone-server.vercel.app/Instructors/popular');
      return res.data;
    },
  });

  return [topInstructors, refetch, loading];
};

export default useTopInstructors;
