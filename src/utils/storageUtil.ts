// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Get storage data
export const getData = async (store: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(store);

    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return;
  }
};

// Set storage data
export const storeData = async (store: string, item: Record<string, string>) => {
  let currentData = await getData(store);

  currentData = currentData?.filter((data: Record<string, string>) => data.text !== item.text) || [];

  const items = currentData?.length ? [item, ...currentData] : [item];

  try {
    const jsonValue = JSON.stringify(items);
    await AsyncStorage.setItem(store, jsonValue);
  } catch (e) {
    return;
  }
};

// Remove storage data
export const removeData = async (store: string, item: Record<string, string>) => {
  let currentData = await getData(store);

  currentData = currentData?.filter((data: Record<string, string>) => data.text !== item.text) || [];

  try {
    const jsonValue = JSON.stringify(currentData);
    await AsyncStorage.setItem(store, jsonValue);
  } catch (e) {
    return;
  }
};
