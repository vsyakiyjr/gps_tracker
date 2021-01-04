import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import moment from 'moment';
import Image from 'react-native-scalable-image';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

// Components
import * as Images from '../../../../helpers/images';

// Style
import {base} from './style';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  onChangeText = (value) => this.setState({value});

  focus = () => this.input.focus();

  ref = (r) => (this.input = r);

  getValue() {
    return this.state.value;
  }

  handleConfirm = (value) => {
    const {onChangeDate} = this.props;
    onChangeDate(value);
    this.setState({
      show: false,
    });
  };

  showDatePicker = () => this.setState({show: true});
  hideDatePicker = () => this.setState({show: false});

  render() {
    const {show} = this.state;
    const {style, value, placeholder, maximumDate, disabled} = this.props;

    return (
      <TouchableOpacity
        style={[base.w1, style]}
        disabled={disabled}
        onPress={this.showDatePicker}>
        <Text style={!disabled ? base.w2 : base.w3}>
          {value ? moment(value).format('DD.MM.YYYY HH:mm') : placeholder}
        </Text>
        <Image source={Images.calendar} width={wp(4)} />
        <DateTimePickerModal
          isVisible={show}
          mode="datetime"
          maximumDate={maximumDate || new Date()}
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
        />
      </TouchableOpacity>
    );
  }
}
