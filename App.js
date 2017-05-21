import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header text={'Movies!'} />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#00ee00ee',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
