import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import { ProductDrawer } from '../../components/ProductDrawer'
import { ProductPagination } from '../../components/ProductPagination'
import { ProductSearch } from '../../components/ProductSearch'
import { ProductTable } from '../../components/ProductTable'

export const ProductsPage = () => {
  return (
    <Box py={4}>
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Produtos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Listagem de produtos com busca, paginação e detalhes.
            </Typography>
          </Box>

          <Paper sx={{ p: 2 }}>
            <ProductSearch />
          </Paper>

          <ProductTable />

          <ProductPagination />
        </Stack>
      </Container>

      <ProductDrawer />
    </Box>
  )
}





