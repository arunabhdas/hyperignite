import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import TasksScreen from './TasksScreen';
import ExpensesScreen from './ExpensesScreen';
import WilsonScreen from './WilsonScreen';
import TabBarIcon from '../Components/TabBarIcon';

import { Images } from '../Themes';

// Styles
import styles from './Styles/MainTabNavigatorStyle';


class MainScreen extends Component {
    render() {
        return (
            <View>
                <Text>MainScreen</Text>
                
            </View>
        );
    }
}



const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    headerLeft: null,
    headerTitle: "Home",
    TabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name='md-home'/>
    ),
    headerStyle: {
        backgroundColor: "transparent"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "rgba(96,100,109, 1)",
        zIndex: 1,
        fontSize: 18,
        lineHeight: 23,
        fontFamily: "CircularStd-Bold"
      },
      headerTintColor: "rgba(96,100,109, 1)",
      animationEnabled: true

  };

const TasksStack = createStackNavigator({
    Tasks: {
      screen: TasksScreen
    }
  });

TasksStack.navigationOptions = {
    tabBarLabel: 'Tasks',
    headerLeft: null,
    headerTitle: "Tasks",

};


const ExpensesStack = createStackNavigator({
    Expenses: {
      screen: ExpensesScreen
    }
});


ExpensesStack.navigationOptions = {
    tabBarLabel: 'Expenses',
    headerLeft: null,
    headerTitle: "Expenses",

  };


const WilsonStack = createStackNavigator({
    Wilson: {
      screen: WilsonScreen
    }
});

WilsonStack.navigationOptions = {
    tabBarLabel: 'Wilson',
    headerLeft: null,
    headerTitle: "Wilson",

  };

const MainScreenTabNavigator = createBottomTabNavigator({
        HomeStack,
        TasksStack,
        ExpensesStack,
        WilsonStack,
    }, 
    {
        animationEnabled: true
    }
);

export default MainScreenTabNavigator;
