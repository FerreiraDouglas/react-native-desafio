import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.basePadding,
  },

  text: {
    textAlign: 'center',
  },

  textContent: {
    marginVertical: metrics.baseMargin * 2,
  },

  textHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    textTransform: 'uppercase',
  },

  button: {
    height: 44,
    backgroundColor: colors.warning,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: metrics.baseRadius * 2,
    marginVertical: 10,
  },
});

export default styles;
