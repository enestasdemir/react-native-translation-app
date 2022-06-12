// React
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

// Commons
import { Language } from '../common/constants/enums';

// Hooks
import { useTranslate } from '../hooks/useTranslate';
import { useFavorites } from '../hooks/useFavorites';

// Components
import { View } from 'react-native';
import StyledText from '../components/StyledText';
import StyledInput from '../components/StyledInput';
import TranslationDirection from '../components/TranslationDirection';
import TranslateButton from '../components/button/TranslateButton';
import TranslatedText from '../components/TranslatedText';
import SpeechToText from '../components/SpeechToText';

const HeaderContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;
interface TranslateScreenProps {
  navigation: any;
}

const Translate = (props: TranslateScreenProps) => {
  const { navigation } = props;

  const [translate, transletedTextData] = useTranslate();
  const favorites = useFavorites();

  const [sourceLanguage, setSourceLanguage] = useState<Language>(Language.TR);
  const [destinationLanguage, setDestinationLanguage] = useState<Language>(Language.EN);
  const [text, setText] = useState('');

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      favorites.checkUpdates();
    });

    return unsubscribe;
  }, [favorites, navigation]);

  return (
    <View>
      <HeaderContainer>
        <StyledText header label="TRANSLATION_APP" />
        <SpeechToText sourceLanguage={sourceLanguage} setText={setText} />
      </HeaderContainer>
      <StyledInput onChangeText={(value) => setText(value)} value={text} />
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
      <TranslatedText transletedTextData={transletedTextData} favorites={favorites} />
    </View>
  );
};

export default Translate;
