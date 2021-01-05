import './App.css'
import Hero from './components/Hero/Hero'
import TopHeader from './components/TopHeader/TopHeader'

function App() {
  return (
    <>
      <TopHeader />
      <Hero />
      <section className='container'>
        <hgroup>
          <div className='filter-grid'>
            <ul className='filter-area'>
              <li>16 of 32 Products</li>
              <li className='filter-divider'></li>
              <li>Sort by:</li>
              <li>
                <a href='/' role='button'>
                  Most Recent
                </a>
              </li>
              <li>
                <a href='/' role='button'>
                  Lowest Price
                </a>
              </li>
              <li>
                <a href='/' role='button'>
                  Highest Price
                </a>
              </li>
            </ul>
            <button type='button' className='btn page-changer'></button>
          </div>
        </hgroup>
        <div className='horizontal-divider'></div>
        <article className='card-grid'>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
          <div className='card'>hola</div>
        </article>
        <div className='filter-grid'>
          <ul className='foot filter-area'>
            <li>16 of 32 Products</li>
          </ul>
          <button type='button' className='btn page-changer'></button>
        </div>
        <div className='horizontal-divider'></div>
      </section>
    </>
  )
}

export default App
