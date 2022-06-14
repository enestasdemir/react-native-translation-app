// React
import React from 'react';
import styled from 'styled-components/native';

// Commons
import { COLOR } from '../../common/constants/colors';

// Components
import { Image, Pressable, PressableProps } from 'react-native';
import StyledText from '../StyledText';

const Button = styled(Pressable)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;

  width: 80%;
  height: 48px;
  margin-top: 20px;
  border-radius: 2px;
`;

const StyledImage = styled(Image)`
  width: 24px;
  height: 24px;
`;

interface StyledButtonProps extends PressableProps {
  label: string;
  loading?: boolean;
}

const StyledButton = (props: StyledButtonProps) => {
  const { label, loading } = props;

  return (
    <Button
      {...props}
      disabled={loading}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? COLOR.LIGHTER : COLOR.DETAIL
        }
      ]}
    >
      {loading ? (
        <StyledImage source={require('./../../assets/loading.gif')} />
      ) : (
        <StyledText buttonLabel label={label} />
      )}
    </Button>
  );
};

export default StyledButton;
