import { createSvgIcon } from '@mui/material/utils';
import { useState, useEffect } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
//import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
//import DeleteIcon from '@mui/icons-material/Delete';
import { StyleSheet ,Text} from 'react-native';
//import Addphoto from './addphoto';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ig from './displayimage';
import CameraComponent from './recordvideo';
import React, { useRef } from 'react';
import { Camera } from 'expo-camera';


//import { SecurityUpdate } from '@mui/icons-material';
//import ScreenB from '../src/displayimg';
//import openCamera from './addcamera';

const PlusIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  'Plus',
);

const Imagepicker = ({navigation}) => {
  const [Icon1] = useState(new Animated.Value(0));
  const [Icon2] = useState(new Animated.Value(0));
  const [Icon3] = useState(new Animated.Value(0));
  const [pop, setPop] = useState(false);
  const [Imge,setImge]=useState();
  const [G,setG]=useState();
  const [isRecording, setIsRecording] = useState(false);
  const[HasCamerPermission,setHasCamerPermission]=useState(null);
  const cameraRef = useRef(null);


  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access media library denied');
      }
    })();
  }, []);

  const Pickimage=async ()=>{try {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      
    });
    const openCamera = async () => {
        try {
          const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
    
          if (!result.cancelled) {
            setG(result.assets[0].uri);
    
            
          }
        } catch (error) {
          console.error("Error opening camera:", error);
        }
      };
    if (!result.cancelled) {
      setImge(result.assets[0].uri);

      console.log(Imge);
      
      //<ScreenB I={Imge}/>
     if(Imge===result.assets[0].uri){
      }

      //console.log('Image URL (from state):', result[0].uri,result.assets[0].uri);
      //console.log(result.assets[0].uri);
        //    let k=result.assets[0].uri;
      //onsole.log('Image URL (from variable k):', k);
     
    } else {
      console.log('Image picking canceled');
    }
  } catch (error) {
    console.error('Error picking image:', error);
  }
};





  
    /*let result=await ImagePicker.launchImageLibraryAsync({
   mediaTypes: ImagePicker.MediaTypeOptions.Images,
   //here we are only uploading the images
   allowsEditing:true,
   aspect:[4,3],
   quality:1,
})
if(!result.cancelled){
   
    setImage(result.uri);
    console.log(result.uri);
console.log('Image URL:', result.uri);
}
/*/
const recordVideo=async ()=>{
    try{
        const {status} = await Camera.requestPermissionsAsync();
        setHasCamerPermission(status==='granted');
        
        const result = await ImagePicker.launchCameraAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Videos,
            allowsEditing:true,
            aspect:[4,3],
            quality:1,
        })
        if(!result.canceled){
            console.log("Recoded Video URI:", result.uri);

        }

    }
    catch(error){
        console.log("error recording video:" ,error);

    }
}



  const Popin = () => {
    setPop(true);
    Animated.timing(Icon1, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(Icon2, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(Icon3, {
      toValue: 130,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const imghandle=()=>{
   
  }
  const openCamera =async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setG(result.assets[0].uri);
        console.log(G);
      }
    } catch (error) {
      console.error("Error opening camera:", error);}
    };
 /* const addphoto =()=>{
    return(
        console.log('hello image')
    )
  }
/*/
  const Popout = () => {
    setPop(false);
    Animated.timing(Icon1, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(Icon2, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(Icon3, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View>
    <View>
     
    <Animated.View style={{ bottom: Icon1 }}>
        <TouchableOpacity style={K.Opocity} onPress={Pickimage}>
            {Imge &&  <Image source={{ uri: Imge }} style={K.Img} resizeMode="cover"  />
         }
        <Icon name="photo-library" size={30} color="black" />
     
      
        
        </TouchableOpacity>
        </Animated.View>
        
        <Animated.View style={{ bottom: Icon2, right: Icon2 }}>
        <TouchableOpacity style={K.Opocity}>
        <Icon name="videocam" size={30} color="black" onPress={recordVideo}/>
        </TouchableOpacity></Animated.View>
        <Animated.View style={{ right: Icon3 }}>
        <TouchableOpacity style={K.Opocity} onPress={openCamera}>
        <Icon name="camera" size={22} color="black" />
        {G && <Image source={{ uri: G }} style={K.I} resizeMode="cover"  />}
        </TouchableOpacity>
      </Animated.View>
      
      <TouchableOpacity style={K.Opocity} onPress={() => (pop === false ? Popin() : Popout())}>
      <Icon name="add" size={22} color="black" />
      </TouchableOpacity>
     
    </View>
        </View>
  );
};

const K = StyleSheet.create({
  Opocity: {
    backgroundColor: 'royalblue',
    padding: 10,
    borderRadius: 50,
    marginVertical: 10,
    width:40,
    height:40,
    position:'absolute',
    marginTop:80,
    marginLeft:100
    
    
  },
  Img: {
    width:100,
    height: 200,
 right:200,
 bottom:40,
    borderRadius: 10,
    marginRight:200,
  
    
    
  },
  M:{
    fontWeight:'bold',fontSize:50,marginTop:15
  },N:{ marginTop: 100, marginLeft: 40 },
  im:{
    width:100,
    height:100,
    
  },
  I:{
    width:100,
    height:75
  }
  /*A:{
    position:'absolute',
    backgroundColor: 'royalblue',
    padding: 10,
    borderRadius: 50,
    marginVertical: 10,
    width:40,
    height:40,
   
  },
  B:{position:'absolute',

  position:'absolute',
  backgroundColor: 'royalblue',
  padding: 10,
  borderRadius: 50,
  marginVertical: 10,
  width:40,
  height:40,
  },
  C:{
   
    position:'absolute',
    backgroundColor: 'royalblue',
    padding: 10,
    borderRadius: 50,
    marginVertical: 10,
    width:40,
    height:40,
  }*/
  
})

export default Imagepicker;
