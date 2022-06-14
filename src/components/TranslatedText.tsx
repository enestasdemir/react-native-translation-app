// React
import React from 'react';
import styled from 'styled-components/native';

// Component
import { FlatList, Image, Pressable, Text, View } from 'react-native';

// Commons
import { COLOR } from '../common/constants/colors';
import { UseFavoritesType } from '../hooks/useFavorites';

const StyledView = styled(View)`
  display: flex;
  margin: 20px;
  max-height: 250px;

  background-color: ${COLOR.GREY};
  border: 1px solid ${COLOR.COMMON};
  border-radius: 2px;
`;

const StyledItem = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-right: 20px;
`;

const StyledTextContainer = styled(View)`
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled(Image)`
  width: 24px;
  height: 24px;
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
  transletedTextData: Array<Record<string, string>> | undefined;
  favorites: UseFavoritesType;
}

const TranslatedText = (props: TranslatedTextProps) => {
  const { transletedTextData, favorites } = props;

  const checkFavorite = (item: Record<string, string>) => {
    return favorites?.favoriteListData?.some((data: Record<string, string>) => data.text === item.text);
  };

  const addItemToFavorites = (item: Record<string, string>) => {
    const isFavorite = checkFavorite(item);

    if (!isFavorite) {
      favorites?.addFavorite(item);
    } else {
      favorites?.removeFavorite(item);
    }
  };

  const renderItem = (data: { item: Record<string, string> }) => {
    const isFavorite = checkFavorite(data?.item);

    return (
      <StyledItem key={data?.item?.translate}>
        <StyledTextContainer>
          <StyledText>{data?.item?.text}</StyledText>
          <StyledTranslate>{data?.item?.translate}</StyledTranslate>
        </StyledTextContainer>
        <Pressable onPress={() => addItemToFavorites(data.item)}>
          {isFavorite ? (
            <StyledImage source={require('./../assets/star.png')} />
          ) : (
            <StyledImage source={require('./../assets/star-empty.png')} />
          )}
        </Pressable>
      </StyledItem>
    );
  };

  return transletedTextData ? (
    <StyledView>
      <FlatList
        data={transletedTextData}
        extraData={favorites?.favoriteListData}
        renderItem={renderItem}
        keyExtractor={(item: Record<string, string>) => item.text}
      />
    </StyledView>
  ) : (
    <></>
  );
};

export default TranslatedText;
