import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

const FavoritesScreen = ({ navigation }) => {
  const favorites = useSelector((state) => state.news.favorites);
  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <Card
          url={item.url}
          title={item.title}
          description={item.description}
          image={item.urlToImage}
          navigation={navigation}
        />
      )}
    />
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
