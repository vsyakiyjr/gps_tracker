import React, {useRef} from 'react';
import {View, ImageBackground, Text} from 'react-native';
import Toast from 'react-native-simple-toast';

// Components
import Input from '../../../ui/input/auth';
import Button from '../../../ui/button';

// Helpers
import * as Images from '../../../../helpers/images';

// Style
import {base} from './style';

export default function Login({fetchLogin}) {
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  function done() {
    const email = refEmail.current.getValue();
    if (email.length === 0) {
      Toast.show('Введите email');
      return;
    }
    const password = refPassword.current.getValue();
    if (password.length === 0) {
      Toast.show('Введите пароль');
      return;
    }

    fetchLogin({email, password});
  }

  return (
    <ImageBackground style={base.w1} source={Images.authBg}>
      <View style={base.w2}>
        <Text style={base.t1}>ВХОД</Text>
        <Input
          ref={refEmail}
          style={base.w3}
          placeholder="Email"
          // value="admin@gmail.com"
        />
        <Input
          ref={refPassword}
          style={base.w3}
          placeholder="Пароль"
          // value="password"
          secureTextEntry
        />
        <Button title="Войти" color="#426c85" onPress={done} />
      </View>
    </ImageBackground>
  );
}
