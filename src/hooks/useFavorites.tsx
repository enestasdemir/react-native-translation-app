// React
import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useFavorites = () => {
  const [favoriteListData, setFavoriteListData] = useState<any>();

  // Get storage data
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return;
    }
  };

  // Set storage data
  const storeData = useCallback(async (item: Record<string, string>) => {
    let currentData = await getData();

    currentData = currentData?.filter((data: Record<string, string>) => data.text !== item.text) || [];

    const items = currentData?.length ? [item, ...currentData] : [item];

    try {
      const jsonValue = JSON.stringify(items);
      await AsyncStorage.setItem('@favorites', jsonValue);

      const newData = await getData();

      setFavoriteListData(() => [...newData]);
    } catch (e) {
      return;
    }
  }, []);

  // Remove storage data
  const removeFavorite = async (item: Record<string, string>) => {
    let currentData = await getData();

    currentData = currentData?.filter((data: Record<string, string>) => data.text !== item.text) || [];

    try {
      const jsonValue = JSON.stringify(currentData);
      await AsyncStorage.setItem('@favorites', jsonValue);
      const newData = await getData();

      setFavoriteListData(() => [...newData]);
    } catch (e) {
      return;
    }
  };

  // Initilize storage data
  useEffect(() => {
    getData().then((res) => setFavoriteListData(res));
  }, []);

  // Trigger translate text API
  const addFavorite = useCallback(
    async (item: Record<string, string>) => {
      try {
        await storeData(item);
      } catch (error) {
        return;
      }
    },
    [storeData]
  );

  return { favoriteListData, addFavorite, removeFavorite };
};
