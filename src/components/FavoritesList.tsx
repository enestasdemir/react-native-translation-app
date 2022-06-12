// React
import React from 'react';
import styled from 'styled-components/native';

// Commons
import { COLOR } from '../common/constants/colors';

// Hooks
import { useFavorites } from '../hooks/useFavorites';

// Component
import { FlatList, Image, Pressable, Text, View } from 'react-native';

const StyledView = styled(View)`
  display: flex;
  margin: 20px;
  max-height: 460px;

  background-color: ${COLOR.GREY};
  border: 1px solid ${COLOR.COMMON};
  border-radius: 2px;
`;

const StyledFavoriteText = styled(Text)`
  padding: 16px 0 0 16px;
  color: ${COLOR.DARKER};
  font-size: 20px;
`;

const StyledFavoriteTranslate = styled(Text)`
  padding: 4px 0 12px 24px;
  color: ${COLOR.COMMON};
  font-size: 20px;
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

const FavoitesList = () => {
  const { favoriteListData, removeFavorite } = useFavorites();

  const removeItem = (item: Record<string, string>) => {
    removeFavorite(item);
  };

  const renderItem = (data: any) => {
    return (
      <StyledItem key={data?.item?.translate}>
        <StyledTextContainer>
          <StyledFavoriteText>{data?.item?.text}</StyledFavoriteText>
          <StyledFavoriteTranslate>{data?.item?.translate}</StyledFavoriteTranslate>
        </StyledTextContainer>
        <Pressable onPress={() => removeItem(data.item)}>
          <StyledImage source={require('./../assets/star.png')} />
        </Pressable>
      </StyledItem>
    );
  };

  return favoriteListData ? (
    <StyledView>
      <FlatList
        data={favoriteListData}
        renderItem={renderItem}
        keyExtractor={(item: Record<string, string>) => item.text}
      />
    </StyledView>
  ) : (
    <></>
  );
};

export default FavoitesList;
