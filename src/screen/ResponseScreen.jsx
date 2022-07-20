import { StyleSheet, Text, View, Button, SafeAreaView, Pressable } from 'react-native';
import { useState } from 'react';
import { TeamContext } from '../context/context';
import { useContext } from 'react';

export function ResponseScreen({ navigation }) {
  const {team, setTeam} = useContext(TeamContext);

  const [count, setCount] = useState(1);//on définit le compteur de point à 0

  const [tempTeam, settempTeam] = useState('');//on crée un useState qui stock temporairement l'équipe séléctionnée

  const addPoint = () => {
    if( count < 10 && count >= 0){
      setCount(count + 1);//si la valeur est supérieure à 0, on l'implémente de 1 jusque 10
    }
  }
  const removePoint = () => {
    if( count <= 10 && count > 0){
      setCount(count - 1);//si la valeur est inférieure à 0, on l'implémente de 1 jusque 10
    }
  }

  const selectTeamPoint = (team) => {
        settempTeam(team.TeamName);//au clic d'une team, on implémente temporairement le nom de la team dans tempTeam
 
  }

  const addTeamPoint = () => {
     const newTeam = team.map(team => {//on fait un map de toutes les équipes existantes
      if(team.TeamName === tempTeam){//si une team à le même nom que le tempTeam
        team.score += count;//alors on définit son score avec celui du count
      }
      return team;
    })
    setTeam(newTeam);//on redéfinit les teams avec les nouveaux scores
    settempTeam('');//on redéfinit la tempTeam à 0
    setCount(0);//on redéfinit le compteur à 0
  }

    return (
      <View style={styles.container}>
        <View style={styles.ViewResponse}>
          <View>
            <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, voluptate dolorum alias omnis cupiditate unde obcaecati ex ratione nulla dolor.</Text>
          </View>
        </View>
        <View style={styles.ViewResponseTeam}>
          <View style={styles.ResponseTeamWrap}>
            { team.map(team => {
              return (
                <Pressable onPress={() => selectTeamPoint(team)} style={styles.ResponseTeamCard} key={team.id}>
                  <Text>{team.TeamName}</Text>
                  <Text>{team.score} points</Text>
                </Pressable>
              )
            }) }
          </View>
        </View>
        <View style={styles.ViewResponsePoint}>
          <View>
            <Pressable style={styles.ResponseCount} onPress={() => removePoint()}><Text>-</Text></Pressable>
            <Text>{ count }</Text>
            <Pressable style={styles.ResponseCount} onPress={() => addPoint()}><Text>+</Text></Pressable>
          </View>
          <Pressable style={styles.ResponseAddPoint} onPress={() => addTeamPoint()}><Text>Ajouter les points</Text></Pressable>
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
    ViewResponse: {
      width: '100%',
      height: '35%',
      backgroundColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ViewResponseTeam: {
      width: '100%',
      height: '35%',
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
    },
      ResponseTeamWrap: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      ResponseTeamCard: {
        width: '30%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        margin: 10,
      },
    ViewResponsePoint: {
      width: '100%',
      height: '30%',
      backgroundColor: 'green',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ResponseCount: {
      width: 50,
      height: 50,
      backgroundColor: 'white',
    },
    ResponseAddPoint: {
      backgroundColor: '#ffffff',
      width: 100,
      height: 50,
    },
  });