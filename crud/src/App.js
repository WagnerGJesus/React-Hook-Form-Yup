import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, View, Alert, Button} from 'react-native';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import styles from './App.styles';
import TextField from './components/TextField';
const App = () => {
  const fieldValidationSchema = yup.object().shape({
    email: yup
      .string()
      .required('O email não pode ser vazio')
      .email('Digite um email válido'),
    password: yup
      .string()
      .required('A senha não pode ser vazia')
      .min(6, 'A senha deve conter pelo menos 6 dígitos'),
  });

  const {register, setValue, handleSubmit, errors} = useForm({
    validationSchema: fieldValidationSchema,
  });
  const onSubmit = data => Alert.alert(data.email, data.password);

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#79AC34" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <TextField
            label={'Email'}
            error={errors?.email}
            placeholder={'Digite seu email'}
            onChangeText={text => setValue('email', text)}
          />
          <TextField
            secureTextEntry
            label={'Senha'}
            error={errors?.password}
            placeholder={'Digite sua senha'}
            onChangeText={text => setValue('password', text)}
          />
          <Button onPress={handleSubmit(onSubmit)} title={'Continuar'} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
