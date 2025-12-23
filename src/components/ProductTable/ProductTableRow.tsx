import {
  TableCell,
  TableRow,
  Tooltip,
  Typography,
  alpha
} from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { Product } from '../../types/product'
import { formatCurrencyBRL } from '../../utils/formatters'

type Props = {
  product: Product
}

export const ProductTableRow = ({ product }: Props) => {
  const [, setSearchParams] = useSearchParams()

  const isInactive = product.status === 'Inativo'

  const handleClick = () => {
    if (isInactive) return

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev)
      params.set('productId', String(product.id))
      return params
    })
  }

  const content = (
    <TableRow
      hover={!isInactive}
      onClick={handleClick}
      sx={(theme) => ({
        cursor: isInactive ? 'default' : 'pointer',
        opacity: isInactive ? 0.5 : 1,
        '&:hover': {
          backgroundColor: !isInactive
            ? alpha(theme.palette.primary.main, 0.05)
            : undefined
        }
      })}
    >
      <TableCell>{product.id}</TableCell>
      <TableCell>
        <Typography variant="body2" noWrap title={product.name}>
          {product.name}
        </Typography>
      </TableCell>
      <TableCell>{product.category}</TableCell>
      <TableCell>{formatCurrencyBRL(product.price)}</TableCell>
      <TableCell>{product.stock}</TableCell>
      <TableCell>
        <Typography
          variant="body2"
          color={product.status === 'Ativo' ? 'success.main' : 'text.secondary'}
          fontWeight={500}
        >
          {product.status}
        </Typography>
      </TableCell>
    </TableRow>
  )

  if (!isInactive) {
    return content
  }

  return (
    <Tooltip title="Produto inativo não é clicável" placement="top-start">
      {content}
    </Tooltip>
  )
}





