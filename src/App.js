import Hero from './components/Hero/Hero'
import ModalAddPoints from './components/Modal/ModalAddPoints'
import Portal from './components/Modal/Portal'
import ProductSection from './components/ProductSection/ProductSection'
import TopHeader from './components/TopHeader/TopHeader'
import AppProvider from './utils/ContextProvider'

function App() {
  return (
    <AppProvider>
      <TopHeader />
      <Hero />
      <ProductSection />
      <Portal>
        <ModalAddPoints />
      </Portal>
    </AppProvider>
  )
}

export default App
