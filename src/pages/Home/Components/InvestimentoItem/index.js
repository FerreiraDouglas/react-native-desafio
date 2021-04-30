import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const InvestimentoItem = ({ investimento, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.header}>
      <Text>{investimento.nome}</Text>
      <Text>{investimento.saldoTotalDisponivel}</Text>
    </View>
    <View>
      <Text>{investimento.objetivo}</Text>
    </View>
  </TouchableOpacity>
);

export default InvestimentoItem;
