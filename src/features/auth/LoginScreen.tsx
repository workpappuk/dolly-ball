import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useAuthStore } from '@store/authStore';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async () => {
    try {
      setError(null);
      await login(email, password);
    } catch (err) {
      setError('Unable to sign in. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Input label="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button label="Sign in" onPress={handleSubmit} />
      <Text style={styles.footer}>Secure access with shared authentication logic.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 24,
    color: '#111827'
  },
  error: {
    marginBottom: 16,
    color: '#dc2626'
  },
  footer: {
    marginTop: 24,
    color: '#6b7280'
  }
});
