// library imports
import {StyleSheet} from 'react-native';
// styles imports
import {ColourPalette} from '../../assets/styles/ColourPalette';
// utill imports
import {ConstantText} from '../../utills/ConstantText';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 5,
    paddingBottom: 10,
    backgroundColor: ColourPalette.lightGreen,
  },
  secondaryContainer: {
    paddingVertical: 10,
    flexDirection: 'column',
  },
  textView: {
    flexDirection: 'row',
    margin: 10,
  },
  title: {
    paddingLeft: 20,
    color: ColourPalette.white,
    fontSize: 17,
    fontFamily: ConstantText.font_family2,
    fontWeight: ConstantText.font_bold2,
  },
  date: {
    paddingLeft: 100,
    color: ColourPalette.white,
    fontSize: 17,
    fontFamily: ConstantText.font_family2,
    fontWeight: ConstantText.font_bold2,
  },
});
