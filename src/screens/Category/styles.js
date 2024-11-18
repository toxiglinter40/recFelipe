import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginVertical: 15,
  },
  headline: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1b5e20',
    marginBottom: 15,
  },
  articleContainer: {
    backgroundColor: '#f1f8e9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  article: {
    fontSize: 16,
    color: '#4e342e',
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default styles;
