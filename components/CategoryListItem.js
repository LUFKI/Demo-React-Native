import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CategoryListItem = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>CategoryListItem</Text>
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
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#ccc',
        padding: 16,
        borderRadius: 4,
    }
})