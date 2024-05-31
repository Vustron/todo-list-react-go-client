import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

type CreatePayload = {
	body: string;
};

export const useCreateTodo = () => {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: async (values: CreatePayload) => {
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_BASE_URL}/api/todos`,
				values
			);
			return data;
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['todos'] });
		},
		onError: (error: any) => {
			console.error(`${error.message}`);
		},
	});

	return mutation;
};
