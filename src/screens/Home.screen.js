import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Pannel from '../components/Panel.component';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import CITY_LIST from '../data/city.json';
import {apiClient, API_KEY, BASE_URL} from '../services/httpCommon';

const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(CITY_LIST);

  const [lat, setLat] = useState();
  const [lng, setLng] = useState();

  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    // reset the data
    setData();
    //console.log(data);
    const cityData = items.filter(val => val.city === value);
    if (cityData.length > 0) {
      setLat(cityData[0].lat);
      setLng(cityData[0].lng);
    }
  }, [items, value]);

  /* // fetching the data (working)
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}`,
        );
        const json = await response.json();
        setData(json.list);
        setError(null);
      } catch (err) {
        setError(err);
      }
    };
    if (lat && lng) {
      getData(lat, lng);
    }
  }, [lat, lng]); */

  // fetching data using axios
  useEffect(() => {
    if (lat && lng) {
      getData(lat, lng);
    }
  }, [lat, lng]);

  /* useEffect(() => {
      console.log(data)
  }, [data]) */

  const getData = async () => {
    try {
      const response = await apiClient.get(
        `/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}`,
      );
      const newData = await response.data.list;
      //console.log(response.data.list);
      setData(newData);
      setError(null);
    } catch (e) {
      // console.log(e);
      setError(e);
    }
  };

  return (
    <View>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={[styles.appName, {...FONTS.h2}]}>
          Air Quality Forecast
        </Text>
        {/* Drop Down Picket Section */}
        <DropDownPicker
          open={open}
          searchable
          searchPlaceholder="Type to get the city"
          searchTextInputStyle={styles.searchTextInputStyle}
          searchContainerStyle={styles.searchContainerStyle}
          placeholder="Select a city"
          placeholderStyle={styles.placeholderStyle}
          containerStyle={styles.containerStyle}
          labelStyle={styles.labelStyle}
          listItemLabelStyle={styles.listItemLabelStyle}
          showTickIcon={false}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          ArrowUpIconComponent={() => (
            <Image
              source={icons.arrowUp}
              style={styles.imageStyle}
            />
          )}
          ArrowDownIconComponent={() => (
            <Image
              source={icons.arrowDown}
              style={styles.imageStyle}
            />
          )}
          value={value}
          items={items.map(({city}) => ({
            label: city,
            value: city,
          }))}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>

      {/* Body Section */}
      {data ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <Pannel data={item} />
            </View>
          )}
        />
      ) : (
        <View style={styles.noData}>
          <Text style={[styles.noDataText, {...FONTS.h1}]}>
            {!value ? '- No Data -' : 'Data Loading...'}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingBottom: 15,
    zIndex: 400,
    elevation: 400,
  },
  appName: {
    color: COLORS.white,
    paddingTop: 50,
  },
  noData: {
    marginTop: 100,
    alignItems: 'center',
  },
  noDataText: {
    color: COLORS.accent,
  },
  searchTextInputStyle: {
    borderWidth: 0,
    fontWeight: '700',
  },
  searchContainerStyle: {
    paddingVertical: 15,
    borderBottomColor: COLORS.accent,
  },
  placeholderStyle: {
    color: COLORS.darkGrey,
    ...FONTS.h3,
  },
  containerStyle: {
    margin: 15,
    width: SIZES.width - 30,
  },
  labelStyle: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: SIZES.h3,
  },
  listItemLabelStyle: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  dropDownContainerStyle: {
    borderColor: COLORS.primary,
  },
  imageStyle: {width: 20, height: 20, tintColor: COLORS.accent},
});

export default HomeScreen;
