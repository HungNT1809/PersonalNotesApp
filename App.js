import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Switch,
  ScrollView,
} from 'react-native';

import NoteItem from './components/NoteItem';

export default function App() {
  const [noteInput, setNoteInput] = useState('');
  const [notes, setNotes] = useState([]);
  const [showOnlyUncompleted, setShowOnlyUncompleted] = useState(false);

  // Add new note
  const addNote = () => {
    if (noteInput.trim() === '') return;
    const newNote = {
      id: Date.now().toString(),
      text: noteInput,
      completed: false,
    };
    setNotes([newNote, ...notes]);
    setNoteInput('');
  };

  // Toggle complete status
  const toggleNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  // Filter notes
  const filteredNotes = showOnlyUncompleted
    ? notes.filter((note) => !note.completed)
    : notes;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>📝 Ghi chú cá nhân</Text>

      {/* Input and Add Button */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nhập ghi chú..."
          style={styles.input}
          value={noteInput}
          onChangeText={setNoteInput}
        />
        <Button title="Thêm" onPress={addNote} />
      </View>

      {/* Filter toggle */}
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Chỉ hiện ghi chú chưa hoàn thành</Text>
        <Switch
          value={showOnlyUncompleted}
          onValueChange={setShowOnlyUncompleted}
        />
      </View>

      {/* Note List */}
      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteItem item={item} onToggle={toggleNote} />
        )}
      />
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  filterText: {
    fontSize: 16,
    color: '#444',
  },
});
