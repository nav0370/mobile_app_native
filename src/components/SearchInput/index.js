import React from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';

import Colors from 'app/src/Theme/Colors';
import Images from 'app/src/Theme/Images';
import styles from './styles';

const SearchInput = (props) => {
  const { onTapSearch, value, onChange, placeholder } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inputWrap}>
        <TextInput
          style={styles.input}
          placeholder={placeholder || 'Searcy by title or author'}
          placeholderTextColor={Colors.darkGrey}
          autoCapitalize='none'
          value={value}
          onChangeText={(value) => onChange(value)}
        />
        <TouchableOpacity
          style={styles.iconWrap}
          onPress={() => onTapSearch(value)}
          activeOpacity={0.7}
        >
          <Image style={styles.icon} source={Images.searchIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchInput;
