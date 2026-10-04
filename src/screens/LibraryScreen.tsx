import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from '../theme/colors';

export default function LibraryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>My Library</Text>
        <Text style={styles.subtitle}>Your saved books and reading list will appear here.</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>The Golden Lantern</Text>
          <Text style={styles.cardMeta}>Continue reading</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Silent Waves</Text>
          <Text style={styles.cardMeta}>Saved for later</Text>
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
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.text,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: colors.secondary,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginTop: 18,
    borderWidth: 1,
    borderColor: '#eadfcf',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  cardMeta: {
    marginTop: 6,
    color: colors.secondary,
  },
});
