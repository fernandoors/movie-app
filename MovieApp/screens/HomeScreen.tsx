import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

import api from "../service/api";
import { Movie, RootStackScreenProps } from "../types";

import { View } from "../components/Themed";
import Layout from "../constants/Layout";

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Root">) {
  const [movies, setMovies] = React.useState<Movie[]>([]);

  React.useEffect(() => {
    async function requestMovies() {
      const { data } = await api.get<Movie[]>("/movie");
      const sortedData = data.sort((a, b) =>
        a.user_rating < b.user_rating ? 1 : -1
      );
      setMovies(sortedData);
    }
    requestMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.movies}>
          {movies.length
            ? movies.map((movie) => (
                <Pressable
                  key={`${movie._id}`}
                  onPress={() =>
                    navigation.navigate("Movie", {
                      screen: "movie",
                      params: movie,
                    })
                  }
                  style={({ pressed }) => ({
                    opacity: pressed ? 0.5 : 1,
                  })}
                >
                  <Image
                    style={styles.image}
                    source={{ uri: `${movie.poster_image}` }}
                    resizeMode="stretch"
                  />
                </Pressable>
              ))
            : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  movies: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: Layout.window.width / 2,
    height: Layout.window.height / 2,
  },
});
