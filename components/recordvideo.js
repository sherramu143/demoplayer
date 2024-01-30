import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const CameraComponent = () => {
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        console.log('Picture taken at', uri);
        // Handle the captured photo (e.g., save to state, display, etc.)
      } catch (error) {
        console.error('Error taking picture', error);
      }
    }
  };

  const toggleRecording = async () => {
    if (isRecording) {
      cameraRef.current.stopRecording();
      setIsRecording(false);
    } else {
      try {
        const { uri } = await cameraRef.current.recordAsync();
        console.log('Recording started at', uri);
        setIsRecording(true);
      } catch (error) {
        console.error('Error starting recording', error);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={cameraRef}>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}
          onPress={isRecording ? toggleRecording : takePicture}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>
            {isRecording ? 'Stop Recording' : 'Take Picture'}
          </Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

export default CameraComponent;
