import React from 'react';
import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {ProfileDummy, Search, TourDummy1} from '../../../assets';

const TourCard = ({title, icon, desc, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Image
              source={{
                uri: icon,
              }}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.text}>{title}</Text>
          </View>
        </View>
        <Text style={styles.contentText}>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TourCard;
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
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
    marginBottom: 8,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
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
