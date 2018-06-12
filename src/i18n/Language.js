import * as DeviceInfo from 'react-native-device-info';

export const isEnglish = () => {
  return DeviceInfo.getDeviceLocale() === 'en' || DeviceInfo.getDeviceLocale() === 'en-US'
};
