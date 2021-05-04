import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import styles from './styles';
import Item from '../../../../components/Item';

const AcaoItem = ({ acao, onPress, changeText }) => {
  const [input, setInput] = useState();

  return (
    <View style={styles.container} onPress={onPress}>
      <Item label="AÇÃO" value={acao.nome} />
      <Item label="SALDO ACUMULADO" value={acao.valor} />
      <View style={styles.inputContainer}>
        <Text>Valor a resgatar</Text>
        <CurrencyInput
          containerStyle={styles.input}
          value={input}
          unit="R$"
          delimiter=","
          separator="."
          onChangeValue={setInput}
          onChangeText={() => {
            changeText(input, acao);
          }}
        />
      </View>
      {acao.messageInput && <Text>{acao.messageInput}</Text>}
    </View>
  );
};

export default AcaoItem;
