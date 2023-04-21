
interface LocalStorageService {
  /**
   * Sets a new locale storage time in the browser
   * @param key string
   * @param value string
   */
  setLocalStorageItem(key: string, value: string): void;

  /**
   * Get local storage item with key
   * @param key string
   * @returns value
   */
  getLocalStorageItem(key: string): string | null;

  /**
   * Removes local storage item using key
   * @param key
   */
  removeLocalStorageItem(key: string): void;

   /**
   * Gets local storage item with index
   * @param index number
   * @returns string value
   */
  getLocalStorageItemByIndex(index: number): string;

  /**
   * Clear local storage remove all data from local storage
   */
  clearLocalStorage(): void;

  /**
   * Gets current length of local storage
   * @returns number
   */
  localStorageLength(): number;

  /**
   * Get all the data in local storage and returns it
   */
  getAllLocalStorageData(): Storage;

  /**
   * Sets and array value as a string in local storage
   * @param key string
   * @param arrayValue array
   */
  setLocalStorageAsArrayItem(key: string, arrayValue: string[]): void;

  /**
   * Gets item by key that must be an array
   * get string value and converts to array
   * @param key string
   * @returns array
   */
  getLocalStorageArrayItem(key: string): Array<any> | null;

  /**
   * Populates local storage
   * @param object 
   */
  populateLocalStorageItems(object: any): void;

  /**
   * Remove items from locatl storage
   * @param list 
   */
  removeItemsFromLocalStorage(list: string[]): void 
}