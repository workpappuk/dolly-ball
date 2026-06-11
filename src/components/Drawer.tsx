import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

interface DrawerProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ visible, onClose, children }) => {
  const translateX = React.useRef(new Animated.Value(visible ? 0 : 300)).current;

  React.useEffect(() => {
    Animated.timing(translateX, {
      toValue: visible ? 0 : 300,
      duration: 250,
      useNativeDriver: true
    }).start();
  }, [visible, translateX]);

  return (
    <View style={[styles.container, visible ? styles.visible : styles.hidden]}>
      <TouchableOpacity style={styles.backdrop} onPress={onClose} />
      <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
        <View style={styles.header}>
          <Text style={styles.title}>Menu</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 23, 42, 0.35)'
  },
  drawer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 320,
    backgroundColor: '#fff',
    padding: 20
  },
  hidden: {
    display: 'none'
  },
  visible: {
    display: 'flex'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 20,
    fontWeight: '700'
  },
  closeText: {
    color: '#2563eb'
  }
});
