/**
 * @format
 * @flow strict-local
 */
// library imports
import type {Node} from 'react';
import React, {useState} from 'react';
import {SafeAreaView, SectionList, Text, View} from 'react-native';
// util imports
import {ConstantText} from '../../utills/ConstantText';
import {SectionListInitialData} from '../../utills/SectionListInitialData';
// style imports
import {styles} from './Dashboard.style';
// component imports
import SectionHeader from '../../components/SectionHeader';
import ChildItem from '../../components/ChildItem';
import {pageNameDetails, pageNamePublicStack} from '../../routes/Routes';

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
  const goToDetails = () => {
    props.navigation.push(pageNamePublicStack, {
      screen: pageNameDetails,
    });
  };

  // handle index for nested item
  const handleChildSelection = id => {
    if (selectedChildIndex === id) {
      setSelectedChildIndex(-1);
    } else {
      setSelectedChildIndex(id);
      goToDetails();
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
            onPress={() => handleChildSelection(item.id)}
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
