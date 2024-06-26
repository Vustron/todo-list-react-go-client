import { Todo } from '@/components/todo/todoList';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// get todos query custom hook
export const useGetTodos = () => {
	const query = useQuery<Todo[]>({
		queryKey: ['todos'],
		queryFn: async () => {
			try {
				const { data } = await axios.get(
					`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`
				);

				return data;
			} catch (error: any) {
				console.error(`${error.message}`);
			}
		},
	});

	return query;
};
