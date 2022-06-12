// React
import React from 'react';
import styled from 'styled-components/native';

// Component
import { FlatList, Text, View } from 'react-native';

// Commons
import { COLOR } from '../common/constants/colors';

const StyledView = styled(View)`
  display: flex;
  margin: 20px;
  max-height: 250px;

  background-color: ${COLOR.GREY};
  border: 1px solid ${COLOR.COMMON};
  border-radius: 2px;
`;

const StyledText = styled(Text)`
  padding: 16px 0 0 16px;
  color: ${COLOR.DARKER};
  font-size: 20px;
`;

const StyledTranslate = styled(Text)`
  padding: 4px 0 12px 24px;
  color: ${COLOR.COMMON};
  font-size: 20px;
`;
interface TranslatedTextProps {
  transletedTextData: [Record<string, string>];
}

const TranslatedText = (props: TranslatedTextProps) => {
  const { transletedTextData } = props;

  const renderItem = (data: any) => (
    <React.Fragment key={data?.item?.translate}>
      <StyledText>{data?.item?.text}</StyledText>
      <StyledTranslate>{data?.item?.translate}</StyledTranslate>
    </React.Fragment>
  );

  return (
    <StyledView>
      <FlatList
        data={transletedTextData}
        renderItem={renderItem}
        keyExtractor={(item: Record<string, string>) => item.translate}
      />
    </StyledView>
  );
};

export default TranslatedText;
