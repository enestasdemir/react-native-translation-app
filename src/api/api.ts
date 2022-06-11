import { Language } from '../common/constants/enums';
const axios = require('axios');

export const translateText = async (language: Language, targetLanguage: Language, text: string) => {
  const body = {
    source: language,
    target: targetLanguage,
    q: text
  };

  const options = {
    method: 'POST',
    url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'IxlqM6A2vHmshULjdgyqtfo8BsvUp1MA6Kwjsnw7hy896Y1KXK',
      'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
    },
    data: body
  };

  return axios
    .request(options)
    .then(function (response: any) {
      return response.data.data.translations.translatedText;
    })
    .catch(function (error: any) {
      return error;
    });
};
