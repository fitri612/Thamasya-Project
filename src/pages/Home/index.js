import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Gap, HomeTabSection, HomeWelcome, TourCard} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {
  IcAdd,
  TourDummy,
  TourDummy1,
  TourDummy2,
  TourDummy3,
} from '../../assets';
import {TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HomeWelcome type={'home'} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.TourCardContainer}>
          <Gap width={5} />
          <TourCard
            icon={TourDummy1}
            title={'todo'}
            onPress={() => navigation.navigate('System')}
          />
          <TourCard
            icon={TourDummy2}
            title={'In Progress'}
            onPress={() => navigation.navigate('System')}
          />
          <TourCard
            icon={TourDummy}
            title={'Completed'}
            onPress={() => navigation.navigate('System')}
          />
          <Gap width={5} />
        </View>
      </ScrollView>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
      <View style={styles.addContent}>
        <TouchableOpacity
          style={styles.add}
          onPress={() => navigation.navigate('ToDo')}>
          <IcAdd />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabContainer: {
    flex: 5,
    backgroundColor: 'white',
  },
  TourCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    marginTop: 0,
    height: 0,
  },
  contentSearch: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginBottom: 25,
    marginTop: 25,
  },
  addContent: {
    width: 50,
    height: 50,
  },
  add: {
    position: 'absolute',
    bottom: 30,
    left: 200,
    width: 20,
    height: 50,
  },
});
