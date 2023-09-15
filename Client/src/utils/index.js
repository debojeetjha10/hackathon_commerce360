// function to set browser localstorage value
export const setLocalStorage = (key, value) => {
  try {
    if (key && value) {
      value = JSON.stringify(value);
      localStorage.setItem(key, value);
    }
  } catch (err) {
    console.log(err);
  }
};

// function to get browser localstorage value
export const getLocalStorage = (key) => {
  if (key) {
    return localStorage.getItem(key);
  } else {
    return null;
  }
};

export const isLoggedIn = () => {
  if (getLocalStorage("token")) {
    return true;
  } else {
    return false;
  }
};

export const setToken = () => {
  // generate unique token
  const token = CreateUUID();
  setLocalStorage("token", token);
};

export const logout = () => {
  localStorage.clear();
};

export function CreateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0; // eslint-disable-line no-bitwise
    const v = c == "x" ? r : (r & 0x3) | 0x8; // eslint-disable-line no-bitwise
    return v.toString(16);
  });
}
