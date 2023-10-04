import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {channel} from '../utlis/hooks';

interface CallingScreenProps {
  onPress?: () => void;
}

const CallingScreen: React.FC<CallingScreenProps> = ({onPress}) => {
  const channelId = channel();
  return (
    <View style={styles.main}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Image source={require('../images/logo.png')} />
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: '3%'}}>
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
            console.log('Channel No.:', channelId.value);
          }}
        />
        <TouchableOpacity onPress={onPress} style={{width: '95%'}}>
          <Text style={styles.call}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CallingScreen;

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
