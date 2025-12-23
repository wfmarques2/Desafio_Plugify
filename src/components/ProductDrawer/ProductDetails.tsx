import { Box, Divider, Stack, Typography } from '@mui/material'
import { Product } from '../../types/product'
import { formatCurrencyBRL, formatDateTime } from '../../utils/formatters'

type Props = {
  product: Product
}

export const ProductDetails = ({ product }: Props) => {
  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          ID do Produto
        </Typography>
        <Typography variant="body1">{product.id}</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Nome Completo
        </Typography>
        <Typography variant="body1">{product.name}</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Descrição
        </Typography>
        <Typography variant="body1">{product.description}</Typography>
      </Box>

      <Divider />

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Categoria
        </Typography>
        <Typography variant="body1">{product.category}</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Preço
        </Typography>
        <Typography variant="body1">
          {formatCurrencyBRL(product.price)}
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Quantidade em Estoque
        </Typography>
        <Typography variant="body1">{product.stock}</Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Status
        </Typography>
        <Typography
          variant="body1"
          color={product.status === 'Ativo' ? 'success.main' : 'text.secondary'}
          fontWeight={500}
        >
          {product.status}
        </Typography>
      </Box>

      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          Data de Criação
        </Typography>
        <Typography variant="body1">
          {formatDateTime(product.created_at)}
        </Typography>
      </Box>
    </Stack>
  )
}





