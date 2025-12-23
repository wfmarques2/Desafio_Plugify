import { PaginatedResponse, Product } from '../types/product'

export const productsMock: Product[] = [
  {
    id: 1,
    name: 'Notebook Dell Inspiron 15',
    description:
      'Notebook Dell Inspiron 15 3000 com processador Intel Core i5, 8GB RAM, 256GB SSD',
    category: 'Eletrônicos',
    price: 3299.99,
    stock: 15,
    status: 'Ativo',
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: 2,
    name: 'Mouse Logitech MX Master 3',
    description: 'Mouse sem fio Logitech MX Master 3 para produtividade',
    category: 'Periféricos',
    price: 599.99,
    stock: 42,
    status: 'Ativo',
    created_at: '2024-01-20T14:15:00Z'
  },
  {
    id: 3,
    name: 'Teclado Mecânico Keychron K2',
    description:
      'Teclado mecânico sem fio Keychron K2 com switches Gateron Brown',
    category: 'Periféricos',
    price: 899.99,
    stock: 0,
    status: 'Inativo',
    created_at: '2024-01-10T09:00:00Z'
  },
  // Produtos adicionais gerados manualmente para completar pelo menos 50 itens
  {
    id: 4,
    name: 'Monitor LG UltraWide 29"',
    description: 'Monitor LG UltraWide 29 polegadas para multitarefa',
    category: 'Eletrônicos',
    price: 1299.9,
    stock: 25,
    status: 'Ativo',
    created_at: '2024-02-01T11:00:00Z'
  },
  {
    id: 5,
    name: 'Headset HyperX Cloud II',
    description: 'Headset gamer HyperX Cloud II com som surround 7.1',
    category: 'Periféricos',
    price: 499.9,
    stock: 30,
    status: 'Ativo',
    created_at: '2024-02-05T13:20:00Z'
  },
  {
    id: 6,
    name: 'Cadeira Gamer DXRacer',
    description: 'Cadeira gamer ergonômica DXRacer com ajustes completos',
    category: 'Móveis',
    price: 1599.9,
    stock: 5,
    status: 'Ativo',
    created_at: '2024-02-10T15:45:00Z'
  },
  {
    id: 7,
    name: 'Webcam Logitech C920',
    description: 'Webcam Full HD Logitech C920 para videoconferências',
    category: 'Periféricos',
    price: 399.9,
    stock: 18,
    status: 'Ativo',
    created_at: '2024-02-12T09:30:00Z'
  },
  {
    id: 8,
    name: 'SSD Samsung 1TB',
    description: 'SSD Samsung 1TB NVMe para alto desempenho',
    category: 'Armazenamento',
    price: 799.9,
    stock: 12,
    status: 'Ativo',
    created_at: '2024-02-15T10:10:00Z'
  },
  {
    id: 9,
    name: 'HD Externo Seagate 2TB',
    description: 'HD externo portátil Seagate 2TB USB 3.0',
    category: 'Armazenamento',
    price: 499.9,
    stock: 20,
    status: 'Ativo',
    created_at: '2024-02-18T08:50:00Z'
  },
  {
    id: 10,
    name: 'Placa de Vídeo NVIDIA RTX 3060',
    description: 'Placa de vídeo NVIDIA GeForce RTX 3060 12GB',
    category: 'Hardware',
    price: 2599.9,
    stock: 7,
    status: 'Ativo',
    created_at: '2024-02-20T14:40:00Z'
  },
  {
    id: 11,
    name: 'Processador AMD Ryzen 5 5600X',
    description: 'Processador AMD Ryzen 5 5600X 6-core 12-thread',
    category: 'Hardware',
    price: 1199.9,
    stock: 10,
    status: 'Ativo',
    created_at: '2024-02-22T16:00:00Z'
  },
  {
    id: 12,
    name: 'Memória RAM Corsair 16GB',
    description: 'Memória RAM Corsair Vengeance LPX 16GB (2x8GB) DDR4',
    category: 'Hardware',
    price: 599.9,
    stock: 34,
    status: 'Ativo',
    created_at: '2024-02-25T11:25:00Z'
  },
  {
    id: 13,
    name: 'Fonte Corsair 650W 80 Plus Bronze',
    description: 'Fonte de alimentação Corsair 650W 80 Plus Bronze',
    category: 'Hardware',
    price: 449.9,
    stock: 22,
    status: 'Ativo',
    created_at: '2024-02-28T13:15:00Z'
  },
  {
    id: 14,
    name: 'Gabinete NZXT H510',
    description: 'Gabinete NZXT H510 Mid Tower com painel de vidro temperado',
    category: 'Hardware',
    price: 699.9,
    stock: 9,
    status: 'Ativo',
    created_at: '2024-03-01T09:10:00Z'
  },
  {
    id: 15,
    name: 'Smartphone Samsung Galaxy S23',
    description: 'Smartphone Samsung Galaxy S23 256GB',
    category: 'Eletrônicos',
    price: 4899.9,
    stock: 11,
    status: 'Ativo',
    created_at: '2024-03-03T10:05:00Z'
  },
  {
    id: 16,
    name: 'iPhone 15 Pro',
    description: 'Apple iPhone 15 Pro 256GB',
    category: 'Eletrônicos',
    price: 8499.9,
    stock: 6,
    status: 'Ativo',
    created_at: '2024-03-05T12:20:00Z'
  },
  {
    id: 17,
    name: 'Tablet iPad 10ª Geração',
    description: 'Apple iPad 10ª geração 64GB Wi-Fi',
    category: 'Eletrônicos',
    price: 3499.9,
    stock: 14,
    status: 'Ativo',
    created_at: '2024-03-07T13:35:00Z'
  },
  {
    id: 18,
    name: 'Kindle Paperwhite',
    description: 'Leitor de livros digitais Kindle Paperwhite 8GB',
    category: 'Eletrônicos',
    price: 649.9,
    stock: 19,
    status: 'Ativo',
    created_at: '2024-03-09T15:10:00Z'
  },
  {
    id: 19,
    name: 'Roteador TP-Link Archer AX20',
    description: 'Roteador Wi-Fi 6 TP-Link Archer AX20',
    category: 'Redes',
    price: 499.9,
    stock: 16,
    status: 'Ativo',
    created_at: '2024-03-11T08:45:00Z'
  },
  {
    id: 20,
    name: 'Switch TP-Link 8 Portas',
    description: 'Switch Ethernet TP-Link 8 portas Gigabit',
    category: 'Redes',
    price: 259.9,
    stock: 27,
    status: 'Ativo',
    created_at: '2024-03-13T11:30:00Z'
  },
  {
    id: 21,
    name: 'Impressora HP DeskJet',
    description: 'Impressora multifuncional HP DeskJet',
    category: 'Periféricos',
    price: 399.9,
    stock: 8,
    status: 'Ativo',
    created_at: '2024-03-15T10:10:00Z'
  },
  {
    id: 22,
    name: 'Scanner Epson Perfection',
    description: 'Scanner de mesa Epson Perfection',
    category: 'Periféricos',
    price: 699.9,
    stock: 4,
    status: 'Inativo',
    created_at: '2024-03-17T09:20:00Z'
  },
  {
    id: 23,
    name: 'Pen Drive Sandisk 64GB',
    description: 'Pen drive Sandisk 64GB USB 3.0',
    category: 'Armazenamento',
    price: 79.9,
    stock: 60,
    status: 'Ativo',
    created_at: '2024-03-19T14:00:00Z'
  },
  {
    id: 24,
    name: 'Cartão de Memória 128GB',
    description: 'Cartão de memória microSD 128GB Classe 10',
    category: 'Armazenamento',
    price: 129.9,
    stock: 50,
    status: 'Ativo',
    created_at: '2024-03-21T16:25:00Z'
  },
  {
    id: 25,
    name: 'Hub USB-C 7 em 1',
    description: 'Hub USB-C com 7 portas para notebooks',
    category: 'Periféricos',
    price: 229.9,
    stock: 23,
    status: 'Ativo',
    created_at: '2024-03-23T10:40:00Z'
  },
  {
    id: 26,
    name: 'Carregador GaN 65W',
    description: 'Carregador rápido GaN 65W com múltiplas portas',
    category: 'Acessórios',
    price: 199.9,
    stock: 35,
    status: 'Ativo',
    created_at: '2024-03-25T12:10:00Z'
  },
  {
    id: 27,
    name: 'Cabo HDMI 2.1 2m',
    description: 'Cabo HDMI 2.1 de 2 metros 8K',
    category: 'Acessórios',
    price: 59.9,
    stock: 80,
    status: 'Ativo',
    created_at: '2024-03-27T09:55:00Z'
  },
  {
    id: 28,
    name: 'Cabo DisplayPort 1.4 1.5m',
    description: 'Cabo DisplayPort 1.4 de 1.5 metros',
    category: 'Acessórios',
    price: 69.9,
    stock: 70,
    status: 'Ativo',
    created_at: '2024-03-29T11:45:00Z'
  },
  {
    id: 29,
    name: 'Adaptador USB-C para Ethernet',
    description: 'Adaptador USB-C para Ethernet Gigabit',
    category: 'Acessórios',
    price: 119.9,
    stock: 28,
    status: 'Ativo',
    created_at: '2024-03-31T15:05:00Z'
  },
  {
    id: 30,
    name: 'Suporte para Notebook',
    description: 'Suporte ergonômico ajustável para notebook',
    category: 'Móveis',
    price: 149.9,
    stock: 40,
    status: 'Ativo',
    created_at: '2024-04-02T13:30:00Z'
  },
  {
    id: 31,
    name: 'Mouse Pad Gamer XXL',
    description: 'Mouse pad gamer tamanho XXL com iluminação RGB',
    category: 'Periféricos',
    price: 159.9,
    stock: 33,
    status: 'Ativo',
    created_at: '2024-04-04T10:15:00Z'
  },
  {
    id: 32,
    name: 'Controle Xbox Wireless',
    description: 'Controle sem fio Xbox compatível com PC',
    category: 'Periféricos',
    price: 399.9,
    stock: 13,
    status: 'Ativo',
    created_at: '2024-04-06T11:55:00Z'
  },
  {
    id: 33,
    name: 'Volante Logitech G29',
    description: 'Volante Logitech G29 para simuladores de corrida',
    category: 'Periféricos',
    price: 2399.9,
    stock: 3,
    status: 'Ativo',
    created_at: '2024-04-08T09:40:00Z'
  },
  {
    id: 34,
    name: 'Microfone Condensador USB',
    description: 'Microfone condensador USB para streaming',
    category: 'Periféricos',
    price: 349.9,
    stock: 21,
    status: 'Ativo',
    created_at: '2024-04-10T14:20:00Z'
  },
  {
    id: 35,
    name: 'Lâmpada Inteligente Wi-Fi',
    description: 'Lâmpada inteligente Wi-Fi compatível com assistentes virtuais',
    category: 'Casa Inteligente',
    price: 99.9,
    stock: 45,
    status: 'Ativo',
    created_at: '2024-04-12T16:35:00Z'
  },
  {
    id: 36,
    name: 'Tomada Inteligente Wi-Fi',
    description: 'Tomada inteligente Wi-Fi com monitoramento de energia',
    category: 'Casa Inteligente',
    price: 89.9,
    stock: 38,
    status: 'Ativo',
    created_at: '2024-04-14T09:25:00Z'
  },
  {
    id: 37,
    name: 'Câmera de Segurança Wi-Fi',
    description: 'Câmera de segurança Wi-Fi com visão noturna',
    category: 'Casa Inteligente',
    price: 299.9,
    stock: 17,
    status: 'Ativo',
    created_at: '2024-04-16T13:00:00Z'
  },
  {
    id: 38,
    name: 'Soundbar 2.1 Samsung',
    description: 'Soundbar Samsung 2.1 canais com subwoofer',
    category: 'Áudio',
    price: 1099.9,
    stock: 9,
    status: 'Ativo',
    created_at: '2024-04-18T15:10:00Z'
  },
  {
    id: 39,
    name: 'Caixa de Som Bluetooth JBL',
    description: 'Caixa de som portátil Bluetooth JBL',
    category: 'Áudio',
    price: 499.9,
    stock: 26,
    status: 'Ativo',
    created_at: '2024-04-20T11:05:00Z'
  },
  {
    id: 40,
    name: 'Fone Bluetooth True Wireless',
    description: 'Fone de ouvido Bluetooth true wireless com cancelamento de ruído',
    category: 'Áudio',
    price: 699.9,
    stock: 32,
    status: 'Ativo',
    created_at: '2024-04-22T10:50:00Z'
  },
  {
    id: 41,
    name: 'Smartwatch Garmin',
    description: 'Smartwatch Garmin com GPS e monitoramento cardíaco',
    category: 'Wearables',
    price: 1799.9,
    stock: 8,
    status: 'Ativo',
    created_at: '2024-04-24T09:15:00Z'
  },
  {
    id: 42,
    name: 'Smartband Xiaomi',
    description: 'Smartband Xiaomi para monitoramento de atividades físicas',
    category: 'Wearables',
    price: 199.9,
    stock: 37,
    status: 'Ativo',
    created_at: '2024-04-26T14:45:00Z'
  },
  {
    id: 43,
    name: 'Câmera DSLR Canon',
    description: 'Câmera DSLR Canon para fotografia profissional',
    category: 'Câmeras',
    price: 3899.9,
    stock: 4,
    status: 'Ativo',
    created_at: '2024-04-28T12:30:00Z'
  },
  {
    id: 44,
    name: 'Câmera Mirrorless Sony',
    description: 'Câmera mirrorless Sony com lente intercambiável',
    category: 'Câmeras',
    price: 5299.9,
    stock: 3,
    status: 'Ativo',
    created_at: '2024-04-30T16:20:00Z'
  },
  {
    id: 45,
    name: 'Tripé Fotográfico Profissional',
    description: 'Tripé fotográfico profissional de alumínio',
    category: 'Acessórios',
    price: 279.9,
    stock: 18,
    status: 'Ativo',
    created_at: '2024-05-02T11:40:00Z'
  },
  {
    id: 46,
    name: 'Ring Light LED',
    description: 'Ring light LED com suporte para celular',
    category: 'Acessórios',
    price: 189.9,
    stock: 24,
    status: 'Ativo',
    created_at: '2024-05-04T10:25:00Z'
  },
  {
    id: 47,
    name: 'Notebook Gamer Acer Nitro 5',
    description: 'Notebook gamer Acer Nitro 5 com RTX 4050',
    category: 'Eletrônicos',
    price: 6299.9,
    stock: 6,
    status: 'Ativo',
    created_at: '2024-05-06T12:55:00Z'
  },
  {
    id: 48,
    name: 'Notebook Lenovo Ideapad 3',
    description: 'Notebook Lenovo Ideapad 3 para uso diário',
    category: 'Eletrônicos',
    price: 2799.9,
    stock: 20,
    status: 'Ativo',
    created_at: '2024-05-08T09:35:00Z'
  },
  {
    id: 49,
    name: 'Teclado Low Profile Logitech',
    description: 'Teclado mecânico low profile Logitech',
    category: 'Periféricos',
    price: 699.9,
    stock: 12,
    status: 'Inativo',
    created_at: '2024-05-10T14:05:00Z'
  },
  {
    id: 50,
    name: 'Mouse Vertical Ergonômico',
    description: 'Mouse vertical ergonômico para reduzir esforço repetitivo',
    category: 'Periféricos',
    price: 189.9,
    stock: 29,
    status: 'Ativo',
    created_at: '2024-05-12T16:15:00Z'
  }
]

type OrderBy = 'id' | 'name' | 'category' | 'price' | 'stock' | 'status'
type Order = 'asc' | 'desc'

export const fetchProducts = async (
  page: number = 1,
  size: number = 10,
  search: string = '',
  orderBy: OrderBy = 'id',
  order: Order = 'asc'
): Promise<PaginatedResponse<Product>> => {
  const normalizedSearch = search.trim().toLowerCase()

  let filtered = productsMock

  if (normalizedSearch) {
    filtered = productsMock.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(normalizedSearch)
      const categoryMatch = product.category
        .toLowerCase()
        .includes(normalizedSearch)
      return nameMatch || categoryMatch
    })
  }

  // Função auxiliar para obter o valor de ordenação
  const getSortValue = (product: Product): string | number => {
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

  // Ordena TODOS os produtos filtrados antes de paginar
  const sorted = [...filtered].sort((a, b) => {
    const valueA = getSortValue(a)
    const valueB = getSortValue(b)

    let comparison = 0

    if (typeof valueA === 'string' && typeof valueB === 'string') {
      comparison = valueA.localeCompare(valueB, 'pt-BR', { sensitivity: 'base' })
    } else {
      comparison = Number(valueA) - Number(valueB)
    }

    return order === 'asc' ? comparison : -comparison
  })

  const total = sorted.length
  const pages = Math.max(1, Math.ceil(total / size))
  const currentPage = Math.min(Math.max(page, 1), pages)

  const startIndex = (currentPage - 1) * size
  const endIndex = startIndex + size

  const items = sorted.slice(startIndex, endIndex)

  // Simula atraso de rede
  await new Promise((resolve) => setTimeout(resolve, 400))

  return {
    items,
    page: currentPage,
    pages,
    size,
    total
  }
}





