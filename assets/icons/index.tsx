import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

export const Icons = {
  AntDesign: 'AntDesign',
  Fontisto: 'Fontisto',
  Entypo: 'Entypo',
  EvilIcons: 'EvilIcons',
  FontAwesome: 'FontAwesome',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  MaterialIcons: 'MaterialIcons',
  Feather: 'Feather',
  FontAwesome5: 'FontAwesome5',
  Ionicons: 'Ionicons',
};
export type IconType = keyof typeof Icons;

const Icon = (props: any) => {
  const {type = '', ...other} = props;
  switch (type) {
    case Icons.AntDesign:
      return <AntDesign {...other} />;
    case Icons.Entypo:
      return <Entypo {...other} />;

    case Icons.EvilIcons:
      return <EvilIcons {...other} />;

    case Icons.FontAwesome:
      return <FontAwesome {...other} />;

    case Icons.MaterialCommunityIcons:
      return <MaterialCommunityIcons {...other} />;

    case Icons.MaterialIcons:
      return <MaterialIcons {...other} />;

    case Icons.Fontisto:
      return <Fontisto {...other} />;

    case Icons.Feather:
      return <Feather {...other} />;

    case Icons.FontAwesome5:
      return <FontAwesome5 {...other} />;

    case Icons.Ionicons:
      return <Ionicons {...other} />;

    default:
      return null;
  }
};

export default Icon;
