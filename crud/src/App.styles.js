import {Dimensions, StyleSheet} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    height: screenHeight,
    backgroundColor: '#FFF',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  input: {
    height: 40,
    fontSize: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 4,
  },
  container: {
    width: '80%',
    borderRadius: 10,
    marginBottom: 10,
  },
  borderError: {
    borderWidth: 1,
    borderColor: 'rgba(200,0,50,1)',
  },
  errorMessage: {
    fontSize: 12,
    color: 'rgba(200,0,50,1)',
    textAlign: 'center',
    marginTop: 5,
  },
});
export default styles;
