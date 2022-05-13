import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { TeamContext } from '../context/context';
import { useContext } from 'react';

export function QuizzScreen({ navigation }) {
  const {team, setTeam} = useContext(TeamContext);

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
        <View>
          { team.map(team => {
            return (
              <View key={team.id}>
                <Text>{team.TeamName} : {team.score}</Text>
              </View>
            )
          }) }
        </View>
      </View>
    );
  }