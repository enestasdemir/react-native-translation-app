// React
import React from 'react';
import styled from 'styled-components/native';

// Components
import { Pressable, View } from 'react-native';
import StyledText from './StyledText';

// Constants & Enums
import { COLOR } from '../common/constants/colors';
import { Language } from '../common/constants/enums';

interface TranslationDirectionProps {
  sourceLanguage: Language;
  setSourceLanguage: React.Dispatch<React.SetStateAction<Language>>;
  destinationLanguage: Language;
  setDestinationLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-top: 20px;
`;

const TranslationDirection = (props: TranslationDirectionProps) => {
  const { sourceLanguage, setSourceLanguage, destinationLanguage, setDestinationLanguage } = props;

  const changeTranslationDirection = () => {
    setSourceLanguage((language) => (language === Language.EN ? Language.TR : Language.EN));
    setDestinationLanguage((language) => (language === Language.EN ? Language.TR : Language.EN));
  };

  return (
    <StyledView>
      <StyledText label={sourceLanguage} />
      <Pressable
        onPress={() => changeTranslationDirection()}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? COLOR.LIGHTER : COLOR.DETAIL
          }
        ]}
      >
        <StyledText buttonLabel label="CHANGE" />
      </Pressable>
      <StyledText label={destinationLanguage} />
    </StyledView>
  );
};

export default TranslationDirection;
