import {StyleSheet} from 'react-native';
import {ColourPalette} from '../../assets/styles/ColourPalette';
import {ConstantText} from '../../utills/ConstantText';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListView: {
    backgroundColor: ColourPalette.white,
    marginVertical: 10,
  },
  title: {
    margin: 10,
    fontSize: 20,
    color: ColourPalette.black,
    fontFamily: ConstantText.font_family2,
    fontWeight: ConstantText.font_bold2,
  },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
});
