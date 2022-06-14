// Axios
import axios, { AxiosError, AxiosResponse } from 'axios';

// Commons
import { Language } from '../common/constants/enums';

// Config
import Config from 'react-native-config';

export const translateText = async (language: Language, targetLanguage: Language, text: string) => {
  const body = {
    source: language,
    target: targetLanguage,
    q: text
  };

  const options = {
    method: 'POST',
    url: Config.API_URL,
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': Config.API_TOKEN,
      'X-RapidAPI-Host': Config.API_HOST
    },
    data: body
  };

  return axios
    .request(options)
    .then(function (response: AxiosResponse) {
      return response.data.data.translations.translatedText;
    })
    .catch(function (error: AxiosError) {
      return error;
    });
};
