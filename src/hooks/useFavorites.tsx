// React
import { useCallback, useEffect, useState } from 'react';
import ValueUtil from '../utils/valueUtil';

export const useFavorites = () => {
  const [favoriteListData, setFavoriteListData] = useState<any>();

  // Initialize storage data
  useEffect(() => {
    ValueUtil.getFavorites().then((favorites) => setFavoriteListData(favorites));
  }, []);

  // Check updates
  const checkUpdates = useCallback(async () => {
    const favorites = await ValueUtil.getFavorites();

    if (favorites) {
      setFavoriteListData(() => [...favorites]);
    }
  }, []);

  // Trigger translate text API
  const addFavorite = useCallback(async (item: Record<string, string>) => {
    try {
      await ValueUtil.addFavorite(item);
      setFavoriteListData(await ValueUtil.getFavorites());
    } catch (error) {
      return;
    }
  }, []);

  // Trigger translate text API
  const removeFavorite = useCallback(async (item: Record<string, string>) => {
    try {
      await ValueUtil.removeFavorite(item);
      setFavoriteListData(await ValueUtil.getFavorites());
    } catch (error) {
      return;
    }
  }, []);

  return { favoriteListData, addFavorite, removeFavorite, checkUpdates };
};
