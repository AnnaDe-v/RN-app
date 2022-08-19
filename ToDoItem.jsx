import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import { CheckBox } from 'react-native-elements';


const ToDoItem = ({idx, name, isDone, toggleCheckedToDo}) => {
    return (
        <View
            style={styles.item}
            onPress={() => toggleCheckedToDo(idx)}
        >
            <CheckBox
                checked={isDone}

            />
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
        marginHorizontal: '5%',
        flexDirection: 'row',

    },
    name: {
        fontSize: 18,
        marginLeft: 5
    }
})


export default ToDoItem;