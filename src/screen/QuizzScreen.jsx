import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export function QuizzScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Choisissez une question :</Text>
        <Button
          title="Question 1"
          onPress={() => navigation.navigate('Question')}
        />
        <Button
          title="Question 2"
          onPress={() => navigation.navigate('Question')}
        />
        <Button
          title="Question 3"
          onPress={() => navigation.navigate('Question')}
        />
        <Button
          title="Question 4"
          onPress={() => navigation.navigate('Question')}
        />

        <Button
          title="Fin du jeu"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }