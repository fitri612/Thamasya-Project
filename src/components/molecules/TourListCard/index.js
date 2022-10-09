import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { IcClock } from '../../../assets';
import { Gap } from '../../atoms';

const TourListCard = ({image}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      />
      <View style={styles.contentText}>
        <Text
          style={styles.textTitle}>
          Design Task Card
        </Text>
        <Text
          style={styles.textLocation}>
          At Prospyr we are looking for a UI/UX Designer to join our team.
        </Text>
        <View style={styles.iconCard}>
          <View style={styles.icCardChil}>
            <IcClock />
            <Text style={styles.text}>08.00 AM - 12.00 AM</Text>
          </View>
          <Gap width={10} />
          <View style={styles.icCardChil}>
            <IcClock />
            <Text style={styles.text}>12/12/2022</Text>
          </View>
        </View>
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
  },
  image: {
    overflow: 'hidden',
    marginRight: 16,
    width: 50,
    height: 50,
  },
  contentText: {
    flex: 1
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
