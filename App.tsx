import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {
  Center,
  NativeBaseProvider,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import AddTodo from './components/AddTodo';
import { db } from './firebase';

export default function App() {
  console.log(db);
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <StatusBar style='light' />

        <ScrollView>
          <VStack>
            <Center alignItems='center' justifyContent='center' />

            <Text style={styles.text}>lul</Text>
            <Text style={styles.text}>lul</Text>
            <Text style={styles.text}>lul</Text>
            <Text style={styles.text}>lul</Text>
            <Text style={styles.text}>lul</Text>
            <Text style={styles.text}>lul</Text>
          </VStack>
        </ScrollView>

        <AddTodo />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  text: {
    color: '#fff',
  },
});
