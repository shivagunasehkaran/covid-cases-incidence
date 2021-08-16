// react library imports
import {StyleSheet} from 'react-native';
// style imports
import {ColourPalette} from '../../assets/styles/ColourPalette';
import {ConstantText} from '../../utills/ConstantText';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColourPalette.white,
  },
  title: {
    marginTop: 10,
    paddingLeft: 17,
    fontSize: 30,
    fontFamily: ConstantText.font_family,
    fontWeight: ConstantText.font_bold1,
  },
  listView: {
    marginVertical: 10,
    marginHorizontal: 14,
  },
});
