// Filename: index.js
// Combined code from all files

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, View, TextInput, Button, FlatList } from 'react-native';

const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseName, setExerciseName] = useState('');
    const [reps, setReps] = useState('');
    const [sets, setSets] = useState('');

    const addExercise = () => {
        if (exerciseName && reps && sets) {
            setExercises([...exercises, { id: Date.now().toString(), name: exerciseName, reps, sets }]);
            setExerciseName('');
            setReps('');
            setSets('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Exercise Name"
                value={exerciseName}
                onChangeText={setExerciseName}
            />
            <TextInput
                style={styles.input}
                placeholder="Reps"
                value={reps}
                onChangeText={setReps}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Sets"
                value={sets}
                onChangeText={setSets}
                keyboardType="numeric"
            />
            <Button title="Add Exercise" onPress={addExercise} />

            <FlatList
                data={exercises}
                renderItem={({ item }) => (
                    <View style={styles.exerciseContainer}>
                        <Text style={styles.exerciseText}>{item.name} - {item.reps} Reps x {item.sets} Sets</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.title}>Workout Tracker</Text>
                <ExerciseList />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    scrollView: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    exerciseContainer: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    exerciseText: {
        fontSize: 16,
    },
    list: {
        marginTop: 20,
    },
});