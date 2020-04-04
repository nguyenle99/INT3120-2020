import "react-native-gesture-handler";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CategoryScreen from "./src/screens/CategoryScreen";
import FavoriteScreen from "./src/screens/FavoriteScreen";
import Exam2Screen from "./src/screens/Exam2Screen";
import DetailTopicScreen from "./src/screens/DetailTopicScreen";
import SlideshowTopicScreen from "./src/screens/SlideshowTopicScreen";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/reducers";

//store
const store = createStore(rootReducer);

//create Stack
const HomeStack = createStackNavigator();

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <NavigationContainer>
          <HomeStack.Navigator initialRouteName="Home">
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen
              name="Category"
              component={CategoryScreen}
              options={CategoryScreen.navigationOptions}
            />
            <HomeStack.Screen
              name="Favorite"
              component={FavoriteScreen}
              options={FavoriteScreen.navigationOptions}
            />
            <HomeStack.Screen
              name="DetailTopic"
              component={DetailTopicScreen}
              options={DetailTopicScreen.navigationOptions}
            />
            <HomeStack.Screen
              name="SlideshowByTopic"
              component={SlideshowTopicScreen}
              options={SlideshowTopicScreen.navigationOptions}
            />
            <HomeStack.Screen
              name="Exam"
              component={Exam2Screen}
              options={Exam2Screen.navigationOptions}
            />
          </HomeStack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
