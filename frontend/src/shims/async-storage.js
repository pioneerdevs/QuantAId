// Lightweight browser shim for @react-native-async-storage/async-storage
// Provides a Promise-based API backed by localStorage for the browser.

const AsyncStorage = {
  async getItem(key) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? null : value;
    } catch (e) {
      return Promise.reject(e);
    }
  },
  async setItem(key, value) {
    try {
      localStorage.setItem(key, value);
      return null;
    } catch (e) {
      return Promise.reject(e);
    }
  },
  async removeItem(key) {
    try {
      localStorage.removeItem(key);
      return null;
    } catch (e) {
      return Promise.reject(e);
    }
  },
  async clear() {
    try {
      localStorage.clear();
      return null;
    } catch (e) {
      return Promise.reject(e);
    }
  },
  async getAllKeys() {
    try {
      return Object.keys(localStorage);
    } catch (e) {
      return Promise.reject(e);
    }
  },
  async multiGet(keys) {
    try {
      return keys.map((k) => [k, localStorage.getItem(k)]);
    } catch (e) {
      return Promise.reject(e);
    }
  },
  async multiSet(entries) {
    try {
      entries.forEach(([k, v]) => localStorage.setItem(k, v));
      return null;
    } catch (e) {
      return Promise.reject(e);
    }
  },
  async multiRemove(keys) {
    try {
      keys.forEach((k) => localStorage.removeItem(k));
      return null;
    } catch (e) {
      return Promise.reject(e);
    }
  },
};

export default AsyncStorage;
