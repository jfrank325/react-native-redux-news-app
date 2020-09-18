import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as newsAction from '../redux/actions/newsAction';
//rnfes

const NewsDetailsScreen = (props) => {
  const { articleUrl } = props.route.params;
  const dispatch = useDispatch();
  const article = useSelector((state) => state.news.articles.articles.find((article) => article.url === articleUrl));
  const isFav = useSelector((state) => state.news.favorites.some((article) => article.url === articleUrl));

  console.log(article);
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <View>
        <ImageBackground source={{ uri: article.urlToImage }} style={styles.image}>
          <View style={styles.titleContainer}>
            <Text style={styles.author}>{article.author}</Text>
            <MaterialIcons
              onPress={() => {
                dispatch(newsAction.toggleFavorites(article.url));
              }}
              name={isFav ? 'favorite' : 'favorite-border'}
              color="#72bcd4"
              size={24}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{article.description}</Text>
      </View>
    </View>
  );
};

export default NewsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  author: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'white',
  },
  description: {
    margin: 10,
  },
  descriptionText: {
    fontSize: 20,
    fontFamily: 'Roboto',
  },
});
