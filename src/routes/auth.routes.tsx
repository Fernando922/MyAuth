import React from "react";
import SigIn from "../pages/SignIn";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SigIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
