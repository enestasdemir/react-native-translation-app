// React
import React from 'react';
import styled from 'styled-components/native';

// Components
import { Image, Pressable, View } from 'react-native';
import StyledText from './StyledText';

// Commons
import { COLOR } from '../common/constants/colors';
import { Language } from '../common/constants/enums';

const StyledView = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 20px;
`;

const StyledImage = styled(Image)`
  width: 24px;
  height: 24px;
`;

const Button = styled(Pressable)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 2px;
`;

const StyledTextContainer = styled(View)`
  width: 80px;
`;

interface TranslationDirectionProps {
  sourceLanguage: Language;
  setSourceLanguage: React.Dispatch<React.SetStateAction<Language>>;
  destinationLanguage: Language;
  setDestinationLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const TranslationDirection = (props: TranslationDirectionProps) => {
  const { sourceLanguage, setSourceLanguage, destinationLanguage, setDestinationLanguage } = props;

  const changeTranslationDirection = () => {
    setSourceLanguage((language) => (language === Language.EN ? Language.TR : Language.EN));
    setDestinationLanguage((language) => (language === Language.EN ? Language.TR : Language.EN));
  };

  return (
    <StyledView>
      <StyledTextContainer>
        <StyledText label={sourceLanguage} />
      </StyledTextContainer>
      <Button
        onPress={() => changeTranslationDirection()}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? COLOR.LIGHTER : COLOR.DETAIL
          }
        ]}
      >
        <StyledImage source={require('./../assets/change.png')} />
      </Button>
      <StyledTextContainer>
        <StyledText label={destinationLanguage} />
      </StyledTextContainer>
    </StyledView>
  );
};

export default TranslationDirection;
