import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ModalComponent = ({ onPress }) => (
  <View style={styles.container}>
    <View style={styles.modalView}>
      <Text style={[styles.text, styles.textHeader]}>Resgate Efetuado</Text>
      <Text style={[styles.text, styles.textContent]}>
        O valor solicitado estará em sua conta em até 5 dias úteis{' '}
      </Text>
    </View>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>Novo Resgate</Text>
    </TouchableOpacity>
  </View>
);

export default ModalComponent;
