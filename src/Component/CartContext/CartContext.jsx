import { createContext, useContext, useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("card")) || [];
    setCartItems(stored);
  }, []);

  // Save helper
  const saveToStorage = (items) => {
    localStorage.setItem("card", JSON.stringify(items));
    setCartItems(items);
  };

  // Add to cart
  const addToCart = (item) => {
    const stored = JSON.parse(localStorage.getItem("card")) || [];

    const index = stored.findIndex(
      (p) =>
        p._id === item._id &&
        (p.selectedVariant?.id || p.variants[0]._id) ===
          (item.selectedVariant?.id || item.variants[0]._id)
    );

    if (index !== -1) {
      stored[index].quantity += 1;
    } else {
      stored.push({ ...item, quantity: 1 });
    }

    const audio = new Audio("/public/images/sound.wav");
    audio.play();
    saveToStorage(stored);

    toast.success("কার্টে যুক্ত হয়েছে।", {
      position: "top-center",
      autoClose: 2000,
      theme: "light",
      transition: Slide,
    });
  };

  // Update item (quantity / variant change)
  const updateCart = (updatedItem) => {
    const stored = JSON.parse(localStorage.getItem("card")) || [];
    const index = stored.findIndex((p) => p._id === updatedItem._id);

    if (index !== -1) {
      stored[index] = updatedItem;
    }
    saveToStorage(stored);
  };

  // Remove item
  const removeItem = (item) => {
    const stored = JSON.parse(localStorage.getItem("card")) || [];
    const filtered = stored.filter((i) => i._id !== item._id);

    Swal.fire({
      title: "তুমি কি নিশ্চিত?",
      text: "এই কাজটি করার পর আর ফিরে যাওয়া যাবে না!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "হ্যাঁ, মুছে ফেলো!",
      cancelButtonText: "বাতিল",
    }).then((result) => {
      if (result.isConfirmed) {
        saveToStorage(filtered);

        Swal.fire({
          title: "মুছে ফেলা হয়েছে!",
          text: "তোমার আইটেমটি সফলভাবে মুছে ফেলা হয়েছে।",
          icon: "success",
        });
      }
    });
  };
  // Remove item
  const removeAllItem = () => {
    localStorage.removeItem("card");
    saveToStorage([]);
  };

  // Total count (quantity ভিত্তিক)
  const totalCardCount = cartItems?.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeAllItem,
        removeItem,
        updateCart, // ✅ নতুন ফাংশন
        totalCardCount: totalCardCount > 0 ? totalCardCount : 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
