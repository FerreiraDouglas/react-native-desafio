import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Line from '../../components/Line';
import styles from './styles';
import api from '../../services/api';
import InvestimentoItem from './Components/InvestimentoItem';

const Home = () => {
  const [investimentos, setInvestimentos] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const listarInvestimentos = async () => {
      try {
        const { data } = await api.get('5e76797e2f0000f057986099');
        setInvestimentos(data.response.data.listaInvestimentos);
      } catch (error) {
        console.tron.log(error);
      }
    };

    listarInvestimentos();
  }, []);

  const renderItem = (item) => (
    <InvestimentoItem
      onPress={() => navigation.navigate('Resgate', { investimento: item })}
      investimento={item}
    />
  );

  const renderList = () => (
    <FlatList
      data={investimentos}
      renderItem={({ item }) => renderItem(item)}
      keyExtractor={(item) => item.id}
    />
  );

  return (
    <View style={styles.container}>
      <Line />
      <View style={styles.header}>
        <Text>Investimentos</Text>
        <Text>$RS</Text>
      </View>
      <View>{renderList()}</View>
    </View>
  );
};

export default Home;
