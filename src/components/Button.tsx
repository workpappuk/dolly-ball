import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'ghost';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({ label, onPress, disabled = false, variant = 'primary', style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, styles[variant], disabled && styles.disabled, style]} onPress={onPress} disabled={disabled}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  primary: {
    backgroundColor: '#2563eb'
  },
  secondary: {
    backgroundColor: '#6b7280'
  },
  ghost: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#9ca3af'
  },
  label: {
    color: '#ffffff',
    fontWeight: '600'
  },
  disabled: {
    opacity: 0.5
  }
});
