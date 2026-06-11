import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  value: string;
  options: SelectOption[];
  onValueChange: (value: string) => void;
}

export const Select: React.FC<SelectProps> = ({ label, value, options, onValueChange }) => (
  <View style={styles.wrapper}>
    {label ? <Text style={styles.label}>{label}</Text> : null}
    <View style={styles.selectWrapper}>
      {Platform.OS === 'web' ? (
        <select
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          style={styles.webSelect as any}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <Picker selectedValue={value} onValueChange={onValueChange} style={styles.picker} itemStyle={styles.item}>
          {options.map((option) => (
            <Picker.Item key={option.value} label={option.label} value={option.value} />
          ))}
        </Picker>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16
  },
  label: {
    marginBottom: 6,
    color: '#111827',
    fontWeight: '600'
  },
  selectWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#fff'
  },
  picker: {
    height: Platform.OS === 'web' ? 44 : 50,
    width: '100%'
  },
  webSelect: {
    width: '100%',
    height: 44,
    border: 'none',
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    appearance: 'none'
  },
  item: {
    height: 44
  }
});
