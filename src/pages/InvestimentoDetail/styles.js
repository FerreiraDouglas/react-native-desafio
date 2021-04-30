import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  button: {
    width: '100%',
    backgroundColor: colors.warning,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton: {
    fontSize: 20,
    color: colors.gradiente,
    fontWeight: 'bold',
  },
});

export default styles;
