import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import { DummyIc} from '../../../assets';
import TextHome from '../../atoms/TextHome';
import TourListCard from '../TourListCard';

const HomeTabSection = () => {
  return (
    <View style={{paddingTop: 8}}>
      <TextHome />
      <ScrollView vertical>
        <TourListCard image={DummyIc} />
        <TourListCard image={DummyIc} />
        <TourListCard image={DummyIc} />
        <TourListCard image={DummyIc} />
        <TourListCard image={DummyIc} />
      </ScrollView>
    </View>
  );
};

export default HomeTabSection;
const styles = StyleSheet.create({
});
