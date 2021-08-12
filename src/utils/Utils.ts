import AsyncStorage from '@react-native-async-storage/async-storage';

async function ngetStore(keys: string, defaultValue = null) {
  let temp = await AsyncStorage.getItem(keys);
  if (temp == null) return defaultValue;
  try {
    let tempValue = JSON.parse(temp);
    return tempValue;
  } catch (error) {
    return temp;
  }
}

// async function ngetStorage(keys: string, defaultValue = null) {
//   let temp = await AsyncStorage.getItem(keys);
//   console.log(temp);
//   if (temp == null) return defaultValue;
//   try {
//     let tempValue = JSON.parse(temp);
//     return tempValue;
//   } catch (error) {
//     return temp;
//   }
// }

async function nsetStore(keys: string, value: any) {
  try {
    value = JSON.stringify(value);
    await AsyncStorage.setItem(keys, value);
  } catch (e) {
    // saving error
  }
}

const Utils = {
  ngetStore,
  //   ngetStorage,
  nsetStore,
};
export default Utils;
