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
import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'
import { ProductTableRow } from './ProductTableRow'

type Order = 'asc' | 'desc'
type OrderBy = 'id' | 'name' | 'category' | 'price' | 'stock' | 'status'

export const ProductTable = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { data, isLoading, isError } = useProducts()

  const orderBy = (searchParams.get('orderBy') || 'id') as OrderBy
  const order = (searchParams.get('order') || 'asc') as Order

  const handleSort = (property: OrderBy) => () => {
    const newParams = new URLSearchParams(searchParams)
    
    if (orderBy === property) {
      // Alterna entre asc e desc na mesma coluna
      newParams.set('order', order === 'asc' ? 'desc' : 'asc')
    } else {
      // Nova coluna, começa com asc
      newParams.set('orderBy', property)
      newParams.set('order', 'asc')
    }
    
    // Reseta para a página 1 quando ordenar
    newParams.set('page', '1')
    
    setSearchParams(newParams)
  }

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
            data?.items.map((product) => (
              <ProductTableRow key={product.id} product={product} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}





