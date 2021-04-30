import React, { useEffect, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  Modal,
} from 'react-native';
import Line from '../../components/Line';
import Header from '../../components/Header';
import Item from '../../components/Item';
import AcaoItem from './Components/AcaoItem';
import ModalComponent from '../../components/Modal';
import styles from './styles';

const InvestimentoDetail = ({ route }) => {
  const [investimento, setInvestimento] = useState(route?.params?.investimento);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {}, []);

  investimento.acoes = investimento.acoes.map((acao) => ({
    ...acao,
    valor: (
      (investimento.saldoTotalDisponivel * acao.percentual) /
      100
    ).toFixed(2),
  }));

  const changeText = (text, item, index) => {
    const object = { ...investimento };
    object.acoes[index].input = text;
    if (text > item.valor) {
      object.acoes[index].message = `o valor não ser maior que ${item.valor}`;
    } else if (text < item.valor) {
      object.acoes[index].message = null;
    }
    setInvestimento(object);
  };

  const renderItem = (item, index) => (
    <AcaoItem
      acao={item}
      changeText={(text) => changeText(text, item, index)}
    />
  );

  const resgatar = () => {
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };

  const renderList = () => (
    <FlatList
      data={investimento.acoes}
      key={(index) => index}
      renderItem={({ item, index }) => renderItem(item, index)}
    />
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Modal animationType="slide" visible={modalVisible}>
        <ModalComponent
          isVisible={modalVisible}
          onPress={() => fecharModal()}
        />
      </Modal>
      <Line />
      <Header title="DADOS DO INVESTIMENTO" />
      <Item label="NOME" value={investimento.nome} />
      <Item
        label="SALDO TOTAL DISPONIVEL"
        value={investimento.saldoTotalDisponivel}
      />
      <Header title="RESGATE DO SEU JEITO" />
      {renderList()}
      <TouchableOpacity onPress={() => resgatar()} style={styles.button}>
        <Text style={styles.textButton}>CONFIRMAR RESGATE</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default InvestimentoDetail;
