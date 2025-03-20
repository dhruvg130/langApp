import React from "react";
import { Text, View, TouchableOpacity, Linking, ScrollView, StyleSheet } from "react-native";

const characters = [
  {
    name: "Jay Gatsby",
    song: "Blinding Lights by The Weeknd",
    url: "https://open.spotify.com/track/0sf12qNH5qcw8qpgymFOqD",
    description: "This song reflects Gatsby’s obsessive pursuit of Daisy and his desire to recreate the past, mirroring the song’s themes of longing and desperation for an unattainable love."
  },
  {
    name: "Nick Carraway",
    song: "White Ferrari by Frank Ocean",
    url: "https://open.spotify.com/track/4wCmqSrbyCgxEXROQE6vtV",
    description: "Nick’s journey of disillusionment with the people around him aligns with this song’s themes of betrayal and realizing the truth about those you once admired."
  },
  {
    name: "Daisy Buchanan",
    song: "See You Again",
    url: "https://open.spotify.com/search/see%20you%20again",
    description: "She represents the pain of lost connections and unfulfilled dreams. Gatsby’s obsession with rekindling their past mirrors the song’s emotions of cherishing memories and yearning for reunion"
  },
  {
    name: "Tom Buchanan",
    song: "Power by Kanye West",
    url: "https://open.spotify.com/track/1XyzkEcTOVVv9G4h5xFUtB",
    description: "Tom’s arrogance, dominance, and sense of entitlement are reflected in this song’s bold lyrics and themes of control."
  },
  {
    name: "Jordan Baker",
    song: "No Tears to Cry by Ariana Grande",
    url: "https://open.spotify.com/track/0Qh38w01QRXK6KHIv0e3hb",
    description: "Jordan’s detached, independent, and modern demeanor matches the song’s themes of nonchalance and self-assuredness."
  },
  {
    name: "Myrtle Wilson",
    song: "You Don't Own Me by G-Easy",
    url: "https://open.spotify.com/track/2d8JP84HNLKhmd6IYOoupQ",
    description: "Myrtle’s yearning for wealth and status contrasts sharply with her reality, much like the song’s critique of materialism and longing for a different life."
  },
  {
    name: "George Wilson",
    song: "Before He Cheats by Carrie Underwood",
    url: "https://open.spotify.com/track/3YBZIN3rekqsKxbJc9FZko",
    description: "George’s grief and despair after Myrtle’s betrayal and death align with the raw emotion and pain expressed in this song."
  }
];

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {characters.map((char, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.name}>{char.name}</Text>
          <Text style={styles.description}>{char.description}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(char.url)}>
            <Text style={styles.song}>{char.song}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  song: {
    fontSize: 16,
    color: "#1DB954",
    textDecorationLine: "underline",
  },
});
