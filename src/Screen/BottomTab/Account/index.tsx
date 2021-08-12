import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../../components/Button/Button';
import Header from '../../../navigation/component/Header/Header';
import NavigationServices from '../../../navigation/NavigationServices';
import {useTheme} from '../../../theme';

const index = () => {
  const {Colors} = useTheme();
  return (
    <View style={styles.container}>
      <Header
        LeftStyle={<View></View>}
        txtTitle={'Tài Khoản'}
        RightStyle={<View></View>}
      />
      <View style={styles.btnStyle}>
        <Button
          styleContainer={[
            styles.btnTwo,
            {flex: 1, backgroundColor: Colors.orange},
          ]}
          txtTitle={'Đăng Nhập'}
          styleTxt={{color: Colors.white}}
          onPress={() => NavigationServices.navigate('Login')}
        />
        <View style={{width: 9}}></View>
        <Button
          styleContainer={[
            styles.btnOne,
            {
              flex: 1,
              backgroundColor: Colors.white,
              borderColor: Colors.orange,
            },
          ]}
          styleTxt={[{color: Colors.orange}]}
          txtTitle={'Đăng Kí'}
          // onPress={() => NavigationServices.navigate('')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnStyle: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  btnOne: {
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
  },
  btnTwo: {
    height: 45,
    borderRadius: 10,
  },
});

export default index;
