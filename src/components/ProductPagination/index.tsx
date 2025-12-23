import { Box, TablePagination, Typography } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'

export const ProductPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { data } = useProducts()

  const pageFromUrl = Number(searchParams.get('page')) || 1
  const sizeFromUrl = Number(searchParams.get('size')) || 10

  const pageIndex = pageFromUrl - 1
  const rowsPerPage = sizeFromUrl

  const total = data?.total ?? 0

  const handleChangePage = (_: unknown, newPageIndex: number) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set('page', String(newPageIndex + 1))
    setSearchParams(newParams)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newSize = Number(event.target.value)
    const newParams = new URLSearchParams(searchParams)
    newParams.set('size', String(newSize))
    newParams.set('page', '1')
    setSearchParams(newParams)
  }

  const from = total === 0 ? 0 : pageFromUrl * rowsPerPage - rowsPerPage + 1
  const to = Math.min(pageFromUrl * rowsPerPage, total)
  const pages = data?.pages ?? 1

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={2}
      flexWrap="wrap"
      gap={2}
    >
      <Typography variant="body2" color="text.secondary">
        {total === 0
          ? 'Nenhum resultado'
          : `${from}-${to} de ${total} • Página ${pageFromUrl} de ${pages}`}
      </Typography>
      <TablePagination
        component="div"
        count={total}
        page={pageIndex}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[10, 20, 50]}
        labelRowsPerPage="Itens por página"
      />
    </Box>
  )
}





