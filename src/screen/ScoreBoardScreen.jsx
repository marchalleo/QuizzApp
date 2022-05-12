import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export function ScoreBoardScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ScoreBoard Screen</Text>
        <Button
          title="Go to NewGame"
          onPress={() => navigation.navigate('NewGame')}
        />
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }