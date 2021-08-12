import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useTheme} from '../../theme';

const MyTarBar = ({state, descriptors, navigation}: any) => {
  const {Colors} = useTheme();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.white,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        paddingLeft: 14,
        paddingRight: 19,
      }}>
      {state.routes.map((route, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const icon =
          options.tabBarIcon === undefined ? null : options.tabBarIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            // accessibilityState={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            {icon !== null ? icon(isFocused) : null}
            <View style={{paddingVertical: 5}}>
              <Text
                style={{color: isFocused ? Colors.orange : Colors.grayLight}}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTarBar;
