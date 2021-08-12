import React, {useEffect, useState, useMemo, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TextInputProps,
} from 'react-native';
import Header from '../../navigation/component/Header/Header';
import {useForm, Controller} from 'react-hook-form';
import {useTheme} from '../../theme';
import Button from '../../components/Button/Button';
import {
  LoginAccountRequest,
  LoginClearError,
} from '../../../store/actions/ActionAuth/AuthAction';
import {useSelector, useDispatch} from 'react-redux';
import {navigate} from '../../navigation/NavigationServices';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginValidate} from './validation';
import TextInputs from '../../components/base/TextInput/TextInputs';

const defaultValues = {email: '', password: ''};
const {Colors} = useTheme();
const Login = () => {
  const {
    control,
    handleSubmit,
    setFocus,
    reset,
    formState: {errors, isSubmitted},
  } = useForm({
    resolver: yupResolver(loginValidate),
  });
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const error = useSelector((state: any) => state.user.error);
  const dispatch = useDispatch();
  const onSubmit = (val: any) => {
    console.log('dang nhap');
    dispatch(LoginAccountRequest(val));
    reset();
  };
  useEffect(() => {
    if (isAuth === true) {
      navigate('Profile');
      return;
    }
    if (error != null) {
      Alert.alert(error.messge);
      dispatch(LoginClearError());
    }
  }, [isAuth, error]);
  return (
    <View>
      <Header
        isIconLef={true}
        RightStyle={<View></View>}
        txtTitle={'Đăng Nhập'}
      />
      <View style={styles.containerInput}>
        <Text style={styles.txtPhone}>{'Số Điện Thoại'}</Text>
        <TextInputs
          control={control}
          name={'Email'}
          onSubmitEditing={() => {
            setFocus('Password');
          }}
          style={styles.input}
        />
        {/* <Controller
          control={control}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <TextInput
              ref={ref}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              onSubmitEditing={() => setFocus('Password')}
              value={value}
            />
          )}
          name="Email"
          defaultValue=""
        /> */}
        {errors.Email && <Text>{'Bạn phải nhập email'}</Text>}
        <View style={{height: 15}} />
        <Text style={styles.txtPhone}>{'Mật Khẩu'}</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value, ref}}) => (
            <TextInput
              ref={ref}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="Password"
          defaultValue=""
        />
        {errors.Password && isSubmitted ? (
          <Text>{'Mật khẩu không được bỏ trống'}</Text>
        ) : null}
        <View style={styles.containerForgetPassWord}>
          <Text style={styles.txtForgetPassWord}>{'Quên Mật Khẩu?'}</Text>
        </View>
      </View>
      <View style={styles.containerBtn}>
        <Button
          onPress={handleSubmit(onSubmit)}
          styleTxt={[{color: Colors.white}]}
          txtTitle={'Đăng Nhập'}
          styleContainer={{
            width: '100%',
            height: 45,
            backgroundColor: Colors.orange,
            borderRadius: 10,
          }}
        />
      </View>
      <View style={styles.containerSignUp}>
        <Text>{'Bạn chưa có tài khoản?'}</Text>
        <View style={{width: 5}} />
        <Text style={styles.txtSignUp}>{'Đăng kí'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  txtPhone: {
    color: Colors.grayLight,
    fontWeight: 'bold',
  },
  input: {
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayLight,
  },
  containerForgetPassWord: {
    paddingVertical: 9,
    alignItems: 'flex-end',
  },
  txtForgetPassWord: {
    color: Colors.orange,
    lineHeight: 16,
    fontSize: 15,
  },
  containerBtn: {
    paddingVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 67,
  },
  containerSignUp: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'center',
  },
  txtSignUp: {
    color: Colors.orange,
  },
});

export default Login;
