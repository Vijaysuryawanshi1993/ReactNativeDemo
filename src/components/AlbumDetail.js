import React from 'react';
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'

export default class AlbumDetail extends React.Component {
    render() {
      return (
          <Card>
            <CardSection>
              <View style={styles.headerImageLeft}>
                <Image
                style={styles.headerThumbnail}
                source={{ uri: this.props.data.thumbnail_image }}
                />
              </View>
              <View style={styles.headerContentRight}>
                <Text style={{ fontSize: 18 }}>{this.props.data.title}</Text>
                <Text>{this.props.data.artist}</Text>
              </View>
            </CardSection>
            <CardSection>
              <Image style={styles.imageStyle} source={{ uri: this.props.data.image }} />
            </CardSection>

            <CardSection>
              <Button onPress={() => Linking.openURL(this.props.data.url)} >
                Buy Now
              </Button>
            </CardSection>
          </Card>
      );
    }
}

const styles = StyleSheet.create({
  headerContentRight: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerImageLeft: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerThumbnail: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});
