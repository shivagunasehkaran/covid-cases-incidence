/**
 * @format
 * @flow strict-local
 */
// library imports
import type {Node} from 'react';
import React, {useState} from 'react';
import {
  SafeAreaView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// util imports
import {ConstantText} from '../../utills/ConstantText';
import {SectionListInitialData} from '../../utills/SectionListInitialData';
// style imports
import {styles} from './Dashboard.style';

const Dashboard = (props): Node => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // handle index for selection
  const handleSelectedIndex = id => {
    if (selectedIndex === id) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(id);
    }
  };

  // section list child item
  const Item = ({title, section}) => {
    return (
      <View>
        {selectedIndex === section.id ? (
          <View style={{backgroundColor: 'green'}}>
            <Text>{title.name}</Text>
          </View>
        ) : null}
      </View>
    );
  };

  // child KeyExtractor
  const childListKeyExtractor = (item, index) => String(index);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>{ConstantText.city}</Text>
        <View style={styles.listView}>
          <SectionList
            sections={SectionListInitialData}
            renderItem={({item, section}) => (
              <Item title={item} section={section} />
            )}
            keyExtractor={childListKeyExtractor}
            renderSectionHeader={({section: {title, id}}) => {
              return (
                <TouchableOpacity onPress={() => handleSelectedIndex(id)}>
                  <Text style={styles.header}>{title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;
