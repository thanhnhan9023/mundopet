import React from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  TextStyle,
} from 'react-native';

interface ButtonProps {
  txtTitle: string;
  styleContainer?: StyleProp<ViewStyle>;
  styleTxt?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
  txtTitle,
  styleContainer,
  styleTxt,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, styleContainer]}
      onPress={onPress}>
      <Text style={[styles.txt, styleTxt]}>{txtTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  txt: {
    fontSize: 15,
  },
});
