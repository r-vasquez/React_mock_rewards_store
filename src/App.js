import Hero from './components/Hero/Hero'
import ProductSection from './components/ProductSection/ProductSection'
import TopHeader from './components/TopHeader/TopHeader'
import AppProvider from './utils/ContextProvider'

function App() {
  return (
    <AppProvider>
      <TopHeader />
      <Hero />
      <ProductSection />
    </AppProvider>
  )
}

export default App
