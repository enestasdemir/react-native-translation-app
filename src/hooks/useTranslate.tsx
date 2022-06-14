// React
import { useCallback, useEffect, useState } from 'react';

// API
import { translateText } from '../api/api';

// Commons
import { Language } from '../common/constants/enums';

// Utils
import ValueUtil from '../utils/valueUtil';

export type UseTranslateType = {
  translate: (language: Language, targetLanguage: Language, text: string) => Promise<any>;
  transletedTextData: Record<string, string>[] | undefined;
  loading: boolean | undefined;
  translatedText: string | undefined;
};

export const useTranslate = () => {
  const [translatedText, setTranslatedText] = useState<string>();
  const [transletedTextData, setTransletedTextData] = useState<Array<Record<string, string>>>();
  const [loading, setLoading] = useState<boolean>(false);

  // Initilize storage data
  useEffect(() => {
    ValueUtil.getTranslations().then((translates) => setTransletedTextData(translates));
  }, []);

  // Trigger translate text API
  const translate = useCallback(async (language: Language, targetLanguage: Language, text: string) => {
    let apiResponse: any;

    try {
      if (text.trim()) {
        setLoading(true);
        apiResponse = await translateText(language, targetLanguage, text);

        setTranslatedText(apiResponse);
        await ValueUtil.addTranslation({ text, translate: apiResponse });
        setTransletedTextData(await ValueUtil.getTranslations());
      }
    } catch (error) {
      apiResponse = error;

      setTranslatedText('');
    } finally {
      setLoading(false);
    }

    return apiResponse;
  }, []);

  return { translate, transletedTextData, loading, translatedText };
};
