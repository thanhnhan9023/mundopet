import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import Images from '../../../assets/images';
import TypeAction from '../../../store/actions/ActionAuth/TypeContStan';
import Button from '../../components/Button/Button';
import {useTheme} from '../../theme';
import {LogOutRequest} from '../../../store/actions/ActionAuth/AuthAction';
import api from '../../utils/api';
const {Colors} = useTheme();
const Profile = () => {
  const dispatch = useDispatch();
  const LogOutAccount = () => {
    dispatch(LogOutRequest());
  };
  useEffect(() => {
    api
      .get('https://apioreo.herokuapp.com/api/User/GetUser')
      .then(res => console.log(res))
      .catch(err => console.log('loi get info User', err.response.data));
  }, []);
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.containerImg}></View>
        <View style={{paddingHorizontal: 10}}>
          <Text>{'Chào'}</Text>
          <View style={{height: 10}}></View>
          <View
            style={{
              backgroundColor: Colors.white,
              flexDirection: 'row',
              width: 200,
              height: 50,
              paddingHorizontal: 10,
              justifyContent: 'space-around',
              alignItems: 'center',
              borderRadius: 8,
            }}>
            <Text style={styles.txt}>{'Hạng Bạc'}</Text>
            <View
              style={{
                borderLeftWidth: 1,
                width: 10,
                height: 25,
                borderColor: Colors.orange,
              }}></View>
            <Image source={Images.icRank} style={{width: 30, height: 30}} />
            <Text style={styles.txt}>{'100'}</Text>
          </View>
        </View>
      </View>
      <Button txtTitle={'Đăng xuất'} onPress={LogOutAccount} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: Colors.orange,
    paddingHorizontal: 15,
    paddingVertical: 35,
    flexDirection: 'row',
  },
  containerImg: {
    width: 75,
    height: 75,
    backgroundColor: Colors.grayLight,
    borderRadius: 60,
  },
  txt: {
    color: Colors.orange,
    fontSize: 16,
  },
});
