import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import CheckBox from '@react-native-community/checkbox';


const ToDoItem = ({idx, name, isDone, toggleCheckedToDo}) => {
    return (
        <View
            style={styles.item}
            onPress={() => toggleCheckedToDo(idx)}
        >
            {/*<CheckBox*/}
            {/*    value={isDone}*/}
            {/*/>*/}
            <Text style={styles.name}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#eee1f5',
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: '5%'
    },
    name: {
        fontSize: 18,
        marginLeft: 10
    }
})


export default ToDoItem;