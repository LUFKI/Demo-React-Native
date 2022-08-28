import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryListItem = (props) => {

    const { category } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category.name}</Text>
        </View>
    )
}

export default CategoryListItem

const styles = StyleSheet.create({
    title: {
        textTransform: 'uppercase'
    },
    container: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#ccc',
        padding: 50,
        borderRadius: 4,
    }
})