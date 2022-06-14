// React
import { useCallback, useEffect, useState } from 'react';

// Utils
import ValueUtil from '../utils/valueUtil';

export type UseFavoritesType = {
  favoriteListData: Record<string, string>[] | undefined;
  addFavorite: (item: Record<string, string>) => Promise<void>;
  removeFavorite: (item: Record<string, string>) => Promise<void>;
  checkUpdates: () => Promise<void>;
};

export const useFavorites = () => {
  const [favoriteListData, setFavoriteListData] = useState<Array<Record<string, string>>>();

  // Initialize storage data
  useEffect(() => {
    ValueUtil.getFavorites().then((favorites) => setFavoriteListData(favorites));
  }, []);

  // Check updates
  // TODO: Instead of such functions, redux can be used for state management.
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
