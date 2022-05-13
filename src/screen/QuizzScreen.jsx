import { StyleSheet, Text, View, Button, SafeAreaView, Pressable } from 'react-native';
import { TeamContext } from '../context/context';
import { useContext } from 'react';

export function QuizzScreen({ navigation }) {
  const {team, setTeam} = useContext(TeamContext);

  const questionNavigate = (value) => {//on récupère la valeur du pressable
    navigation.navigate('Question', {
      typeQuestion : value,
    })
  }

    return (
      <View style={styles.container}>
        <View style={styles.ViewTimer}>
          <Text style={styles.ViewTimerText}>ScoreBoard</Text>
          <Text style={styles.ViewTimerText}>Timer</Text>
        </View>
        <View style={styles.ViewTeamScore}>
            { team.map(team => {
              return (
                <View style={styles.ViewTeamScoreCard} key={team.id}>
                  <Text style={styles.ViewTeamScoreCardText}>{team.TeamName}</Text>
                  <Text>{team.score} points</Text>
                </View>
              )
            }) }
        </View>
        <View style={styles.ViewTheme}>
            <Pressable style={styles.ThemeCard} onPress={() => questionNavigate('ring')}>
              <Text style={styles.ThemeCardText}>1</Text>
            </Pressable>
            <Pressable style={styles.ThemeCard} onPress={() => questionNavigate('check')}>
              <Text style={styles.ThemeCardText}>2</Text>
            </Pressable>
            <Pressable style={styles.ThemeCard} onPress={() => questionNavigate('nugget')}>
              <Text style={styles.ThemeCardText}>3</Text>
            </Pressable>
            <Pressable style={styles.ThemeCard} onPress={() => questionNavigate('replay')}>
              <Text style={styles.ThemeCardText}>4</Text>
            </Pressable>
            <Pressable style={styles.ThemeCard} onPress={() =>questionNavigate()}>
              <Text style={styles.ThemeCardText}>Bonus</Text>
            </Pressable>
          </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    ViewTimer: {
      width: '100%',
      height: '15%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 50,
    },
    ViewTeamScore: {
      width: '100%',
      height: '35%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
      ViewTeamScoreCard: {
        width: '40%',
        height: '20%',
        backgroundColor: '#c7f0e3',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
      },
      ViewTeamScoreCardText: {
        fontSize: 16,
      },
    ViewTheme: {
      width: '100%',
      height: '55%',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
      ThemeCard: {
        width: '80%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#FF7F00',
      },
      ThemeCardText: {
        color: '#ffffff',
      },
})