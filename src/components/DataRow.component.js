import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { COLORS } from '../constants';

const DataRow = (props) => {
    const {element, subtitle} = props;
  return (
    <View>
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{element}</Text>
        </View>

        <View style={styles.textRow}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.subtitle}>μg/m</Text>
          <Text style={styles.subtitleSub}>3</Text>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  textRow: {
    flexDirection: 'row',
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

export default DataRow;
