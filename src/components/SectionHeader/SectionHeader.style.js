// library imports
import {StyleSheet} from 'react-native';
// styles imports
import {ColourPalette} from '../../assets/styles/ColourPalette';
// utill imports
import {ConstantText} from '../../utills/ConstantText';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    borderRadius: 5,
    paddingBottom: 10,
    backgroundColor: ColourPalette.lightGreen,
  },
  secondaryContainer: {
    // paddingVertical: 30,
    flexDirection: 'row',
  },
  avatarView: {
    margin: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  titleView: {
    justifyContent: 'center',
    marginLeft: 20,
  },
  title: {
    color: ColourPalette.white,
    fontSize: 14,
    fontFamily: ConstantText.font_family2,
    fontWeight: ConstantText.font_bold2,
  },
  expandContainer: {
    flex: 1,
    backgroundColor: ColourPalette.lightGreen,
  },
 
  line: {
    flex: 1,
    backgroundColor: ColourPalette.white,
    height: 1,
    marginHorizontal: 20,
  },
});
