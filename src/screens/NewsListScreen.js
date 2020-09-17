import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import * as newsAction from '../redux/actions/newsAction';

const NewsListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsAction.fetchArticles());
  }, [dispatch]);

  const { articles } = useSelector((state) => state.news.articles);

  return (
    <FlatList
      data={articles}
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

export default NewsListScreen;

const styles = StyleSheet.create({});
