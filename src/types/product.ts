export type ProductStatus = 'Ativo' | 'Inativo'

export type Product = {
  id: number
  name: string
  description: string
  category: string
  price: number
  stock: number
  status: ProductStatus
  created_at: string // ISO 8601
}

export type PaginatedResponse<T> = {
  items: T[]
  page: number
  pages: number
  size: number
  total: number
}





