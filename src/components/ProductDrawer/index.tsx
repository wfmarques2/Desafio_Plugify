import { Close } from '@mui/icons-material'
import { Box, Drawer, IconButton, Typography } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'
import { ProductDetails } from './ProductDetails'

export const ProductDrawer = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const productId = searchParams.get('productId')
  const { data } = useProducts()

  const product = data?.items.find((p) => p.id === Number(productId))

  const handleClose = () => {
    const newParams = new URLSearchParams(searchParams)
    newParams.delete('productId')
    setSearchParams(newParams)
  }

  return (
    <Drawer
      anchor="right"
      open={Boolean(productId)}
      onClose={handleClose}
      PaperProps={{
        sx: { width: { xs: '100%', sm: 480 }, p: 3 }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3
        }}
      >
        <Typography variant="h6">Detalhes do Produto</Typography>
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </Box>
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <Typography variant="body2" color="text.secondary">
          Produto não encontrado.
        </Typography>
      )}
    </Drawer>
  )
}





