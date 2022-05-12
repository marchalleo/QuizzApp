import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export function ResponseScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, voluptate dolorum alias omnis cupiditate unde obcaecati ex ratione nulla dolor.</Text>
        <Button
          title="Retourner aux questions"
          onPress={() => navigation.navigate('Quizz')}
        />
      </View>
    );
  }