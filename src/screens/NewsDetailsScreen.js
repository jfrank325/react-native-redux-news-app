import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
//rnfes

const NewsDetailsScreen = (props) => {
  const { articleUrl } = props.route.params;

  const article = useSelector((state = state.news.articles.articles.find((article) => article.url === articleUrl)));
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{article.title}</Text>
      </View>
      <View>
        <ImageBackground source={{ uri: article.urlToImage }} style={styles.image}>
          <View style={styles.titleContainer}></View>
          <Text style={styles.author}>{article.author}</Text>
          <MaterialIcons />
        </ImageBackground>
      </View>
      <View style={styles.description}>
        <Text style={styles.container}>{article.description}</Text>
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
