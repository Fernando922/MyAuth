import React, { useContext } from "react";
import { View, Button } from "react-native";
import { useAuth } from "../../contexts/auth";

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }
  return (
    <View>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
