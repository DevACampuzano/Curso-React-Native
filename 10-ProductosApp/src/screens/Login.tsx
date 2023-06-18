import {useEffect, useContext} from 'react';
import {
  TextInput,
  Platform,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {userForm} from '../hooks';
import {loginStyles} from '../theme/Login';
import {AuthContext} from '../context/AuthContext';
import {Backgraund, Text, WhiteLogo} from '../components';

interface Props extends StackScreenProps<any, any> {}

const Login = ({navigation}: Props) => {
  const {signIn, errorMessage, removeError} = useContext(AuthContext);
  const {email, password, onChange} = userForm({
    email: '',
    password: '',
  });
  useEffect(() => {
    if (errorMessage.length === 0) {
      return;
    }
    Alert.alert('Login incorrecto', errorMessage, [
      {text: 'Ok', onPress: removeError},
    ]);
  }, [errorMessage]);

  const onLogin = () => {
    console.log({email, password});
    Keyboard.dismiss();
    signIn({correo: email, password});
  };
  return (
    <>
      <Backgraund />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Login</Text>
          <Text style={loginStyles.label}>Email: </Text>
          <TextInput
            placeholder="Ingrese su email:"
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIOS,
            ]}
            selectionColor="black"
            onChangeText={value => onChange(value, 'email')}
            value={email}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={loginStyles.label}>Contraseña: </Text>
          <TextInput
            placeholder="********"
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFieldIOS,
            ]}
            selectionColor="black"
            onChangeText={value => onChange(value, 'password')}
            value={password}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={onLogin}
          />
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={loginStyles.button}
              onPress={onLogin}>
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>

          <View style={loginStyles.newUserContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.replace('Register')}>
              <Text style={loginStyles.buttonText}>Nueva Cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
