import React from "react";
import {
    ScrollView, 
    Pressable,
    View,
    Text,
    StyleSheet,
} from "react-native";

function ToDoList(){
    return(
    <ScrollView>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Meal rep</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Meet with friends</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Feed fish</Text>
          </View>
        </Pressable>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#000',
    },
    completed: {
        backgroundColor: 'red',
    },
    taskText: {
        fontSize: 20,
    },
});
export default ToDoList;