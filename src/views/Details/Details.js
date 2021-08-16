// library imports
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
// components imports
import {getCovidIncidence} from '../../services/Services';
import DetailsChildItem from '../../components/DetailsChildItem';
// styles imports
import {styles} from './Details.style';
import {ColourPalette} from '../../assets/styles/ColourPalette';
import {ConstantText} from '../../utills/ConstantText';

const Details = () => {
  const {data, isLoading} = getCovidIncidence(30);

  // child render item
  const childListRenderItem = ({item, index}) => {
    return <DetailsChildItem item={item} />;
  };

  // child KeyExtractor
  const childListKeyExtractor = (item, index) => String(index);

  // child render footer
  const childRenderFooter = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size={'large'} color={ColourPalette.darkGrey} />
      </View>
    ) : null;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.flatListView}>
          <Text style={styles.title}>{ConstantText.incidence}</Text>
          <FlatList
            data={data}
            renderItem={childListRenderItem}
            keyExtractor={childListKeyExtractor}
            ListFooterComponent={childRenderFooter}
            onEndReachedThreshold={0}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Details;
