// React
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

// Utils
import { translate } from '../common/i18n/i18n';

// Constants
import { COLOR } from '../common/constants/colors';

interface StyledTextProps {
  label: string;
  header?: boolean;
  buttonLabel?: boolean;
}

const CustomText = styled(Text)<Partial<StyledTextProps>>`
  display: flex;
  align-self: flex-start;

  ${(props) => {
    const style = {
      margin: '20px 0 0 0',
      color: COLOR.COMMON,
      fontSize: '20px',
      fontWeight: 'normal'
    };

    if (props.header) {
      style.margin = '20px 0 10px 20px';
      style.color = COLOR.DARKER;
      style.fontSize = '24px';
      style.fontWeight = 'bold';
    }

    if (props.buttonLabel) {
      style.color = COLOR.WHITE;
    }

    return style;
  }}
`;

const StyledText = (props: StyledTextProps) => {
  const { label } = props;

  return <CustomText {...props}>{translate(label)}</CustomText>;
};

export default StyledText;
