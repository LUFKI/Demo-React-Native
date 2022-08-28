import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

function CategoryItem(props) {

    const { route, navigation } = props;
    const { id, name } = route.params;

    return (
        <View style={styles.container}>
            {/* <Text>Info props: {JSON.stringify(props)}</Text> */}
            <Text style={styles.span}>CategoryItemId: {JSON.stringify(id)}</Text>
            <Text style={styles.span}>CategoryItemName: {JSON.stringify(name)}</Text>

            <View style={styles.mt_2}>
                <Button
                    title='Back'
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={styles.mt_2}>
                <Button
                    title='Go to ... again'
                    onPress={() => navigation.navigate(
                        'Details',
                        {
                            id: Math.floor(Math.random() * 100),
                            name: `Category SubItem ${Math.floor(Math.random() * 100)}`
                        })}
                />
            </View>
            <View style={styles.mt_2}>
                <Button
                    title='Go HOME'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>


            <View style={styles.mt_2}>
                <Button
                    title='Update the title'
                    onPress={() => navigation.setOptions({ title: 'Updated!' })}
                />
            </View>
            <View style={styles.mt_2}>
                <Button
                    title='Reset the title'
                    onPress={() => navigation.setOptions({ title: route.params.name })}
                />
            </View>
        </View>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center'
    },
    span: {
        marginBottom: 20
    },
    mt_2: {
        marginBottom: 20
    }
})