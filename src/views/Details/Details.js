// library imports
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {ColourPalette} from '../../assets/styles/ColourPalette';
import DetailsChildItem from '../../components/DetailsChildItem';
// components imports
import {getCovidCases, getCovidIncidence} from '../../services/Services';
import {ConstantText} from '../../utills/ConstantText';
// styles imports
import {styles} from './Details.style';

const Details = props => {
  // getting props
  const endPoints = props.route.params.endPoints;
  const days = props.route.params.days.substring(0, 2);
  // calling API based on days count
  const {data, isLoading} =
    endPoints === ConstantText.incidence
      ? getCovidIncidence(days)
      : getCovidCases(days);

  // child render item
  const childListRenderItem = ({item, index}) => {
    return <DetailsChildItem item={item} endPoints={endPoints} />;
  };

  // child KeyExtractor
  const childListKeyExtractor = (item, index) => String(index);

  // child render footer
  const childRenderFooter = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator
          size={ConstantText.loaderSize}
          color={ColourPalette.darkGrey}
        />
      </View>
    ) : null;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.flatListView}>
          <Text style={styles.title}>{props.route.params.endPoints}</Text>
          <FlatList
            data={data}
            renderItem={childListRenderItem}
            keyExtractor={childListKeyExtractor}
            ListFooterComponent={childRenderFooter}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Details;
