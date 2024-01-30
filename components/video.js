import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Typography } from '@mui/material';
import { Text,Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Stack from '@mui/material/Stack';
import { createSvgIcon } from '@mui/material/utils';
import Imagepicker from './photo';




export default function Videom() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View 
    style={{flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',}}><View style={{alignItems:'center'}}>
        <Text style={{fontWeight:'bold',alignItems:'center'}}>Demovideoplayer</Text></View>
      <View><Video
        ref={video}
        style={{ alignSelf: 'center',
        width: 320,
        height: 200,}}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      </View>
      <View
       style={{ flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15}}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
          
          <Imagepicker/>
        </View>
     
      </View>
  
  );
        }

const styles=StyleSheet.create({
  opocity:{
borderRadius:40,
    backgroundColor:'#4169e1',
    alignItems:'center',
    marginLeft:100,
    width:45,
    height:45
  
    
  },
k:{
    
    
}})
  