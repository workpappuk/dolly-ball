import React from 'react';
import { TextInput, View, Text, StyleSheet, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, style, ...props }) => (
  <View style={styles.wrapper}>
    {label ? <Text style={styles.label}>{label}</Text> : null}
    <TextInput style={[styles.input, style]} placeholderTextColor="#9ca3af" {...props} />
    {error ? <Text style={styles.error}>{error}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 16
  },
  label: {
    marginBottom: 6,
    color: '#111827',
    fontWeight: '600'
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    padding: 14,
    backgroundColor: '#fff',
    color: '#111827'
  },
  error: {
    marginTop: 6,
    color: '#dc2626',
    fontSize: 12
  }
});
