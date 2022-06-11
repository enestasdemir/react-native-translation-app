// React
import React, { useState } from 'react';

// Components
import { View, Button, Text } from 'react-native';
import StyledText from '../components/StyledText';
import StyledInput from '../components/StyledInput';
import TranslationDirection from '../components/TranslationDirection';
import { Language } from '../common/constants/enums';
import { useTranslate } from '../hooks/useTranslate';

const Translate = () => {
  const [translatedText, translate] = useTranslate();

  const [sourceLanguage, setSourceLanguage] = useState<Language>(Language.TR);
  const [destinationLanguage, setDestinationLanguage] = useState<Language>(Language.EN);
  const [text, setText] = useState('deneme');

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
      <Text>{translatedText}</Text>

      <Button onPress={() => translate(sourceLanguage, destinationLanguage, text)} title="TRANSLATE" />
    </View>
  );
};

export default Translate;
