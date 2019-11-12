export default {
  get: (key, isJson = 0) => {
    if (isJson) {
      return JSON.parse(window.localStorage.getItem(key))
    }
    return window.localStorage.getItem(key);
  },
  set: (key, val) => {
    window.localStorage.setItem(key, val);
  },
  remove: key => {
    window.localStorage.removeItem(key);
  },
  clear: () => {
    window.localStorage.clear();
  }
};
