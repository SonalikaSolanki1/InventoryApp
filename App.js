import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from "react-redux";
import store from "./redux/store";

// Import screens
import Trade from "./pages/Trade";
import NonTrade from "./pages/NonTrade";
import InStock from "./pages/InStock";
import Dispatched from "./pages/Dispatched";
import Receiving from "./pages/Receiving";
import Sending from "./pages/Sending";
import PendingOrders from "./pages/PendingOrders";
import CompletedOrders from "./pages/CompletedOrders";
import { NewEntryTrade, NewEntryNonTrade } from './pages/NewEntry';
import OrdersComponent from './components/OrdersComponent';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

// Trade Stack Navigator
const TradeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trade" component={Trade} options={{ headerShown: false }} />
      <Stack.Screen name="InStock" component={InStock} options={{ headerShown: false }} />
      <Stack.Screen name="Dispatched" component={Dispatched} options={{ headerShown: false }} />
      <Stack.Screen name="Receiving" component={Receiving} options={{ headerShown: false }} />
      <Stack.Screen name="Sending" component={Sending} options={{ headerShown: false }} />
      <Stack.Screen name="PendingOrders" component={PendingOrders} options={{ headerShown: false }} />
      <Stack.Screen name="CompletedOrders" component={CompletedOrders} options={{ headerShown: false }} />
      <Stack.Screen name="Orders" component={OrdersComponent} options={{ headerShown: false }} />
      <Stack.Screen name="NewEntry" component={NewEntryTrade} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

// Non-Trade Stack Navigator
const NonTradeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NonTrade" component={NonTrade} options={{ headerShown: false }} />
      <Stack.Screen name="InStock" component={InStock} options={{ headerShown: false }} />
      <Stack.Screen name="Dispatched" component={Dispatched} options={{ headerShown: false }} />
      <Stack.Screen name="Receiving" component={Receiving} options={{ headerShown: false }} />
      <Stack.Screen name="Sending" component={Sending} options={{ headerShown: false }} />
      <Stack.Screen name="PendingOrders" component={PendingOrders} options={{ headerShown: false }} />
      <Stack.Screen name="CompletedOrders" component={CompletedOrders} options={{ headerShown: false }} />
      <Stack.Screen name="Orders" component={OrdersComponent} options={{ headerShown: false }} />
      <Stack.Screen name="NewEntry" component={NewEntryNonTrade} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

// Top Tabs Component with Tab Navigator
const TopTabs = () => {
  const [headerColor, setHeaderColor] = useState('#6200EE');
  const [activeTab, setActiveTab] = useState('Trade Stack'); // Track active tab manually

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    if (tabName === 'Trade Stack') {
      setHeaderColor('#6200EE');
    } else if (tabName === 'NonTrade Stack') {
      setHeaderColor('#e28743');
    }
  };

  return (
    <>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: headerColor }]}>
        <Text style={styles.headerText}>KS Infratech</Text>
      </View>
      <TopTab.Navigator
        screenOptions={{ headerShown: false }}
        screenListeners={{
          state: (e) => {
            const activeRoute = e.data.state.routes[e.data.state.index].name;
            handleTabChange(activeRoute);
          },
        }}
      >
        <TopTab.Screen
          name="Trade Stack"
          component={TradeStack}
          options={{ tabBarIndicatorStyle: { backgroundColor: '#6200EE' } }}
        />
        <TopTab.Screen
          name="NonTrade Stack"
          component={NonTradeStack}
          options={{ tabBarIndicatorStyle: { backgroundColor: '#e28743' } }}
        />
      </TopTab.Navigator>
    </>
  );
};

// Bottom Tabs Component with Icons
const BottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={TopTabs} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        )
      }} />
      <BottomTab.Screen name="Search" component={NewEntryNonTrade} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size} />
        )
      }} />
      <BottomTab.Screen name="Notification" component={NewEntryNonTrade} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => (
          <Ionicons name="notifications" color={color} size={size} />
        )
      }} />
      <BottomTab.Screen name="Settings" component={NewEntryNonTrade} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings" color={color} size={size} />
        )
      }} />
    </BottomTab.Navigator>
  );
};

// Main App Component
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          {/* Hide the status bar */}
          <StatusBar hidden={true} />
          <BottomTabs />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingLeft: 25,
    paddingBottom: 10,
    alignItems: 'flex-start',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomTabContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f9f9f9',
    paddingBottom: 20
  },
  bottomTab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  activeTabText: {
    color: '#6200EE',
    fontWeight: 'bold',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
});

export default App;
