import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import DataRow from './DataRow.component';

const Pannel = props => {
  // console.log('Panel: ',props);
  const {data} = props;

  const [date, setDate] = useState(
    new Date(data.dt * 1000).toLocaleDateString('en-GB'),
  );
  const [time, setTime] = useState(
    new Date(data.dt * 1000).toLocaleTimeString('en-GB').slice(0, 5),
  );

  const [airQuality, setAirQuality] = useState();

  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    switch (data.main.aqi) {
      case 1:
        setAirQuality('Good');
        break;
      case 2:
        setAirQuality('Fair');
        break;
      case 3:
        setAirQuality('Moderate');
        break;
      case 4:
        setAirQuality('Poor');
        break;
      case 5:
        setAirQuality('Very Poor');
        break;
      default:
        setAirQuality('Error');
    }
  }, [data]);

  return (
    <View style={styles.container}>
      {/* Card */}
      <TouchableOpacity
        onPress={() => {
          setCollapse(!collapse);
        }}>
        <View style={styles.row}>
          <View>
            {/* Date and Time */}
            <Text style={[styles.date, {...FONTS.h3}]}>
              {date} | {time}
            </Text>

            {/* Quality Index */}
            <Text style={[styles.index, {...FONTS.h4}]}>
              Quality Index: {data.main.aqi} ({airQuality})
            </Text>
          </View>

          {/* Up and Down Icon */}
          <Image
            source={!collapse ? icons.arrowDown : icons.arrowUp}
            style={{width: 20, height: 20, tintColor: COLORS.accent}}
          />
        </View>
      </TouchableOpacity>

      {/* Inside the card */}
      { collapse && (
          <View>
          {/* CO Data with unit */}
          <DataRow element={'CO'} subtitle={data.components.co} />
  
          {/* NO Data with unit */}
          <DataRow element={'NO'} subtitle={data.components.no} />
  
          {/* NO2 Data with unit */}
          <DataRow element={'NO2'} subtitle={data.components.no2} />
  
          {/* O3 Data with unit */}
          <DataRow element={'O3'} subtitle={data.components.o3} />
  
          {/* SO2 Data with unit */}
          <DataRow element={'SO2'} subtitle={data.components.so2} />
  
          {/* PM2.5 Data with unit */}
          <DataRow element={'PM2.5'} subtitle={data.components.pm2_5} />
  
          {/* PM10 Data with unit */}
          <DataRow element={'PM10'} subtitle={data.components.pm10} />
  
          {/* NH3 Data with unit */}
          <DataRow element={'NH3'} subtitle={data.components.nh3} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: COLORS.lightGrey,
    padding: 15,
    borderRadius: SIZES.radius,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  date: {
    color: COLORS.primary,
  },
  index: {
    paddingTop: 5,
    color: COLORS.accent,
  },
  textRow: {
    flexDirection: 'row',
  },
  title: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  subtitle: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  subtitleSub: {
    color: COLORS.primary,
    fontWeight: '600',
    lineHeight: 15,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.darkGrey,
  },
});

export default Pannel;
