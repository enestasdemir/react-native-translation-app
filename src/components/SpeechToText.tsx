// React
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import Voice, { SpeechResultsEvent, SpeechErrorEvent } from '@react-native-voice/voice';

// Commons
import { Language } from '../common/constants/enums';

// Components
import { View, Image, Pressable } from 'react-native';

const StyledImage = styled(Image)`
  width: 32px;
  height: 32px;
`;

interface State {
  recognized: string;
  pitch: string;
  error: string;
  end: string;
  started: string;
  results: Array<string> | undefined;
  partialResults: string[];
}

interface Props {
  sourceLanguage: Language;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

const SpeechToText = (props: Props) => {
  const { sourceLanguage, setText } = props;

  const [data, setData] = useState<State>({
    recognized: '',
    pitch: '',
    error: '',
    end: '',
    started: '',
    results: [''],
    partialResults: ['']
  });

  useEffect(() => {
    const onSpeechStart = () => {
      setData((state) => {
        state.started = '√';

        return { ...state };
      });
    };

    const onSpeechRecognized = () => {
      setData((state) => {
        state.recognized = '√';

        return { ...state };
      });
    };

    const onSpeechEnd = () => {
      setData((state) => {
        state.end = '√';

        return { ...state };
      });
    };

    const onSpeechError = (e: SpeechErrorEvent) => {
      setData((state) => {
        state.error = JSON.stringify(e.error);

        return { ...state };
      });
    };

    const onSpeechResults = (e: SpeechResultsEvent) => {
      setText(e?.value?.[0] || '');

      setData((state) => {
        state.results = e.value!;

        return { ...state };
      });
    };

    const onSpeechPartialResults = (e: SpeechResultsEvent) => {
      setData((state) => {
        state.partialResults = e.value!;

        return { ...state };
      });
    };

    const onSpeechVolumeChanged = (e: any) => {
      setData((state) => {
        state.pitch = e.value;

        return { ...state };
      });
    };

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [setText]);

  const startRecognizing = async () => {
    setData({
      recognized: '',
      pitch: '',
      error: '',
      started: '',
      results: [],
      partialResults: [],
      end: ''
    });

    try {
      await Voice.start(sourceLanguage, {
        RECOGNIZER_ENGINE: 'GOOGLE',
        EXTRA_PARTIAL_RESULTS: true
      });
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();

      setData((state) => {
        state.started = '';

        return { ...state };
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <Pressable onPress={data.started ? stopRecognizing : startRecognizing}>
        <StyledImage source={data.started ? require('./../assets/mic-active.png') : require('./../assets/mic.png')} />
      </Pressable>
    </View>
  );
};

export default SpeechToText;
