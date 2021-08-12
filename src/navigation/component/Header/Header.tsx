import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  Image,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Images from '../../../../assets/images';
import {useTheme} from '../../../theme';
import NavigationServices from '../../NavigationServices';

interface HeaderProps {
  txtTitle: string | null;
  isIconLef?: boolean;
  isIconRight?: boolean;
  LeftStyle?: any;
  RightStyle?: any;
}

const Header: React.FC<HeaderProps> = props => {
  const {
    isIconLef = false,
    isIconRight = false,
    txtTitle = '',
    LeftStyle,
    RightStyle,
  } = props;
  const {Colors} = useTheme();
  return (
    <View style={{...styles.container, backgroundColor: Colors.orange}}>
      {LeftStyle}
      {!isIconLef ? null : (
        <TouchableOpacity onPress={() => NavigationServices.goBack()}>
          <Image
            source={Images.icGoBack}
            style={styles.GoBack}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
      <View style={{...styles.txtTitle}}>
        <Text style={{color: Colors.white, fontSize: 16, fontWeight: 'bold'}}>
          {txtTitle}
        </Text>
      </View>
      {!isIconRight ? null : (
        <TouchableOpacity onPress={() => NavigationServices.goBack()}>
          <Image
            source={Images.icGoBack}
            style={styles.GoBack}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      )}
      {RightStyle}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 34,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  GoBack: {
    width: 30,
    height: 30,
  },
  txtTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
});
