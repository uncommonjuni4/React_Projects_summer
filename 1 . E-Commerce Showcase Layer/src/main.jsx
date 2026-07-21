import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProductCard } from './ProductCard'



createRoot(document.getElementById('root')).render(
  <StrictMode>

  <ProductCard/>
  </StrictMode>,
)
