// React
import React from 'react';
import styled from 'styled-components/native';

// Utils
import { translate } from '../common/i18n/i18n';

// Constants
import { COLOR } from '../common/constants/colors';

// Components
import { Text } from 'react-native';

interface StyledTextProps {
  label: string;
  header?: boolean;
  buttonLabel?: boolean;
}

const CustomText = styled(Text)<Partial<StyledTextProps>>`
  display: flex;

  ${(props) => {
    const style = {
      margin: '',
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
