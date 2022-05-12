import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import { useState } from 'react';


export function NewGameScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
              placeholder="Nom de l'équipe"
              placeholderTextColor="#000"
            />
        <Button
          title="Ajouter"
        />
        <Button
          title="Jouer"
          onPress={() => navigation.navigate('Quizz')}
        />
      </View>
    );
  }