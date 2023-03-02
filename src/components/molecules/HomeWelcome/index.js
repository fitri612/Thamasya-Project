import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../../assets';
const HomeWelcome = type => {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>Tasker</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/800px-Search_Icon.svg.png',
          }}
          style={styles.profile}
        />
        <Image
          source={{
            uri: 'https://www.pngarts.com/files/11/Silhouette-Youtube-Bell-Icon-PNG-Pic.png',
          }}
          style={styles.profile}
        />
        <Image source={{
            uri: 'https://global7.id/wp-content/uploads/2022/07/IMG_20220718_234722.jpg',
        }} style={styles.profile} />
      </View>
    </View>
  );
};

export default HomeWelcome;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  appName: {fontSize: 20, fontFamily: 'Raleway-Bold', color: '#020202'},
  desc: {fontSize: 16, fontFamily: 'Raleway-Regular', color: '#8D92A3'},
  profile: {
    width: 30,
    height: 30,
    marginLeft: 12,
    borderRadius: 8,
  },
});
