import { useMemo, useState } from 'react'
import {
  Box,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography
} from '@mui/material'
import { useProducts } from '../../hooks/useProducts'
import { ProductTableRow } from './ProductTableRow'
import type { Product } from '../../types/product'

type Order = 'asc' | 'desc'
type OrderBy = 'id' | 'name' | 'category' | 'price' | 'stock' | 'status'

export const ProductTable = () => {
  const { data, isLoading, isError } = useProducts()

  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<OrderBy>('id')

  const handleSort = (property: OrderBy) => () => {
    if (orderBy === property) {
      setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setOrder('asc')
      setOrderBy(property)
    }
  }

  const sortedItems = useMemo(() => {
    if (!data?.items) return []

    const getValue = (product: Product): string | number => {
      switch (orderBy) {
        case 'id':
          return product.id
        case 'name':
          return product.name
        case 'category':
          return product.category
        case 'price':
          return product.price
        case 'stock':
          return product.stock
        case 'status':
          return product.status
        default:
          return product.id
      }
    }

    return [...data.items].sort((a, b) => {
      const valueA = getValue(a)
      const valueB = getValue(b)

      let comparison = 0

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        comparison = valueA.localeCompare(valueB, 'pt-BR', { sensitivity: 'base' })
      } else {
        comparison = Number(valueA) - Number(valueB)
      }

      return order === 'asc' ? comparison : -comparison
    })
  }, [data?.items, order, orderBy])

  return (
    <TableContainer component={Paper} elevation={1}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sortDirection={orderBy === 'id' ? order : false}>
              <TableSortLabel
                active={orderBy === 'id'}
                direction={orderBy === 'id' ? order : 'asc'}
                onClick={handleSort('id')}
              >
                ID
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'name' ? order : false}>
              <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={handleSort('name')}
              >
                Nome
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'category' ? order : false}>
              <TableSortLabel
                active={orderBy === 'category'}
                direction={orderBy === 'category' ? order : 'asc'}
                onClick={handleSort('category')}
              >
                Categoria
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'price' ? order : false}>
              <TableSortLabel
                active={orderBy === 'price'}
                direction={orderBy === 'price' ? order : 'asc'}
                onClick={handleSort('price')}
              >
                Preço
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'stock' ? order : false}>
              <TableSortLabel
                active={orderBy === 'stock'}
                direction={orderBy === 'stock' ? order : 'asc'}
                onClick={handleSort('stock')}
              >
                Estoque
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'status' ? order : false}>
              <TableSortLabel
                active={orderBy === 'status'}
                direction={orderBy === 'status' ? order : 'asc'}
                onClick={handleSort('status')}
              >
                Status
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading && (
            <>
              {Array.from({ length: 5 }).map((_, rowIndex) => (
                <TableRow key={rowIndex}>
                  {Array.from({ length: 6 }).map((_, cellIndex) => (
                    <TableCell key={cellIndex}>
                      <Skeleton variant="rectangular" height={24} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </>
          )}

          {isError && !isLoading && (
            <TableRow>
              <TableCell colSpan={6}>
                <Box textAlign="center" py={3}>
                  <Typography color="error">
                    Ocorreu um erro ao carregar os produtos.
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          )}

          {!isLoading && !isError && data && data.items.length === 0 && (
            <TableRow>
              <TableCell colSpan={6}>
                <Box textAlign="center" py={3}>
                  <Typography variant="body2" color="text.secondary">
                    Nenhum produto encontrado.
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          )}

          {!isLoading &&
            !isError &&
            sortedItems.map((product) => (
              <ProductTableRow key={product.id} product={product} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}





