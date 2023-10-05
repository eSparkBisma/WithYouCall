import AgoraUIKit from 'agora-rn-uikit';
import {PropsInterface} from 'agora-rn-uikit/src/Contexts/PropsContext';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import StartScreen from './StartScreen';
import {channel, useVideoCallHook} from '../utlis/hooks';

const CallingScreen: React.FC = () => {
  const defaultChannelId = 'Test';
  const videoCall = useVideoCallHook();

  useEffect(() => {
    videoCall.set(true);
  }, []);

  const props: PropsInterface = {
    rtcProps: {
      appId: 'dc1cd71c0ed84e099861ce9e445d341c',
      channel: defaultChannelId,
      token:
        '007eJxTYNhUvfTnceWQk8uyAhd1/DjwWHBaw+fMV7WFbIUmRwL2ndRQYEhJNkxOMTdMNkhNsTBJNbC0tDAzTE61TDUxMU0xNjFMvqYpm9oQyMgQde4gEyMDBIL4LAwhqcUlDAwAF7YhsQ==',
    },
    callbacks: {EndCall: () => videoCall.set(false)},
  };

  return videoCall.get() ? (
    <SafeAreaView style={{flex: 1}}>
      <AgoraUIKit
        connectionData={props.rtcProps}
        rtcCallbacks={props.callbacks}
      />
    </SafeAreaView>
  ) : (
    <StartScreen />
  );
};
export default CallingScreen;
