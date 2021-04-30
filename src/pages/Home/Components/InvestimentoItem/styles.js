import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.4,
    justifyContent: 'center',
    padding: metrics.basePadding,
    borderColor: colors.light,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
