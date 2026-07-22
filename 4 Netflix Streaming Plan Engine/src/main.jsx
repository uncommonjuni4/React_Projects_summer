import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StreamingEngine } from './StreamingEngine'






createRoot(document.getElementById('root')).render(
  <StrictMode>
 <StreamingEngine />
  </StrictMode>,
)
