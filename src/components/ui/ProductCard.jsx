/* eslint-disable */
import { ShoppingCart, Plus, Minus, Info, Trash2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import ProductDetailsModal from "./ProductDetailsModal";

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { cartItems, addToCart, removeFromCart, decreaseQuantity } = useCart();

  const itemInCart = cartItems.find((item) => item.id === product.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }} className="bg-white rounded-xl overflow-hidden shadow-lg relative group min-h-[400px]">
        {/* Category Badge */}
        <div className="absolute top-2 z-20 right-2 bg-primary backdrop-blur-lg text-white px-3 py-1 rounded-full text-sm border border-primary/30 shadow-md group-hover:scale-105 transition-transform">{product.category}</div>

        {/* Details Button */}
        <button onClick={() => setShowDetails(true)} className="absolute top-2 left-2 z-20 flex items-center  text-primary bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-1 group/btn overflow-hidden transition-all duration-300 hover:pr-4 border border-primary/30 shadow-md group-hover:scale-105">
          <Info size={18} className="shrink-0 hover:mr-2" />
          <span className="text-sm whitespace-nowrap opacity-0 w-0 group-hover/btn:w-auto hover:ml-2 group-hover/btn:opacity-100 transition-all duration-300">See Details</span>
        </button>

        <div className="relative h-48">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-4 h-full absoulate">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>

            {product.category === "Book" && (
              <div className="text-sm text-gray-600">
                <p>By {product.author}</p>
                <p>{product.edition}</p>
              </div>
            )}

            {product.category === "Course" && (
              <div className="text-sm text-gray-600">
                <p>Duration: {product.duration}</p>
                <p>Level: {product.level}</p>
              </div>
            )}
          </div>

          <div className="absolute bottom-3  left-0 right-0 px-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xl font-semibold text-primary">{product.price}৳</span>
              <div className="flex items-center gap-2">
                {quantity > 0 ? (
                  <>
                    <div className="rounded-full bg-gray-100 hover:bg-gray-200">
                      <button onClick={() => decreaseQuantity(product.id)} className="p-2 ">
                        <Minus size={14} />
                      </button>
                      <span className="w-8 px-3 text-center font-medium">{quantity}</span>
                      <button onClick={() => addToCart(product)} className="p-2 ">
                        <Plus size={14} />
                      </button>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button onClick={() => removeFromCart(product.id)} className="p-1.5 rounded-full text-red-500 hover:bg-red-50">
                            <Trash2 size={14} />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-white">Remove all</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </>
                ) : (
                  <button onClick={() => addToCart(product)} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-white hover:bg-primary/90">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Details Modal */}
      <ProductDetailsModal product={product} isOpen={showDetails} onClose={() => setShowDetails(false)} />
    </>
  );
};

export default ProductCard;
