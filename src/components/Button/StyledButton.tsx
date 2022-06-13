// React
import React from 'react';
import styled from 'styled-components/native';

// Commons
import { COLOR } from '../../common/constants/colors';

// Components
import { Pressable, PressableProps } from 'react-native';
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

interface StyledButtonProps extends PressableProps {
  label: string;
  buttonStyle?: any;
}

const StyledButton = (props: StyledButtonProps) => {
  const { label } = props;

  return (
    <Button
      {...props}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? COLOR.LIGHTER : COLOR.DETAIL
        }
      ]}
    >
      <StyledText buttonLabel label={label} />
    </Button>
  );
};

export default StyledButton;
