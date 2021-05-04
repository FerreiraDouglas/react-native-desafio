import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  Modal,
  Animated,
  ScrollView,
} from 'react-native';

import Line from '../../components/Line';
import Header from '../../components/Header';
import Item from '../../components/Item';
import AcaoItem from './Components/AcaoItem';
import ModalComponent from '../../components/Modal';
// import Alerta from '../../components/Alerta';
import styles from './styles';

const InvestimentoDetail = ({ route }) => {
  const [investimento, setInvestimento] = useState(route?.params?.investimento);
  const [modalVisible, setModalVisible] = useState(false);
  const [state, setState] = useState({
    title: '',
    message: '',
    textButton: '',
  });

  const [acoes, setAcoes] = useState();

  useEffect(() => {
    investimento.acoes = investimento.acoes.map((acao) => ({
      ...acao,
      valor: (
        (investimento.saldoTotalDisponivel * acao.percentual) /
        100
      ).toFixed(2),
    }));
  }, [state]);

  const changeText = (text, item, index) => {
    const object = { ...investimento };
    object.acoes[index].input = text;
    if (text > item.valor) {
      object.acoes[
        index
      ].message = `O valor não pode ser maior que ${item.valor}`;
    } else if (text < item.valor) {
      object.acoes[index].messageInput = null;
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
    const valorAcao = investimento.acoes.find((acao) => acao.input !== null);

    const acoesValorMaior = investimento.acoes.filter(
      (acao) => acao.input > acao.valor
    );
    setAcoes(acoesValorMaior);

    if (valorAcao && valorAcao.valor > valorAcao.input) {
      setState({
        title: 'Resgate efetuado',
        message: 'O valor solicitado estará em sua conta em até 5 dias úteis',
        textButton: 'NOVO REGASTE',
      });
    } else if (!valorAcao || acoesValorMaior) {
      setState({
        title: 'Resgate não efeatuado',
        message: 'você deve preencher pelo menos um dos campos a resgatar',
        textButton: 'TENTAR NOVAMENTE',
      });
    }
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setState(null);
  };

  const renderList = () =>
    investimento.acoes.map((acao, index) => renderItem(acao, index));

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Modal animationType="slide" visible={modalVisible}>
        <ModalComponent
          isVisible={modalVisible}
          content={state}
          onPress={() => fecharModal()}
          investimento={investimento}
          acoes={acoes}
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
      <ScrollView>{renderList()}</ScrollView>
      <TouchableOpacity onPress={() => resgatar()} style={styles.button}>
        <Text style={styles.textButton}>CONFIRMAR RESGATE</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default InvestimentoDetail;
