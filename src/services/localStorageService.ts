import { error } from "console";

// local storage api
const localStorageService = {
  setLocalStorageItem(key: string, value: string) {
    localStorage.setItem(key, value);
  },

  getLocalStorageItem(key: string) {
    localStorage.getItem(key);
  },
  removeLocalStorageItem(key: string) {
    localStorage.removeItem(key);
  },
  getLocalStorageItemByIndex(index: number) {
    localStorage.key(index);
  },
  clearLocalStorage() {
    localStorage.clear();
  },
  localStorageLength() {
    localStorage.length;
  },
  getAllLocalStorageData() {
    localStorage;
  },
  setLocaleStorageAsArray(key: string, arrayValue: string[]) {
    if (!Array.isArray(arrayValue))  {
      throw new Error("Must be array");
    }
    localStorageService.setLocalStorageItem(key, JSON.stringify(arrayValue));
  },
  

};

export default localStorageService;