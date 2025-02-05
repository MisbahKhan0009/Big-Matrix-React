/* eslint-disable */
import { ShoppingCart } from "lucide-react";
import Banner from "../Shared/Banner";
import ProductCard from "../components/ui/ProductCard";
import Cart from "../components/ui/Cart";
import productsData from "../data/products.json";
import { useCart } from "../context/CartContext";

const Shop = () => {
  const { isCartOpen, setIsCartOpen, cartItems, addToCart } = useCart();

  return (
    <div>
      <Banner bannerText="Shop" bannerBg="/shop-banner.png" bannerIcon={ShoppingCart}>
        <div className="relative">
          <button onClick={() => setIsCartOpen(true)} className="fixed top-4 right-4 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
            <ShoppingCart className="h-6 w-6" />
            {cartItems.length > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">{cartItems.length}</span>}
          </button>
        </div>
      </Banner>

      <Cart />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
