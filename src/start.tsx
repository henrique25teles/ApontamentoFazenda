import React from 'react';
import { View, StyleSheet } from 'react-native'
import AppContainer from './routes'

export default function Start() {
  return (
      <View style={styles.container}>
        <View style={styles.navigator}>
            <AppContainer />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    navigator: {
        flex: 1,
    }
})