import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../theme/colors';

export default function BookDetailScreen({ route }: any) {
  const { book } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.coverPlaceholder} />

        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>by {book.author}</Text>
        <Text style={styles.genre}>Genre: {book.genre}</Text>

        <View style={styles.priceBox}>
          <Text style={styles.priceText}>LKR {book.price}</Text>
        </View>

        <Text style={styles.sectionTitle}>Synopsis</Text>
        <Text style={styles.description}>
          A compelling story of hope, growth, and personal discovery set in a vibrant Sri Lankan
          setting. This moving read blends emotion, culture, and unforgettable characters to keep
          readers engaged from beginning to end.
        </Text>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Read now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 24,
  },
  coverPlaceholder: {
    width: '100%',
    height: 260,
    backgroundColor: colors.primarySoft,
    borderRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.text,
  },
  author: {
    marginTop: 8,
    fontSize: 16,
    color: colors.secondary,
  },
  genre: {
    marginTop: 6,
    fontSize: 15,
    color: colors.primary,
    fontWeight: '600',
  },
  priceBox: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#eadfcf',
  },
  priceText: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 24,
    color: colors.secondary,
  },
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 14,
    paddingVertical: 15,
    marginTop: 22,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
