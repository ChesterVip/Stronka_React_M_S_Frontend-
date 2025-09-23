import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import router from '@/router'

function App() {
  const { language } = useLanguage()

  useEffect(() => {
    console.log('🚀 Mariusz Sokołowski Website - React.tsx + Vite Router + Advanced Lazy Loading!')
    console.log('🌐 Current language:', language)
    console.log('📱 Network-adaptive loading enabled')
  }, [language])

  return <RouterProvider router={router} />
}

export default App