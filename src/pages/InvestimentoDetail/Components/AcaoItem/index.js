import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';
import Item from '../../../../components/Item';

const AcaoItem = ({ acao, onPress, changeText }) => (
  <View style={styles.container} onPress={onPress}>
    <Item label="AÇÃO" value={acao.nome} />
    <Item label="SALDO ACUMULADO" value={acao.valor} />
    <View style={styles.inputContainer}>
      <Text>Valor a resgatar</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => changeText(text, acao)}
        value={acao.input}
        keyboardType="numeric"
      />
    </View>
    {acao.message && <Text>{acao.message}</Text>}
  </View>
);

export default AcaoItem;
