import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ProfileDummy, Search, TourDummy1} from '../../../assets';

const TourCard = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Image source={icon} style={styles.image} />
        </View>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TourCard;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 150,
    height: 70,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 16,
    borderColor: '#EAEAF0',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    overflow: 'hidden',
    marginStart: 8,
    marginEnd: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Raleway-SemiBold',
    color: '#020202',
    textAlign: 'center',
    marginTop: 10,
  },
  contentText: {
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
    color: '#8D92A3',
    // marginLeft: 0,
    textAlign: 'center',
    paddingVertical: 5,
  },
});
