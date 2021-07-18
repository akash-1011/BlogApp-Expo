import React, { useContext } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from "../context/BlogContext";
import { MaterialIcons } from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {

    const {state} = useContext(Context);
    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

    return <View>
        <Text>{blogPost.title} - {blogPost.id}</Text>
        <Text>{blogPost.content}</Text>
    </View>
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
                <MaterialIcons name="mode-edit" size={24} color="black" />
            </TouchableOpacity>
    };
};

const styles = StyleSheet.create({});

export default ShowScreen;