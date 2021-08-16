/**
 * @format
 * @flow strict-local
 */
// react library imports
import type {Node} from 'react';
import React from 'react';
import {Text, View} from 'react-native';
import {ConstantText} from '../../utills/ConstantText';
import {styles} from './DetailsChildItem.style';
import {formatDateToDisplayDate} from '../../utills/utills';

type DetailsChildItemProp = {
  item: Object,
  index: number,
  onPress: Function,
  selectedChildIndex: number,
};

// flatlist render item
const DetailsChildItem = (props: DetailsChildItemProp): Node => {
  // getting data from parent & null check
  let item = props.item ? props.item : null;
  let cases = item ? item.weekIncidence : null;
  let date = item ? item.date : null;

  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <View style={styles.textView}>
          <Text style={styles.title}>{`${
            ConstantText.date
          }${formatDateToDisplayDate(date)}`}</Text>
        </View>
        <View style={styles.textView}>
          <Text style={styles.title}>{cases}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailsChildItem;
