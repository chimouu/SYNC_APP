import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  floatingButtonContainer: {
    position: 'absolute',
    right: 135,
    bottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#390f1b',
    borderRadius: 28,
    padding: 10, 
  },
  iconButton: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 30,
    width: 1,
    backgroundColor: '#ad9974',
    marginHorizontal: 10,
  },
});
