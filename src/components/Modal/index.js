import React, { useState } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const ModalComponent = ({ onPress, content, acoes }) => (
  <View style={styles.container}>
    <View style={styles.modalView}>
      <Text style={[styles.text, styles.textHeader]}>{content.title}</Text>
      {acoes &&
        acoes.map((acao) => (
          <Text style={[styles.text, styles.textContent]}>
            foi digitado um valor invalido na ação {acao.nome}, que o maximo
            disponivel e {acao.valor}
          </Text>
        ))}
      {!acoes.lenght && (
        <Text style={[styles.text, styles.textContent]}>{content.message}</Text>
      )}
    </View>
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{content.textButton}</Text>
    </TouchableOpacity>
  </View>
);

export default ModalComponent;
