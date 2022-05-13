import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export function QuestionScreen({ route, navigation }) {
  const {typeQuestion} = route.params;
  //on recupère la valeur cliquée dans la page quizz, et on la définit en tant que route

  switch (typeQuestion){//on passe la valeur récupérée de la  page quizz
    case('ring') :
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Vite !</Text>
          <Text>Répondez le plus rapidement possible !</Text>
          <Button
            title="Voir la reponse"
            onPress={() => navigation.navigate('Response')}
          />
        </View>
      );

    case('check') :
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Concertation</Text>
          <Text>Réflechissez en équipe !</Text>
          <Button
            title="Voir la reponse"
            onPress={() => navigation.navigate('Response')}
          />
        </View>
      );

    case('nugget') :
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>x2</Text>
          <Text>les points comptent doubles !</Text>
          <Button
            title="Voir la reponse"
            onPress={() => navigation.navigate('Response')}
          />
        </View>
      );

    case('replay') :
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Replay</Text>
          <Text>L'équipe rejoue</Text>
          <Button
            title="Retourner aux questions"
            onPress={() => navigation.navigate('Quizz')}
          />
        </View>
      );
    default :
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>pas de question</Text>
          <Button
            title="Retourner sur le quizz"
            onPress={() => navigation.navigate('Quizz')}
          />
        </View>
      );
  }
  }