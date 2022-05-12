import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export function QuestionScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Question n°X</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, amet.</Text>
        <Button
          title="Voir la reponse"
          onPress={() => navigation.navigate('Response')}
        />
      </View>
    );
  }