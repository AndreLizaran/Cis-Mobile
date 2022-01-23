// Modules
import { StyleSheet } from 'react-native';

// Colors
import { normalGray } from '../utils/colors';

const generalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  generalTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  generalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#191919',
  },
  generalTextInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#191919',
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  generalHeader: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  generalHeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  generalBody: {
    padding: 20,
    backgroundColor: normalGray,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default generalStyles;
