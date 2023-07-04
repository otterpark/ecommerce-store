type Key = 'accessToken';

export const getLocalStorageItem = (key: Key) => {
  try {
    const jsonValue = localStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) as string : '';
  } catch (e) {
    return '';
  }
};

export const setLocalStorageItem = (key: Key, value: string) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    throw new Error(`${e}`);
  }
};

export const clearLocalStorageItem = (key: Key) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    throw new Error(`${e}`);
  }
};
