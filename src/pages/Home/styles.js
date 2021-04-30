import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: metrics.basePadding,
    backgroundColor: colors.ligther,
  },

  list: {
    padding: metrics.basePadding,
  },
});

export default styles;
