// React
import React from 'react';

// Components
import { View } from 'react-native';
import FavoritesList from '../components/FavoritesList';
import StyledText from '../components/StyledText';

const Favorites = () => {
  return (
    <View>
      <StyledText header label="TRANSLATION_APP" />
      <FavoritesList />
    </View>
  );
};

export default Favorites;
