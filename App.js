import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PlayerScreen } from './screens/Player';

function HomeScreen({ navigation: { navigate } }) {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>
        Home
      </Text>

      {[1, 2, 3, 4, 5].map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => {
            navigate('PlayerScreen', { podcast: item });
          }}
        >
          <Text>
            Podcast: 0
            {item}
          </Text>
        </TouchableOpacity>
      ))}

    </View>
  );
}

function DiscoverScreen() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>
        Discover
      </Text>
    </View>
  );
}

//= =========================================

const PodcastsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PodcastsTabStack() {
  return (
    <PodcastsStack.Navigator>
      <PodcastsStack.Screen name="HomeScreen" component={HomeScreen} />
      <PodcastsStack.Screen name="PlayerScreen" component={PlayerScreen} />
    </PodcastsStack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={PodcastsTabStack} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
