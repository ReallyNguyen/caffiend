import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export default function RootLayout() {

  const [loaded] = useFonts({
    PPEikoLightItalic: require('../assets/fonts/PPEiko-LightItalic.otf'),
    TTLightItalic: require('../assets/fonts/TT-Commons-Pro-Trial-Light-Italic.ttf'),
    TTLight: require('../assets/fonts/TT-Commons-Pro-Trial-Light.ttf'),
    TTMedium: require('../assets/fonts/TT-Commons-Pro-Trial-Medium.ttf'),
    TTRegular: require('../assets/fonts/TT-Commons-Pro-Trial-Regular.ttf'),

  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen 
      options={{headerShown: false}}
      name="index" />
    </Stack>
  );
}
