import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.outHeader}>
        <Text style={styles.inHeader}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    outHeader: {
      backgroundColor: '#f8f8f8',
      padding: 12,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4
    },
    inHeader: {
      fontSize: 20
    }
});
