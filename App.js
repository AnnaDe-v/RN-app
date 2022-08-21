import { ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '@rneui/themed';
import {useState} from "react";
import ToDoItem from "./ToDoItem";

export default function App() {
    const [todos, setTodos] = useState([
        {
            _id: Date.now(),
            name: 'Buy everything',
            isDone: true,
        },

    ])
    const [name, setName] = useState('')


    const addNewTaskHandler = () => {
        if (name) {
            setTodos(prev => [{_id: todos.length, name, isDone: false}, ...prev])
        }
        setName('')
    }

    const toggleCheckedToDo = idx => {
        const newArray = [].concat(todos)
        newArray[idx].isDone = !newArray[idx].isDone
        setTodos(newArray)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>TODO</Text>

            <View style={styles.actions}>
                <TextInput
                    style={styles.input}
                    type='text'
                    value={name}
                    onChangeText={text => setName(text)}
                    placeholder='What are you going to do?'
                />

                <Button
                    title="Add"
                    onPress={addNewTaskHandler}
                    buttonStyle={{
                        backgroundColor: 'rgb(123,72,243)',
                        borderRadius: 10,
                    }}
                />
            </View>

            <ScrollView>
                {todos &&
                    todos.map((todo, idx) => (
                        <ToDoItem
                            key={`_todo_${todo._id}`}
                            idx={idx}
                            name={todo.name}
                            isDone={todo.isDone}
                            toggleCheckedToDo={toggleCheckedToDo}
                        />
                    ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: '12%'
    },
    heading: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    actions: {
        padding: 20,
    },
    input: {
        borderRadius: 20,
        width: '70%',
        fontSize: 20,
        marginVertical: 25,
        marginHorizontal: '15%'
    },

});

