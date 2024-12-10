import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from 'react-native-vector-icons/FontAwesome';
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

// Trade Stack Navigator
const TradeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Trade" component={Trade} />
      <Stack.Screen name="InStock" component={InStock} />
      <Stack.Screen name="Dispatched" component={Dispatched} />
      <Stack.Screen name="Receiving" component={Receiving} />
      <Stack.Screen name="Sending" component={Sending} />
      <Stack.Screen name="PendingOrders" component={PendingOrders} />
      <Stack.Screen name="CompletedOrders" component={CompletedOrders} />
      <Stack.Screen name="Orders" component={OrdersComponent} />
      <Stack.Screen name="NewEntry" component={NewEntryTrade} />
    </Stack.Navigator>
  );
};

const NonTradeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NonTrade" component={NonTrade} />
      <Stack.Screen name="InStock" component={InStock} />
      <Stack.Screen name="Dispatched" component={Dispatched} />
      <Stack.Screen name="Receiving" component={Receiving} />
      <Stack.Screen name="Sending" component={Sending} />
      <Stack.Screen name="PendingOrders" component={PendingOrders} />
      <Stack.Screen name="CompletedOrders" component={CompletedOrders} />
      <Stack.Screen name="Orders" component={OrdersComponent} />
      <Stack.Screen name="NewEntry" component={NewEntryNonTrade} />
    </Stack.Navigator>
  );
};




// Top Tabs Component
const TopTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.topTabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === "Trade" && styles.activeTab]}
        onPress={() => setActiveTab("Trade")}
      >
        <Text style={styles.tabText}>Trade</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === "Non-Trade" && styles.activeTab]}
        onPress={() => setActiveTab("Non-Trade")}
      >
        <Text style={styles.tabText}>Non-Trade</Text>
      </TouchableOpacity>
    </View>
  );
};

// Bottom Tabs Component with Icons
const BottomTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Home', icon: 'home' },
    { name: 'Search', icon: 'search' },
    { name: 'Notification', icon: 'bars' },
    { name: 'Settings', icon: 'bars' },
  ];

  return (
    <View style={styles.bottomTabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          onPress={() => setActiveTab(tab.name)}
          style={styles.bottomTab}>
          <Icon
            name={tab.icon}
            size={24}
            color={activeTab === tab.name ? '#6200EE' : '#666'}
          />
          <Text
            style={[styles.tabText, activeTab === tab.name && styles.activeTabText]}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


const App = () => {
  const [activeTopTab, setActiveTopTab] = useState("Trade");
  const [activeBottomTab, setActiveBottomTab] = useState("Home");

  return (
    <Provider store={store}>
      <NavigationContainer>
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.headerText}>KS Infratech</Text>
            </View>

            {/* Top Tabs */}
            <TopTabs activeTab={activeTopTab} setActiveTab={setActiveTopTab} />

            {/* Content */}
            <View style={styles.content}>
              {activeTopTab === "Trade" ? 
              
              <TradeStack /> 
              
              : 
              
              <NonTradeStack />}
            </View>

            {/* Bottom Tabs */}
            <BottomTabs
              activeTab={activeBottomTab}
              setActiveTab={setActiveBottomTab}
            />
          </View>
      </NavigationContainer>
    </Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6200EE',
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
  topTabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#6200EE',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
    width: '100%'
  },
  contentText: {
    fontSize: 18,
    color: '#333',
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
});

export default App;
