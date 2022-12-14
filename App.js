import React from 'react';
import { StyleSheet } from 'react-native';
import AppNavigation from './AppNavigation';

export default function App() {

  return (
    <AppNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
