import { StyleSheet, Text, View, Button, TextInput, Pressable, Alert } from 'react-native';
import { useState } from 'react';


export function NewGameScreen({ navigation }) {

  const [team, setTeam] = useState([]);

  const [newTeam, setNewTeam] = useState('');

  const [idTeam, setIdTeam] = useState(0);

  const submitNewTeam = () => {
      const myNewTeam = {
        id: idTeam,
        TeamName: newTeam
      }
      if(newTeam !== ''){
        setTeam([...team, myNewTeam]);
        setNewTeam('');
        setIdTeam(idTeam + 1);
      }else {
        Alert.alert('Champ vide', 'Veuillez renseigner un nom d\'équipe')
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

            <Pressable style={styles.InpuButton} onPress={() => navigation.navigate('Quizz')}>
              <Text style={styles.TextButton}>Jouer</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.ViewTeam}>
          { team.map(team => {
            return (
              <View style={styles.teamCard} key={team.id}>
                <Text style={styles.teamCardText}>{team.TeamName}{team.id}</Text>
              </View>
            )
          }) }
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
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
    },
    teamCardText: {
      fontSize: 22,
    },
  });