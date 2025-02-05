/* eslint-disable */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, totalAmount } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    toast.success("Order placed successfully");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" required />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
              <textarea placeholder="Address" className="w-full p-2 border rounded" required />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="City" className="w-full p-2 border rounded" required />
                <input type="text" placeholder="Country" className="w-full p-2 border rounded" required />
              </div>

              <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
              <input type="text" placeholder="Card Number" className="w-full p-2 border rounded" required />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className="w-full p-2 border rounded" required />
                <input type="text" placeholder="CVV" className="w-full p-2 border rounded" required />
              </div>

              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Place Order
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between py-2">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
