import { error } from "console";

// local storage api
const localStorageService = {
  setLocalStorageItem(key: string, value: string) {
    localStorage.setItem(key, value);
  },

  getLocalStorageItem(key: string): string | null {
    return localStorage.getItem(key);
  },
  removeLocalStorageItem(key: string) {
    localStorage.removeItem(key);
  },
  getLocalStorageItemByIndex(index: number) {
    return localStorage.key(index);
  },
  clearLocalStorage() {
    localStorage.clear();
  },
  localStorageLength() {
    return localStorage.length;
  },
  getAllLocalStorageData() {
    localStorage;
  },
  setLocalStorageAsArrayItem(key: string, arrayValue: string[]) {
    if (!Array.isArray(arrayValue))  {
      throw new Error("value must be an array");
    }
   localStorageService.setLocalStorageItem(key, JSON.stringify(arrayValue));
  },
  getLocalStorageArrayItem(key: string) {
    const result = localStorageService.getLocalStorageItem(key) || null;
    if (!result) {
      return null;
    }
    return JSON.parse(result);
  },
  populateLocalStorageItems(object: any) {
    for (const [key, value] of Object.entries(object) as any) {
      localStorageService.setLocalStorageItem(key, value);
    };
  }
};

export default localStorageService;