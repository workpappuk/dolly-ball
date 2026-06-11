import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

interface Column<T> {
  title: string;
  key: keyof T;
  render?: (item: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export const Table = <T extends Record<string, unknown>>({ columns, data }: TableProps<T>) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={styles.table}>
      <View style={styles.headerRow}>
        {columns.map((column) => (
          <View key={String(column.key)} style={styles.headerCell}>
            <Text style={styles.headerText}>{column.title}</Text>
          </View>
        ))}
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          {columns.map((column) => (
            <View key={String(column.key)} style={styles.cell}>
              <Text style={styles.cellText}>{column.render ? column.render(item) : String(item[column.key])}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  table: {
    width: '100%'
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6'
  },
  headerCell: {
    padding: 14,
    minWidth: 120,
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb'
  },
  headerText: {
    fontWeight: '700',
    color: '#111827'
  },
  row: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb'
  },
  cell: {
    padding: 14,
    minWidth: 120,
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb'
  },
  cellText: {
    color: '#374151'
  }
});
