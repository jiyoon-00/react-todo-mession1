// src/utils/storage.js

export const getStorage = (key) =>
  JSON.parse(localStorage.getItem(key) || "null");

export const setStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
