import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { colors } from '../theme/colors';

export default function SignupScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.brand}>LankaBooks</Text>
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.subtitle}>Start publishing and reading stories today.</Text>

        <View style={styles.form}>
          <TextInput placeholder="Full name" style={styles.input} placeholderTextColor={colors.secondary} />
          <TextInput
            placeholder="Email address"
            style={styles.input}
            placeholderTextColor={colors.secondary}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            placeholderTextColor={colors.secondary}
            secureTextEntry
          />
          <TextInput
            placeholder="Confirm password"
            style={styles.input}
            placeholderTextColor={colors.secondary}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => navigation.navigate('MainTabs')}
          >
            <Text style={styles.primaryButtonText}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.secondaryLink}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  brand: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    color: colors.primary,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    marginTop: 18,
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: colors.secondary,
  },
  form: {
    marginTop: 28,
    gap: 14,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#eadfcf',
    color: colors.text,
    fontSize: 15,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 15,
    marginTop: 10,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryLink: {
    textAlign: 'center',
    color: colors.primary,
    fontWeight: '700',
    marginTop: 12,
  },
});
