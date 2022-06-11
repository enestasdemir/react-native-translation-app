// React
import React from 'react';

// Commons
import { Language } from '../../common/constants/enums';

// Components
import StyledButton from './StyledButton';

interface TranslateButtonProps {
  translate: any;
  sourceLanguage: Language;
  destinationLanguage: Language;
  text: string;
}

const TranslateButton = (props: TranslateButtonProps) => {
  const { translate, sourceLanguage, destinationLanguage, text } = props;

  const handleOnPress = () => {
    translate(sourceLanguage, destinationLanguage, text);
  };

  return <StyledButton onPress={handleOnPress} label="TRANSLATE" />;
};

export default TranslateButton;
