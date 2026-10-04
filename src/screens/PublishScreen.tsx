import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { colors } from '../theme/colors';
import { createBookRecord } from '../services/bookService';

export default function PublishScreen() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    if (!title || !author || !genre || !price || !description) {
      Alert.alert('Missing fields', 'Please complete all fields before publishing.');
      return;
    }

    setLoading(true);

    try {
      await createBookRecord({
        title,
        author,
        genre,
        price: Number(price),
        description,
        status: 'draft',
        publishedBy: 'LankaBooks User',
      });

      Alert.alert('Success', 'Your book has been submitted for review.');
      setTitle('');
      setAuthor('');
      setGenre('');
      setPrice('');
      setDescription('');
    } catch (error: any) {
      Alert.alert('Publish failed', error.message || 'Unable to publish book right now.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Publish your book</Text>
        <Text style={styles.subtitle}>Share your manuscript with readers across Sri Lanka.</Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Book title"
            style={styles.input}
            placeholderTextColor={colors.secondary}
            value={title}
            onChangeText={setTitle}
          />

          <TextInput
            placeholder="Author name"
            style={styles.input}
            placeholderTextColor={colors.secondary}
            value={author}
            onChangeText={setAuthor}
          />

          <TextInput
            placeholder="Genre"
            style={styles.input}
            placeholderTextColor={colors.secondary}
            value={genre}
            onChangeText={setGenre}
          />

          <TextInput
            placeholder="Price (LKR)"
            style={styles.input}
            placeholderTextColor={colors.secondary}
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />

          <TextInput
            placeholder="Book description or synopsis"
            style={[styles.input, styles.textArea]}
            placeholderTextColor={colors.secondary}
            multiline
            numberOfLines={6}
            value={description}
            onChangeText={setDescription}
          />

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handlePublish}
            disabled={loading}
          >
            <Text style={styles.primaryButtonText}>
              {loading ? 'Publishing...' : 'Publish book'}
            </Text>
          </TouchableOpacity>
        </View>
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
    paddingBottom: 40,
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
  form: {
    marginTop: 20,
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
  textArea: {
    minHeight: 140,
    textAlignVertical: 'top',
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
});
