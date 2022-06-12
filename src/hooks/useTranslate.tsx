// React
import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// API
import { translateText } from '../api/api';

// Commons
import { Language } from '../common/constants/enums';

export const useTranslate = () => {
  const [translatedText, setTranslatedText] = useState<any>();
  const [transletedTextData, setTransletedTextData] = useState<any>();

  // Get storage data
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@translates');

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return;
    }
  };

  // Set storage data
  const storeData = async (key: string, value: string) => {
    let currentData = await getData();

    currentData = currentData?.filter((data: Record<string, string>) => data.text !== key) || [];

    const translateItem = { text: key, translate: value };
    const items = currentData?.length ? [translateItem, ...currentData] : [translateItem];

    try {
      const jsonValue = JSON.stringify(items);
      await AsyncStorage.setItem('@translates', jsonValue);

      setTransletedTextData(await getData());
    } catch (e) {
      return;
    }
  };

  // Initilize storage data
  useEffect(() => {
    getData().then((res) => setTransletedTextData(res));
  }, []);

  // Trigger translate text API
  const translate = useCallback(async (language: Language, targetLanguage: Language, text: string) => {
    let apiResponse: any;

    try {
      if (text.trim()) {
        apiResponse = await translateText(language, targetLanguage, text);

        setTranslatedText(apiResponse);
        await storeData(text, apiResponse);
      }
    } catch (error) {
      apiResponse = error;

      setTranslatedText(null);
    }

    return apiResponse;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [translate, transletedTextData, translatedText];
};
