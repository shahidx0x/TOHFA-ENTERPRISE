export const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== "undefined" || !key || !value) {
    return localStorage.setItem(key, value);
  }
};
export const getLocalStorage = (key: string) => {
  if (typeof window !== "undefined" || !key) {
    return localStorage.getItem(key);
  }
};

export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined" || !key) {
    return localStorage.removeItem(key);
  }
};
