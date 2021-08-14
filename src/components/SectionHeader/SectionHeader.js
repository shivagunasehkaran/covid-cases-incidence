/**
 * @format
 * @flow strict-local
 */
// react library imports
import type {Node} from 'react';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
// style imports
import {styles} from './SectionHeader.style';
import * as Images from '../../assets/Images';

type SectionHeaderProp = {
  item: Object,
  index: number,
  onPress: Function,
};

// section header item
const SectionHeader = (props: SectionHeaderProp): Node => {
  // getting data from parent & null check
  let title = props.title ? props.title : null;
  let index = props.index ? props.index : null;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.onPress(title, index)}>
        <View style={styles.secondaryContainer}>
          <View style={styles.avatarView}>
            <Image source={Images.Images.case} style={styles.avatar} />
          </View>
          <View style={styles.titleView}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;
