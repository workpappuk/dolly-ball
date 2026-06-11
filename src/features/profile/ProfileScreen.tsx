import { View, Text, StyleSheet } from 'react-native';
import { useAuthStore } from '@store/authStore';
import { Card } from '@components/Card';

export const ProfileScreen = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Card>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user?.name ?? 'Anonymous'}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user?.email ?? 'Unknown'}</Text>
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
  label: {
    marginTop: 12,
    fontWeight: '600',
    color: '#4b5563'
  },
  value: {
    marginTop: 4,
    fontSize: 16,
    color: '#111827'
  }
});
