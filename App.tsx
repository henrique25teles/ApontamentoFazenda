import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import store, { persistor } from 'store'
import Start from 'start'

export default function App() {
  return (
    <View >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Start  />
        </PersistGate>
      </Provider>
    </View>
  );
}

