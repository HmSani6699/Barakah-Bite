// 📌 LocalStorage helpers
const STORAGE_KEYS = {
  ALL: "allDeliveryAddress",
  CURRENT: "deliveryAddress",
};

// Get all addresses
export const getAllAddresses = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ALL)) || [];
  } catch {
    return [];
  }
};

// Save all addresses
export const saveAllAddresses = (addresses) => {
  localStorage.setItem(STORAGE_KEYS.ALL, JSON.stringify(addresses));
};

// Get current selected delivery address
export const getDeliveryAddress = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT)) || null;
  } catch {
    return null;
  }
};

// Save current delivery address
export const saveDeliveryAddress = (address) => {
  localStorage.setItem(STORAGE_KEYS.CURRENT, JSON.stringify(address));
};

// Remove current delivery address
export const removeDeliveryAddress = () => {
  localStorage.removeItem(STORAGE_KEYS.CURRENT);
};

// Remove all addresses
export const removeAllAddresses = () => {
  localStorage.removeItem(STORAGE_KEYS.ALL);
  localStorage.removeItem(STORAGE_KEYS.CURRENT); // ✅ Ensure both cleared
};

// Delete one address
export const deleteAddressById = (id) => {
  const all = getAllAddresses();
  const filtered = all.filter((item) => item.id !== id);

  if (filtered.length > 0) {
    saveAllAddresses(filtered);

    // Check if current delivery address still valid
    const current = getDeliveryAddress();
    if (current && !filtered.find((a) => a.id === current.id)) {
      removeDeliveryAddress();
    }
  } else {
    removeAllAddresses(); // ✅ No address left, clear everything
  }

  return filtered;
};
