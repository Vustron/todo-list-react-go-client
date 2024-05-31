import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

type UpdatePayload = {
	completed: boolean;
};

// get todos query custom hook
export const useUpdateTodo = (_id?: string) => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (values: UpdatePayload) => {
			const { data } = await axios.patch(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos/${_id}`,
				values
			);
			return data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['todos'] });
			queryClient.invalidateQueries({ queryKey: ['todos', { _id }] });
		},
		onError: () => {},
	});

	return mutation;
};
