
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
  clearLocalStorage() {
    localStorage.clear();
  },
  getLocalStorageItemByIndex(index: number) {
    localStorage.key(index);
  },
};

export default localStorageService;