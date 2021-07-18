import React,{useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initVals}) => {
    const [title, setTitle] = useState(initVals.title);
    const [content, setContent] = useState(initVals.content);

    return <View>
        <Text style={styles.title}>Enter title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
        <Text style={styles.title}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
        <Button 
            title="Save Blog Post" 
            onPress={() => onSubmit(title, content)} 
        />
    </View>
};


const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }, 
    input:{
        borderWidth: 1,
        fontSize: 18,
        borderColor: "black",
        padding: 8,
        marginBottom: 18,
        margin: 5
    }
});

export default BlogPostForm;