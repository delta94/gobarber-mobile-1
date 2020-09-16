import React from 'react';

import { View, Text, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
