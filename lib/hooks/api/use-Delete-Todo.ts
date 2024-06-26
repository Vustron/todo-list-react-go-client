import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteTodo = (_id?: string) => {
	const queryClient = useQueryClient();

	const mutation = useMutation<ResponseType, Error>({
		mutationFn: async () => {
			const { data } = await axios.delete(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${_id}`,
				{
					data: {
						_id,
					},
				}
			);
			return data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['todos'] });
			queryClient.invalidateQueries({ queryKey: ['todos', { _id }] });
		},
		onError: (error: any) => {
			console.log(error.message);
		},
	});

	return mutation;
};
