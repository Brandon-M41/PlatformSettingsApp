import {Platform} from 'react-native';
export const isAndroid = Platform.OS === 'android';
export const PLATFORM_COLORS = {
android: {
primary: '#2196F3',
background: '#f5f5f5',
text: '#212121',
},
};
export const getCurrentPlatformColors = () => {
return PLATFORM_COLORS[Platform.OS] || PLATFORM_COLORS.android;
};