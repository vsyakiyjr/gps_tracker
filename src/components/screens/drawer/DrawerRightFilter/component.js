import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Toast from 'react-native-simple-toast';
import moment from 'moment';

// Components
import Header from '../../../ui/header/filter';
import Button from '../../../ui/button';
import Input from '../../../ui/input/filter';

// Style
import {base} from './style';

export default function DrawerRightFilter({_id, access_token, fetchTrips}) {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  function onChangeFrom(date) {
    setFrom(date);
  }

  function onChangeTo(date) {
    setTo(date);
  }

  function setPeriod(p) {
    const now = moment();
    const fromNow = moment();
    switch (p) {
      case 'd': {
        setTo(now);
        setFrom(fromNow.startOf('day'));
        break;
      }
      case 'w': {
        setTo(now);
        setFrom(fromNow.subtract(1, 'week').startOf('day'));
        break;
      }
      case 'm': {
        setTo(now);
        setFrom(fromNow.subtract(1, 'month').startOf('day'));
        break;
      }
    }
  }

  function done() {
    if (!from && !to) {
      Toast.show('Выберите период');
      return;
    }

    const query = {
      car_id: _id,
      from: moment(from).format('x'),
      upTo: moment(to).format('x'),
      withMovings: 1,
    };
    fetchTrips({access_token, query});
  }

  return (
    <View style={base.w1}>
      <Header />
      {!_id ? (
        <Text style={base.t1}>
          Выберите машину, чтобы посмотреть ее поездки
        </Text>
      ) : (
        <>
          <View style={base.w2}>
            <Button
              style={base.w3}
              title="День"
              color="#426c85"
              onPress={() => setPeriod('d')}
            />
            <Button
              style={base.w3}
              title="Неделя"
              color="#426c85"
              onPress={() => setPeriod('w')}
            />
            <Button
              style={base.w3}
              title="Месяц"
              color="#426c85"
              onPress={() => setPeriod('m')}
            />
          </View>
          <Input
            style={base.w4}
            placeholder="От"
            value={from}
            onChangeDate={onChangeFrom}
          />
          <Input
            style={base.w4}
            placeholder="До"
            value={to}
            onChangeDate={onChangeTo}
          />
          <View style={base.w2}>
            <Button
              style={base.w3}
              title="Очистить"
              color="#426c85"
              onPress={() => {
                setPeriod();
                setFrom();
                setTo();
              }}
            />
            <Button
              style={base.w3}
              title="Отобразить"
              color="#426c85"
              onPress={done}
            />
          </View>
        </>
      )}
    </View>
  );
}
