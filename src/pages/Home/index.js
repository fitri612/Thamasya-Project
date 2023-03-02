import {View, StyleSheet, Text} from 'react-native';
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
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.page}>
      <HomeWelcome />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TourCard
          icon={
            'https://usdvexperts.com/wp-content/uploads/2016/02/c286ca98c6c79cf50000cab7a5344393-300x295.png'
          }
          title={'08'}
          desc={'Pending'}
          onPress={() => navigation.navigate('System')}
        />
        <TourCard
          icon={
            'https://static.vecteezy.com/system/resources/thumbnails/006/900/704/small/green-tick-checkbox-illustration-isolated-on-white-background-free-vector.jpg'
          }
          title={'10'}
          desc={'Completed'}
          onPress={() => navigation.navigate('System')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TourCard
          icon={'https://cdn-icons-png.flaticon.com/512/4909/4909989.png'}
          title={'15'}
          desc={'In Progress'}
          onPress={() => navigation.navigate('System')}
        />
        <TourCard
          icon={
            'https://www.pngarts.com/files/11/Silhouette-Youtube-Bell-Icon-PNG-Pic.png'
          }
          title={'20'}
          desc={'Overdue'}
          onPress={() => navigation.navigate('System')}
        />
      </View>
      <View style={styles.tabContainer}>
        <HomeTabSection />
      </View>
      <View style={styles.addContent}>
        <TouchableOpacity
          style={styles.add}
          onPress={() => navigation.navigate('ToDo')}>
          {/* <IcAdd /> */}
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    width: 100,
    height: 50,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
