/**
 * @format
 * @flow strict-local
 */
// library imports
import type {Node} from 'react';
import React, {useState} from 'react';
import {SafeAreaView, SectionList, Text, View} from 'react-native';
import ChildItem from '../../components/ChildItem';
// component imports
import SectionHeader from '../../components/SectionHeader';
import {pageNameDetails} from '../../routes/Routes';
// util imports
import {ConstantText} from '../../utills/ConstantText';
import {SectionListInitialData} from '../../utills/SectionListInitialData';
// style imports
import {styles} from './Dashboard.style';

const Dashboard = (props): Node => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedChildIndex, setSelectedChildIndex] = useState(-1);

  // handle index for accordian
  const handleAccordian = id => {
    if (selectedIndex === id) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(id);
    }
  };

  // move to details screen
  const goToDetails = days => {
    props.navigation.push(pageNameDetails, {
      endPoints:
        selectedIndex === 1 ? ConstantText.incidence : ConstantText.cases,
      days: days,
    });
  };

  // handle index for nested item
  const handleChildSelection = (id, days) => {
    if (selectedChildIndex === id) {
      setSelectedChildIndex(-1);
    } else {
      setSelectedChildIndex(id);
      goToDetails(days);
    }
  };

  // section list child item
  const Item = ({item, section}) => {
    return (
      <View>
        {selectedIndex === section.id ? (
          <ChildItem
            item={item}
            index={item.id}
            selectedChildIndex={selectedChildIndex}
            onPress={() => handleChildSelection(item.id, item.days)}
          />
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
              <Item item={item} section={section} />
            )}
            keyExtractor={childListKeyExtractor}
            renderSectionHeader={({section: {title, id}}) => {
              return (
                <SectionHeader
                  title={title}
                  index={id}
                  onPress={() => handleAccordian(id)}
                />
              );
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Dashboard;
