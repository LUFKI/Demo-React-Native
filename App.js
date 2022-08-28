import { FlatList, StyleSheet, Text, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default function App() {

  const categories = [
    { id: 1, name: 'Category Item 1' },
    { id: 2, name: 'Category Item 2' },
    { id: 3, name: 'Category Item 3' },
    { id: 4, name: 'Category Item 4' }
  ]

  return (
    <FlatList
      keyExtractor={item => `${item.id}`}
      data={categories}
      renderItem={({ item }) => <CategoryListItem category={item} />}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
