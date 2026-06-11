import React from 'react';
import { Modal as RNModal, View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const Modal: React.FC<ModalProps> = ({ visible, onClose, children, title }) => (
  <RNModal visible={visible} transparent animationType="fade">
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </View>
  </RNModal>
);

const { width } = Dimensions.get('window');
const modalWidth = Math.min(560, width - 48);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    width: modalWidth,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 18,
    fontWeight: '700'
  },
  closeButton: {
    padding: 8
  },
  closeText: {
    color: '#2563eb'
  }
});
