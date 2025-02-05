/* eslint-disable */
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useState } from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    const newQuantity = parseInt(value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font">৳{product.price}</span>
            <div className="flex items-center gap-2">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">
                <Minus className="h-4 w-4" />
              </button>
              <input type="number" min="1" value={quantity} onChange={(e) => handleQuantityChange(e.target.value)} className="w-16 text-center border rounded p-1" />
              <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              onAddToCart({ ...product, quantity });
              setQuantity(1); // Reset quantity after adding to cart
            }}
            className="w-11/12 mx-auto bg-primary text-white px-3 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
