import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts } from '../mocks/products'
import { useDebounce } from './useDebounce'
import type { PaginatedResponse, Product } from '../types/product'

export const useProducts = () => {
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const size = Number(searchParams.get('size')) || 10
  const search = searchParams.get('search') || ''

  const debouncedSearch = useDebounce(search, 500)

  return useQuery<PaginatedResponse<Product>>({
    queryKey: ['products', page, size, debouncedSearch],
    queryFn: () => fetchProducts(page, size, debouncedSearch),
    placeholderData: keepPreviousData
  })
}





