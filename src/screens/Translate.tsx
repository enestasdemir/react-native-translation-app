// React
import React, { useState } from 'react';

// Commons
import { Language } from '../common/constants/enums';

// Hooks
import { useTranslate } from '../hooks/useTranslate';

// Components
import { View } from 'react-native';
import StyledText from '../components/StyledText';
import StyledInput from '../components/StyledInput';
import TranslationDirection from '../components/TranslationDirection';
import TranslateButton from '../components/button/TranslateButton';
import TranslatedText from '../components/TranslatedText';

const Translate = () => {
  const [translatedText, translate] = useTranslate();

  const [sourceLanguage, setSourceLanguage] = useState<Language>(Language.TR);
  const [destinationLanguage, setDestinationLanguage] = useState<Language>(Language.EN);
  const [text, setText] = useState('');

  return (
    <View>
      <StyledText header label="TRANSLATION_APP" />
      <StyledInput onChangeText={(value) => setText(value)} />
      <TranslationDirection
        sourceLanguage={sourceLanguage}
        setSourceLanguage={setSourceLanguage}
        destinationLanguage={destinationLanguage}
        setDestinationLanguage={setDestinationLanguage}
      />
      <TranslateButton
        translate={translate}
        text={text}
        sourceLanguage={sourceLanguage}
        destinationLanguage={destinationLanguage}
      />
      <TranslatedText translatedText={translatedText} />
    </View>
  );
};

export default Translate;
