/**
 * @format
 * @flow strict-local
 */
// react library imports
import type {Node} from 'react';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
// style imports
import * as Images from '../../assets/Images';
import {styles} from './ChildItem.style';

type ChildItemProp = {
  item: Object,
  index: number,
  onPress: Function,
  selectedChildIndex: number,
};

// flatlist render item
const ChildItem = (props: ChildItemProp): Node => {
  // getting data from parent & null check
  let items = props.item ? props.item : null;
  let index = props.index ? props.index : null;
  let name = items ? items.name : '';
  let selectedChildIndex = props.selectedChildIndex
    ? props.selectedChildIndex
    : null;

  // assigning images
  const unselectedCheckBox = Images.Images.unselectedCheckBox;
  const selectedCheckBox = Images.Images.selectedCheckBox;

  return (
    <TouchableOpacity onPress={() => props.onPress(items, index)}>
      <View style={styles.container}>
        <View style={styles.nameView}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={styles.imageView}>
          <Image
            source={
              selectedChildIndex === index
                ? selectedCheckBox
                : unselectedCheckBox
            }
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChildItem;
