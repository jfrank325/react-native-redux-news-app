import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'android' ? '#72bcd4' : '#ffffff',
    padding: 15,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },
  title: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
    color: Platform.OS === 'android' ? '#ffffff' : '#72bcd4',
  },
});

export default Header;
