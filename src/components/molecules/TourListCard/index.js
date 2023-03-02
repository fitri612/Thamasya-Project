import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcClock} from '../../../assets';
import {Gap} from '../../atoms';

const TourListCard = ({image, name}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Text style={styles.dot}>•</Text>
      <View style={styles.contentText}>
        <Text style={styles.textTitle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TourListCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 16,
    borderColor: '#EAEAF0',
    marginBottom: 10,
    marginStart: 16,
    marginEnd: 16,
    width: 450,
    height: 100,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: '#F9A826',
    marginRight: 16,
  },
  image: {
    overflow: 'hidden',
    marginRight: 16,
    width: 50,
    height: 50,
  },
  contentText: {
    flex: 1,
  },
  textTitle: {
    fontFamily: 'Raleway-SemiBold',
    fontSize: 16,
    color: '#1D2132',
    marginBottom: 5,
  },
  textLocation: {
    fontFamily: 'Raleway-Regular',
    fontSize: 12,
    lineHeight: 18,
    color: '#8A899C',
    marginBottom: 10,
    marginEnd: 10,
  },
  iconCard: {
    flexDirection: 'row',
  },
  icCardChil: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 5,
    fontSize: 10,
  },
});
