// React
import React from 'react';
import styled from 'styled-components/native';

// Utils
import { translate } from '../common/i18n/i18n';

// Constants
import { COLOR } from '../common/constants/colors';

// Components
import { TextInput, TextInputProps } from 'react-native';

const CustomInput = styled(TextInput)`
  display: flex;

  height: 200px;
  margin: 10px 20px 0 20px;
  padding: 10px;

  border-radius: 5px;
  border: 1px solid ${COLOR.DETAIL};

  color: ${COLOR.COMMON};
  font-size: 20px;
  font-weight: 600;
`;

const StyledInput = (props: TextInputProps) => (
  <CustomInput
    {...props}
    returnKeyType="send"
    returnKeyLabel={translate('SEND')}
    blurOnSubmit={true}
    multiline
    numberOfLines={1}
    textAlignVertical="top"
    autoComplete="off"
    autoCorrect={false}
    autoFocus={true}
    keyboardType="default"
    selectionColor={COLOR.COMMON}
  />
);

export default StyledInput;
