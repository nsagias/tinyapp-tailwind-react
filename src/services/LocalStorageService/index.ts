// local storage api
const localStorageService: LocalStorageService = {

  /**
   * Sets a new locale storage time in the browser
   * @param key string
   * @param value string
   */
  setLocalStorageItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  },

  /**
   * Get local storage item with key
   * @param key string
   * @returns value
   */
  getLocalStorageItem(key: string): string | null {
    return localStorage.getItem(key);
  },

  /**
   * Removes local storage item using key
   * @param key
   */
  removeLocalStorageItem(key: string): void {
    localStorage.removeItem(key);
  },

  /**
   * Gets local storage item with index
   * @param index number
   * @returns string value
   */
  getLocalStorageItemByIndex(index: number): string {
    return localStorage.key(index)!;
  },

  /**
   * Clear local storage remove all data from local storage
   */
  clearLocalStorage(): void {
    localStorage.clear();
  },

  /**
   * Gets current length of local storage
   * @returns number
   */
  localStorageLength(): number {
    return localStorage.length;
  },

  /**
   * Get all the data in local storage and returns it
   */
  getAllLocalStorageData(): Storage {
    return localStorage;
  },

  /**
   * Sets and array value as a string in local storage
   * @param key string
   * @param arrayValue array
   */
  setLocalStorageAsArrayItem(key: string, arrayValue: string[]) {
    if (!Array.isArray(arrayValue))  {
      throw new Error("value must be an array");
    }
   localStorageService.setLocalStorageItem(key, JSON.stringify(arrayValue));
  },

  /**
   * Gets item by key that must be an array
   * get string value and converts to array
   * @param key string
   * @returns array
   */
  getLocalStorageArrayItem(key: string): Array<any> | null {
    const result = localStorageService.getLocalStorageItem(key) || null;
    if (!result) return null;
    return JSON.parse(result);
  },
  
  /**
   * Populates local storage
   * @param object 
   */
  populateLocalStorageItems(object: any): void {
    if (!object) {
      throw new Error()
    }
    let key: string;
    let value: any;
    for ([key, value] of Object.entries(object)) {
      localStorageService.setLocalStorageItem(key, value);
    };
  },

  /**
   * Remove items from local storage
   * @param list 
   */
  removeItemsFromLocalStorage(list: string[]): void {
    for (let i = 0; i < list.length; i++) {
      localStorageService.removeLocalStorageItem(list[i]);
    }
  }
};

export default localStorageService;