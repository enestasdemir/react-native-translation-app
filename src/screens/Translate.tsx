// React
import React, { useState } from 'react';

// Components
import { View, Button, Text } from 'react-native';
import StyledText from '../components/StyledText';
import StyledInput from '../components/StyledInput';
import { Language } from '../common/constants/enums';
import { useTranslate } from '../hooks/useTranslate';

const Translate = () => {
  const [translatedText, translate] = useTranslate();

  const [sourceLanguage] = useState<Language>(Language.TR);
  const [destinationLanguage] = useState<Language>(Language.EN);
  const [text, setText] = useState('deneme');

  return (
    <View>
      <StyledText header label="TRANSLATION_APP" />
      <StyledInput onChangeText={(value) => setText(value)} />

      <Text>{translatedText}</Text>

      <Button onPress={() => translate(sourceLanguage, destinationLanguage, text)} title="TRANSLATE" />
    </View>
  );
};

export default Translate;
