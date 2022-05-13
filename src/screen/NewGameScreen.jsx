import { StyleSheet, Text, View, Button, TextInput, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { useContext } from 'react';
import { TeamContext } from '../context/context';

export function NewGameScreen({ navigation }) {

  const {team, setTeam} = useContext(TeamContext);
  //tableau qui regroupe les teams

  const [newTeam, setNewTeam] = useState('');
  //valeur du input, de base string vide et quand submit on reset le input avec le string vide

  const [idTeam, setIdTeam] = useState(0);
  //id de base à 0, qu'on implémente de 1 à chaque nouvelle team

  const submitNewTeam = () => {
      const myNewTeam = {
        id: idTeam, //de base à 0 et implémenté de 1 pour chaque nouvelles teams
        TeamName: newTeam //valeur de l'input
      }
      if(newTeam !== ''){//si la valeur de l'input n'est pas vide
        for (const element of team) {
          if(element.TeamName === newTeam){//si un element dans le tableau à le même nom que celui inséré dans le input, on met une alert
            return (
              Alert.alert('Nom d\'équipe déja choisi')
            )
          }
        }
        setTeam([...team, myNewTeam]);//on insère la nouvelle team dans le tableau team avec les valeurs de myNewTeam 
        setNewTeam('');//on reset l'input sur un string vide
        setIdTeam(idTeam + 1);//on implémente de 1 l'id pour la prochaine team
      }else {
        Alert.alert('Champ vide', 'Veuillez renseigner un nom d\'équipe')
      }
  }
  const deleteTeam = (id) => {
    setTeam(team.filter(team => team.id !== id));//on filtre l'id récupéré au clic pour l'enlever du tableau
  }
  const requiredTeam = () => {
    if(team.length > 1){//si le tableau contient au moins 2 team
      return(
        navigation.navigate('Quizz')//on passe à la page suivante
      )
    }else {
      Alert.alert('Nombre d\'équipe insufisante', 'créer minimum 2 équipes')
    }
  }

    return (
      <View style={styles.container}>

        <View style={styles.ViewAddTeam}>
          <View style={styles.ViewInput}>
            <TextInput
              style={styles.inputTeam}
              placeholder="Nom de l'équipe"
              placeholderTextColor="#000"
              value={newTeam}
              onChangeText={setNewTeam}
              required
            />
          </View>
          <View style={styles.ViewInputButton}>
            <Pressable style={styles.InpuButton} onPress={submitNewTeam}>
              <Text style={styles.TextButton}>Ajouter</Text>
            </Pressable>

            <Pressable style={styles.InpuButton} onPress={() => requiredTeam()}>
              <Text style={styles.TextButton}>Jouer</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.ViewTeam}>
          { team.map(team => {
            return (
              <View style={styles.teamCard}  key={team.id}>
                <View>
                  <Text style={styles.teamCardText}>{team.TeamName}</Text>
                </View>
                <Pressable style={styles.teamCardDelete} onPress={() => deleteTeam(team.id)}><Text style={styles.teamCardDeleteText}>X</Text></Pressable>
              </View>
          )} )}
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'space-between'
    },
    ViewAddTeam: {
      flex: 1, 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      width: '100%',
      height: '30%',
    },
    ViewInput: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '70%',
      height: '40%',
    },
    inputTeam: {
      width: '100%',
      height: '50%',
      textAlign: 'center',
      backgroundColor: '#98c1d9',
    },
    ViewInputButton: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '70%',
      height: '40%',
    },
    InpuButton: {
      width: '45%',
      height: '35%',
      backgroundColor: 'white',
      justifyContent: 'center',
      backgroundColor: '#c7f0e3',
    },
    TextButton: {
      fontSize: 16,
      textAlign: 'center',
    },
    ViewTeam: {
      width: '100%',
      height: '70%',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#000000',
      paddingTop: 30,
      paddingBottom: 30,
    },
    teamCard: {
      width: '70%',
      height: '10%',
      backgroundColor: '#FF7F00',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      margin: 5,
      paddingLeft: 20,
    },
    teamCardText: {
      fontSize: 22,
    },
    teamCardDelete: {
      width: '20%',
      height: '100%',
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    teamCardDeleteText: {
      fontSize: 25,
    },
  });