import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {Input} from "@/components/input/Input";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

export default function TabOneScreen() {
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Input
          iconLeft="user"
          iconLeftStyle={{ color: 'red' }}
          iconLeftAction={() => console.log('Icon Left Pressed')}
          placeholder="Username"
          onChangeText={(text) => console.log(text)}
      />
      <Input
          iconRight="search"
          placeholder="Search"
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
