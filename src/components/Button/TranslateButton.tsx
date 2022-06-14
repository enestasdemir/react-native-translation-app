// React
import React from 'react';

// Commons
import { Language } from '../../common/constants/enums';

// Components
import StyledButton from './StyledButton';

interface TranslateButtonProps {
  translate: (language: Language, targetLanguage: Language, text: string) => Promise<any>;
  sourceLanguage: Language;
  destinationLanguage: Language;
  text: string;
  loading: boolean;
}

const TranslateButton = (props: TranslateButtonProps) => {
  const { translate, sourceLanguage, destinationLanguage, text, loading } = props;

  const handleOnPress = () => {
    translate(sourceLanguage, destinationLanguage, text);
  };

  return <StyledButton loading={loading} onPress={handleOnPress} label="TRANSLATE" />;
};

export default TranslateButton;
