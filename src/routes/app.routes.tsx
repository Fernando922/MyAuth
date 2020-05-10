import React from "react";
import SigIn from "../pages/Dashboard";

import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={SigIn} />
  </AppStack.Navigator>
);

export default AppRoutes;
