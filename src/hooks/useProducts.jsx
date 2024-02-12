import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProducts as fetchProduts, addNewProduct } from '../api/firebase';

export default function useProducts() {
    const queryClient = useQueryClient();

    const productsQuery = useQuery(['products'], fetchProduts, { staleTime: 1000 * 60 });

    const addProduct = useMutation(
        ({ product, urls }) => addNewProduct(product, urls), 
        {
            onSuccess: () => queryClient.invalidateQueries(['products']),
        }
    );
    return {productsQuery, addProduct};
}

