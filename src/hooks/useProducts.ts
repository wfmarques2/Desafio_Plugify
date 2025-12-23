import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts } from '../mocks/products'
import { useDebounce } from './useDebounce'
import type { PaginatedResponse, Product } from '../types/product'

type OrderBy = 'id' | 'name' | 'category' | 'price' | 'stock' | 'status'
type Order = 'asc' | 'desc'

export const useProducts = () => {
  const [searchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const size = Number(searchParams.get('size')) || 10
  const search = searchParams.get('search') || ''
  const orderBy = (searchParams.get('orderBy') || 'id') as OrderBy
  const order = (searchParams.get('order') || 'asc') as Order

  const debouncedSearch = useDebounce(search, 500)

  return useQuery<PaginatedResponse<Product>>({
    queryKey: ['products', page, size, debouncedSearch, orderBy, order],
    queryFn: () => fetchProducts(page, size, debouncedSearch, orderBy, order),
    placeholderData: keepPreviousData
  })
}





