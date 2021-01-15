import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { fetchOrders } from '../../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchData = () => {
    setIsLoading(true);
    console.log('front-mobile', 'inicio...');
    fetchOrders()
      .then( response => setOrders(response.data))
      .catch(() => Alert.alert('Houve um erro ao buscar os pedidos'))
      .finally(() => setIsLoading(false));
  }

  // técnica de renderização após confirmação do pedido, que chama esta página
  // através da rota /orders
  useEffect( () => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused] );

  const handleOnPress = (order: Order) => {
    console.log('front-mobile clicou no Card');
    navigation.navigate('OrderDetails', {
      order
    });
  }

  return (
    <>
        <Header />
        <ScrollView style={styles.container}>
          {
            isLoading ? (
              <Text>Buscando pedidos...</Text>
            ) : (
              orders.map( order => (
                <TouchableWithoutFeedback 
                  onPress={() => handleOnPress(order)} 
                  key={order.id}
                >
                  <OrderCard order={order} />
                </TouchableWithoutFeedback>
               ) )
          
          )}
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingRight: '5%',
      paddingLeft: '5%',
    }
});

export default Orders;