import React, {useEffect} from 'react';
import {StatusBar, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Components
import ReduxView from './store';
import NetworkIndicator from './components/ui/base/NetworkIndicator';
import Route from './routes';

// Moment locate
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

export default function App() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('black');
    }
  }, []);

  return (
    <SafeAreaProvider>
      <ReduxView>
        <NetworkIndicator />
        <Route />
      </ReduxView>
    </SafeAreaProvider>
  );
}
