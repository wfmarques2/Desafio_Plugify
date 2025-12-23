import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { InputAdornment, TextField } from '@mui/material'
import { Search } from '@mui/icons-material'

export const ProductSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = useState(searchParams.get('search') || '')

  useEffect(() => {
    const currentSearch = searchParams.get('search') || ''
    if (currentSearch !== value) {
      setValue(currentSearch)
    }
  }, [searchParams, value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setValue(newValue)

    const newParams = new URLSearchParams(searchParams)
    if (newValue) {
      newParams.set('search', newValue)
      newParams.set('page', '1')
    } else {
      newParams.delete('search')
      newParams.set('page', '1')
    }
    setSearchParams(newParams)
  }

  return (
    <TextField
      fullWidth
      placeholder="Buscar por nome ou categoria..."
      value={value}
      onChange={handleChange}
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        )
      }}
    />
  )
}





