import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ProfileDummy} from '../../../assets';
const HomeWelcome = type => {
  if (type == 'home') {
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>Tasker</Text>
      </View>
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/800px-Search_Icon.svg.png',
        }}
        style={styles.profile}
      />
      <Image source={ProfileDummy} style={styles.profile} />
      <Image source={ProfileDummy} style={styles.profile} />
    </View>;
  }

  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>Tasker</Text>
      </View>
      <Image source={ProfileDummy} style={styles.profile} />
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
    width: 50,
  },
});
