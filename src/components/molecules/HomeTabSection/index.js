import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {DummyIc} from '../../../assets';
import TourListCard from '../TourListCard';

const HomeTabSection = () => {
  return (
    <View style={{paddingTop: 8}}>
      <ScrollView vertical>
        <TourListCard name={'Pending'} />
        <TourListCard name={'In Progress'} />
        <TourListCard name={'Completed'} />
        <TourListCard name={'Pending'} />
      </ScrollView>
    </View>
  );
};

export default HomeTabSection;
const styles = StyleSheet.create({});
