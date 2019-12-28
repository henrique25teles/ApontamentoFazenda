import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import Start from 'start'

export default function App() {
  return (
    <View >
      <Start />
    </View>
  );
}

