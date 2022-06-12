// React
import { useCallback, useEffect, useState } from 'react';

// API
import { translateText } from '../api/api';

// Commons
import { Language } from '../common/constants/enums';

// Utils
import ValueUtil from '../utils/valueUtil';

export const useTranslate = () => {
  const [translatedText, setTranslatedText] = useState<any>();
  const [transletedTextData, setTransletedTextData] = useState<any>();

  // Initilize storage data
  useEffect(() => {
    ValueUtil.getTranslations().then((translates) => setTransletedTextData(translates));
  }, []);

  // Trigger translate text API
  const translate = useCallback(async (language: Language, targetLanguage: Language, text: string) => {
    let apiResponse: any;

    try {
      if (text.trim()) {
        apiResponse = await translateText(language, targetLanguage, text);

        setTranslatedText(apiResponse);
        await ValueUtil.addTranslation({ text, translate: apiResponse });
        setTransletedTextData(await ValueUtil.getTranslations());
      }
    } catch (error) {
      apiResponse = error;

      setTranslatedText(null);
    }

    return apiResponse;
  }, []);

  return [translate, transletedTextData, translatedText];
};
