import AgoraUIKit from 'agora-rn-uikit';
import {PropsInterface} from 'agora-rn-uikit/src/Contexts/PropsContext';
import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import CallingScreen from './CallingScreen';
import {channel, setVideoCallHook} from '../utlis/hooks';

const StartScreen: React.FC = () => {
  const videoCall = setVideoCallHook();
  const Channel = channel();
  const ChannelName = Channel.value;
  const props: PropsInterface = {
    rtcProps: {
      appId: 'dc1cd71c0ed84e099861ce9e445d341c',
      channel: 'Test',
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
    <CallingScreen onPress={() => videoCall.set(true)} />
  );
};
export default StartScreen;
