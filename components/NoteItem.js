import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

// Reusable component for rendering each note item
export default function NoteItem({ item, onToggle }) {
  return (
    <Pressable onPress={() => onToggle(item.id)}>
      <View style={[styles.noteItem, item.completed && styles.completedNote]}>
        <Text style={[styles.noteText, item.completed && styles.completedText]}>
          {item.text}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  noteItem: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderLeftWidth: 6,
    borderLeftColor: '#2e86de',
  },
  completedNote: {
    backgroundColor: '#e0e0e0',
    borderLeftColor: 'green',
  },
  noteText: {
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
