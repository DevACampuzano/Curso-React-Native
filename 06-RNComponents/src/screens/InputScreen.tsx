import {
  StyleSheet,
  TextInput,
  ScrollView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {HeaderTitle, SwitchCustom, Text} from '../components';
import {styles} from '../theme/appTheme';
import {Platform} from 'react-native';
import {useForm} from '../hooks/useForm';
import {useContext} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const InputScreen = () => {
  const {onChange, isSubscribed, form} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });
  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  const style = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: dividerColor,
      borderRadius: 10,
      height: 50,
      paddingHorizontal: 10,
      marginVertical: 10,
      color: colors.text,
    },
    switchText: {
      fontSize: 25,
      color: colors.text,
    },
    switchRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10,
    },
  });

  return (
    <KeyboardAvoidingView
      style={styles.globalMargin}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={style.input}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
              placeholderTextColor={dividerColor}
            />
            <TextInput
              style={style.input}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
              placeholderTextColor={dividerColor}
            />
            <View style={style.switchRow}>
              <Text style={style.switchText}>Suscribirse: </Text>
              <SwitchCustom
                isOn={isSubscribed}
                onChange={value => onChange(value, 'isSubscribed')}
              />
            </View>
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <HeaderTitle title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={style.input}
              placeholder="Ingrese su telefono"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
              placeholderTextColor={dividerColor}
            />
            <View style={{height: 50}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InputScreen;
