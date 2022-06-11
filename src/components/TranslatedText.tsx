// React
import React from 'react';
import styled from 'styled-components/native';

// Component
import { Text, View } from 'react-native';
import { COLOR } from '../common/constants/colors';

const StyledView = styled(View)`
  display: flex;
  margin: 20px;

  background-color: ${COLOR.GREY};
  border: 1px solid ${COLOR.COMMON};
  border-radius: 2px;
`;

const StyledText = styled(Text)`
  padding: 16px;
  color: ${COLOR.COMMON};
  font-size: 20px;
`;

interface TranslatedTextProps {
  translatedText: string;
}

const TranslatedText = (props: TranslatedTextProps) => {
  const { translatedText } = props;

  return (
    <StyledView>
      <StyledText>{translatedText}</StyledText>
    </StyledView>
  );
};

export default TranslatedText;
