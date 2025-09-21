// // CartContext.js
// import { createContext, useContext, useEffect, useState } from "react";
// import { Slide, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("card")) || [];
//     setCartItems(stored);
//   }, [setCartItems]);

//   const addToCart = (item) => {
//     const stored = JSON.parse(localStorage.getItem("card")) || [];
//     const index = stored.findIndex((p) => p.id === item.id);

//     if (index !== -1) {
//       stored[index].quantity += 1;
//     } else {
//       stored.push({ ...item, quantity: 1 });
//     }

//     const audio = new Audio("/public/images/sound.wav");
//     audio.play();
//     localStorage.setItem("card", JSON.stringify(stored));
//     setCartItems(stored);
//     toast.success("কার্টে যুক্ত হয়েছে।", {
//       position: "top-center",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       transition: Slide,
//     });
//   };

//   const removeItem = (item) => {
//     const stored = JSON.parse(localStorage.getItem("card")) || [];
//     const index = stored.filter((i) => i.id !== item.id);

//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.setItem("card", JSON.stringify(index));
//         setCartItems(index);

//         Swal.fire({
//           title: "Deleted!",
//           text: "Your file has been deleted.",
//           icon: "success",
//         });
//       }
//     });
//   };

//   // Total count
//   const totalCardCount =
//     cartItems && cartItems?.length > 0 && cartItems?.length;

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeItem, totalCardCount }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// CartContext.js
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
        p.id === item.id &&
        (p.selectedVariant?.id || p.variants[0].id) ===
          (item.selectedVariant?.id || item.variants[0].id)
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
    const index = stored.findIndex((p) => p.id === updatedItem.id);

    if (index !== -1) {
      stored[index] = updatedItem;
    }
    saveToStorage(stored);
  };

  // Remove item
  const removeItem = (item) => {
    const stored = JSON.parse(localStorage.getItem("card")) || [];
    const filtered = stored.filter((i) => i.id !== item.id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        saveToStorage(filtered);

        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
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
