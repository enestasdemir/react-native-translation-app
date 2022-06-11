import { useCallback, useState } from 'react';
import { translateText } from '../common/api/api';
import { Language } from '../common/constants/enums';

export const useTranslate = () => {
  const [translatedText, setTranslatedText] = useState<any>();

  const translate = useCallback(async (language: Language, targetLanguage: Language, text: string) => {
    let apiResponse: any;

    try {
      apiResponse = await translateText(language, targetLanguage, text);

      setTranslatedText(apiResponse);
    } catch (error) {
      apiResponse = error;

      setTranslatedText(null);
    }

    return apiResponse;
  }, []);

  return [translatedText, translate];
};