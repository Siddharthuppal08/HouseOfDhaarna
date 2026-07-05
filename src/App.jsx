import { useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import CategoryShowcase from './components/CategoryShowcase'
import ProductGrid from './components/ProductGrid'
import BrandStory from './components/BrandStory'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import {
  newArrivals,
  bestSellers,
  allProducts,
  getProductsByCategory,
  catalogMeta,
} from './data/products'

const categorySections = [
  { id: 'shop-plants', title: 'Artificial Plants', category: 'Plants' },
  { id: 'shop-flowers', title: 'Artificial Flowers', category: 'Flowers' },
  { id: 'shop-vases', title: 'Vases', category: 'Vases' },
  { id: 'shop-combos', title: 'Combos', category: 'Combos' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="pb-[calc(5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <Hero />
        <TrustBadges />
        <div id="shop">
          <ProductGrid
            id="new-arrivals"
            title="New Arrivals"
            subtitle="Just Landed"
            products={newArrivals}
            viewAllHref="#all-products"
          />
        </div>
        <CategoryShowcase />
        <ProductGrid
          id="best-sellers"
          title="Best Sellers"
          subtitle="Customer Favorites"
          products={bestSellers}
          viewAllHref="#all-products"
        />
        {categorySections.map((section) => {
          const products = getProductsByCategory(section.category)
          if (products.length === 0) return null

          return (
            <ProductGrid
              key={section.id}
              id={section.id}
              title={section.title}
              subtitle="Collection"
              products={products.slice(0, 8)}
              viewAllHref="#all-products"
            />
          )
        })}
        <ProductGrid
          id="all-products"
          title="All Products"
          subtitle={`${catalogMeta.totalProducts} Items`}
          products={allProducts}
        />
        <BrandStory />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton hidden={menuOpen} />
    </div>
  )
}
