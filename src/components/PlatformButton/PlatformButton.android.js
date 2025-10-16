import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const PlatformButton = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}>
      <Text style={[styles.text, styles[`${variant}Text`]]}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4, // Android: small sharp corners
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  primary: {
    backgroundColor: '#007bff', // matches SettingsScreen primary color
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#007bff',
    elevation: 0,
  },
  disabled: {
    backgroundColor: '#d6d6d6',
    borderColor: '#d6d6d6',
    elevation: 0,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
  primaryText: {
    color: '#ffffff',
  },
  secondaryText: {
    color: '#007bff',
  },
});

export default PlatformButton;
