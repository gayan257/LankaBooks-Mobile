import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { mockBooks } from '../data/mockBooks';
import { colors } from '../theme/colors';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.eyebrow}>LankaBooks</Text>
            <Text style={styles.title}>Read, write, publish</Text>
          </View>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Explore</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.searchBox}>
          <Text style={styles.searchText}>Search Sinhala books, authors, genres</Text>
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Featured</Text>
          <Text style={styles.linkText}>View all</Text>
        </View>

        {mockBooks.map((book) => (
          <View key={book.id} style={styles.card}>
            <View style={styles.coverPlaceholder} />
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>{book.title}</Text>
              <Text style={styles.bookMeta}>{book.author}</Text>
              <Text style={styles.bookMeta}>Genre: {book.genre}</Text>
              <Text style={styles.bookMeta}>LKR {book.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  eyebrow: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    marginTop: 6,
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
  },
  actionButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
  },
  actionText: {
    color: '#fff',
    fontWeight: '700',
  },
  searchBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#e7e0d7',
  },
  searchText: {
    color: colors.secondary,
    fontSize: 14,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
  },
  linkText: {
    color: colors.primary,
    fontWeight: '700',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#efe5db',
  },
  coverPlaceholder: {
    width: 90,
    height: 120,
    backgroundColor: colors.primarySoft,
    borderRadius: 14,
  },
  bookInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  bookTitle: {
    fontWeight: '800',
    fontSize: 18,
    color: colors.text,
    marginBottom: 4,
  },
  bookMeta: {
    color: colors.secondary,
    fontSize: 13,
    marginTop: 2,
  },
});
