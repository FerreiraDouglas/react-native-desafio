import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 10,
    borderBottomColor: colors.white,
  },

  item: {
    flexDirection: 'row',
  },
  input: {
    backgroundColor: colors.white,
    width: '100%',
    height: 40,
  },

  inputContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: metrics.basePadding,
  },
});

export default styles;
