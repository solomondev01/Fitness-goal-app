import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState();

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    }

    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput  placeholder='Type your fitness goal' style={styles.textInputContainer} onChangeText={goalInputHandler} value={enteredGoal} />
        <Button title="Add" onPress={addGoalHandler}/>
      </View>
      </Modal>
    );
};


//StyleSheet
const styles = StyleSheet.create({
    inputContainer: {
        // flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    textInputContainer: {
        width: "80%",
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
      }
});

export default GoalInput;
