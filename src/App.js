import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ReduxView from './store';
import NetworkIndicator from './components/ui/base/NetworkIndicator';
import Route from './routes';

import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxView>
        <NetworkIndicator />
        <Route />
      </ReduxView>
    </SafeAreaProvider>
  );
}
