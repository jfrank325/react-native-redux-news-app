import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as newsAction from '../redux/actions/newsAction';

const Card = ({ navigation, title, description, image, url }) => {
  const dispatch = useDispatch();
  const isFav = useSelector((state) => state.news.favorites.some((article) => article.url === url));

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('NewsDetails', {
          articleUrl: url,
        })
      }
    >
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: image ? image : 'https://via.placeholder.com/300' }} style={styles.image} />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title && title.length > 30 ? title.slice(0, 30) + '...' : title}</Text>
          <MaterialIcons
            onPress={() => {
              dispatch(newsAction.toggleFavorites(url));
            }}
            name={isFav ? 'favorite' : 'favorite-border'}
            color="#72bcd4"
            size={24}
          />
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            {description && description.length > 150 ? description.slice(0, 150) + '...' : description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  imageWrapper: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  titleWrapper: {
    height: '10%',
    paddingHorizontal: 15,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 20,
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
  },
  description: {
    fontFamily: 'Roboto',
    fontSize: 15,
    marginTop: 10,
  },
});
