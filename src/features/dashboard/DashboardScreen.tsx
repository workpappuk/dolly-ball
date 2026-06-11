import { View, Text, StyleSheet } from 'react-native';
import { Card } from '@components/Card';
import { useAuthStore } from '@store/authStore';

export const DashboardScreen = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Card style={styles.card}>
        <Text style={styles.cardTitle}>Welcome back, {user?.name ?? 'User'}.</Text>
        <Text style={styles.cardText}>This shared feature module runs across mobile and web.</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 20,
    color: '#111827'
  },
  card: {
    width: '100%'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10
  },
  cardText: {
    color: '#4b5563'
  }
});
