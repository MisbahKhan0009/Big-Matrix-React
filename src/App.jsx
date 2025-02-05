// @ts-nocheck

import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { router } from "./Routes/Routes";
import { TooltipProvider } from "./components/ui/tooltip";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <TooltipProvider>
        <RouterProvider router={router} />
        <Toaster />
      </TooltipProvider>
    </CartProvider>
  );
}

export default App;
