import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screen/HomeScreen';
import { NewGameScreen } from '../screen/NewGameScreen'
import { QuizzScreen } from '../screen/QuizzScreen';
import { QuestionScreen } from '../screen/QuestionScreen';
import { ResponseScreen } from '../screen/ResponseScreen';
import { ScoreBoardScreen } from '../screen/ScoreBoardScreen';
import { TeamContext } from '../context/context';
import { useContext } from 'react';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
    const {team, setTeam} = useContext(TeamContext);
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="NewGame" component={NewGameScreen} options={{headerTransparent: true, headerTitle: '', headerBackTitleVisible: false,}}/>
            <Stack.Screen name="Quizz" component={QuizzScreen}  options={{headerShown: false}}/>
            <Stack.Screen name="Question" component={QuestionScreen}  options={{headerShown: false}}/>
            <Stack.Screen name="Response" component={ResponseScreen}  options={{headerShown: false}}/>
            <Stack.Screen name="ScoreBoard" component={ScoreBoardScreen} />
        </Stack.Navigator>
    )
}