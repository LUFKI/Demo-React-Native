import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Image } from 'react-native';
import Categories from './Screen/Categories';
import CategoryItem from './Screen/CategoryItem';

export default function AppNavigation() {

    const Stack = createNativeStackNavigator();

    const LogoTitle = () => {
        return (
            <Image
                style={{ width: 50, height: 50 }}
                source={require('./assets/favicon.png')}
            />
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}>
                <Stack.Screen
                    name="Home"
                    component={Categories}
                    options={{
                        headerTitle: (props) => <LogoTitle {...props} />,
                        headerRight: () => (
                            <Button
                                onPress={() => alert('This is a button!')}
                                title="Info"
                            />
                        ),
                        // headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={CategoryItem}
                    options={({ route }) => (
                        {
                            title: route.params.name,
                            headerStyle: {
                                backgroundColor: '#f4511e',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        })} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
