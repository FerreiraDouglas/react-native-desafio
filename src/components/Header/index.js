import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text>{title}</Text>
  </View>
);

export default Header;
