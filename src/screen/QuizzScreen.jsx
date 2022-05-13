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
          <View style={styles.ViewTeamScoreWrap}>
            { team.map(team => {
              return (
                <View style={styles.ViewTeamScoreCard} key={team.id}>
                  <Text style={styles.ViewTeamScoreCardText}>{team.TeamName}</Text>
                  <Text>{team.score} points</Text>
                </View>
              )
            }) }
          </View>
        </View>
        <View style={styles.ViewTheme}>
          <View style={styles.ViewThemeWrap}>
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
            <Pressable style={styles.ThemeCardBonus} onPress={() =>questionNavigate()}>
              <Text style={styles.ThemeCardText}>Bonus</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#132851',
    },
    ViewTimer: {
      width: '100%',
      height: '15%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
    ViewTimerText: {
      color: '#ffffff',
    },
    ViewTeamScore: {
      width: '100%',
      height: '35%',
      justifyContent: 'center',
      alignItems: 'center',
    },
      ViewTeamScoreWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
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
      justifyContent: 'center',
      alignItems: 'center',
    },
      ViewThemeWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      ThemeCard: {
        width: '25%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#85ceff',
      },
      ThemeCardText: {
        color: '#ffffff',
      },
      ThemeCardBonus: {
        width: '25%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'grey',
      },
})