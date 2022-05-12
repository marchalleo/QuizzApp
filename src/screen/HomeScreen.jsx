import { StyleSheet, Text, View, Button, Pressable, SafeAreaView } from 'react-native';

export function HomeScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('NewGame')}>
          <Text style={styles.buttonText}>Nouvelle Partie</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#98c1d9',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 25,
    color: '#ffffff',
  },
});