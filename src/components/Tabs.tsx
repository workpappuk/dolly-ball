import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TabItem {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

interface TabsProps {
  tabs: TabItem[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => (
  <View style={styles.container}>
    {tabs.map((tab) => (
      <TouchableOpacity key={tab.label} style={[styles.tab, tab.isActive && styles.active]} onPress={tab.onPress}>
        <Text style={[styles.label, tab.isActive && styles.activeLabel]}>{tab.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
    overflow: 'hidden',
    marginBottom: 16
  },
  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: 'center'
  },
  active: {
    backgroundColor: '#2563eb'
  },
  label: {
    color: '#374151'
  },
  activeLabel: {
    color: '#ffffff'
  }
});
