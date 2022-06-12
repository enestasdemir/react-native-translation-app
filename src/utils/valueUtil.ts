import { getData, removeData, storeData } from './storageUtil';

const ValueUtil = {
  getTranslations: async () => {
    const translations = await getData('@translates');

    return translations;
  },

  addTranslation: async (item: Record<string, string>) => {
    await storeData('@translates', item);
  },

  getFavorites: async () => {
    const favorites = await getData('@favorites');

    return favorites;
  },

  addFavorite: async (item: Record<string, string>) => {
    await storeData('@favorites', item);
  },

  removeFavorite: async (item: Record<string, string>) => {
    await removeData('@favorites', item);
  }
};

export default ValueUtil;
