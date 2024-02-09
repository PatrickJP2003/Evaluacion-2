import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ScreenImag1 = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://www.pokemon.com/static-assets/content-assets/cms2-es-es/img/watch-pokemon-tv/_tiles/where-to-watch/where-to-watch-169.png'}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});

export default ScreenImag1;


