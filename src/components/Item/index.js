import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Item = ({ label, value }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{label}</Text>
    <Text style={styles.text}>{value}</Text>
  </View>
);

export default Item;
