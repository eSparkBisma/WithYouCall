import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {channel} from '../utlis/hooks';
import CallingScreen from './CallingScreen';

const StartScreen: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const channelId = channel();
  const defaultChannelId = 'Test';

  const makeConnection = () => {
    if (channelId.value == defaultChannelId) {
      setIsConnected(true);
    } else {
      console.warn('ENTER VALID CHANNEL ID');
    }
  };
  return isConnected ? (
    <CallingScreen />
  ) : (
    <View style={styles.main}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Image source={require('../images/logo.png')} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '3%',
          }}>
          <Text style={{color: '#0c0633', fontSize: 38, fontWeight: 'bold'}}>
            WithYou
          </Text>
          <Text style={{color: '#484747', fontSize: 38, fontWeight: 'bold'}}>
            {' '}
            Call
          </Text>
        </View>
      </View>

      <View style={{width: '100%', alignItems: 'center'}}>
        <TextInput
          placeholder="Enter Channel Name"
          style={styles.channelId}
          value={channelId.value}
          onChangeText={text => {
            channelId.set(text);
          }}
        />
        <TouchableOpacity onPress={makeConnection} style={{width: '95%'}}>
          <Text style={styles.call}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  main: {
    marginTop: '25%',
    justifyContent: 'space-between',
    height: '60%',
    alignItems: 'center',
  },
  channelId: {
    backgroundColor: '#8080807b',
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
    margin: '1%',
    textAlign: 'center',
    width: '95%',
    borderRadius: 12,
  },
  call: {
    backgroundColor: '#010035',
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
    margin: '1%',
    textAlign: 'center',
    width: '100%',
    borderRadius: 12,
  },
});
