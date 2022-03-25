import { Image, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { Movie, RootStackScreenProps } from "../types";
import Layout from "../constants/Layout";

export default function MovieScreen({ route }: RootStackScreenProps<"Movie">) {
  const movie: Movie | undefined = route.params.params;

  if (!movie) {
    return <Text style={styles.title}>Movie not Found</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{movie.title}</Text>
      <View style={styles.detail}>
        <Image
          style={styles.image}
          source={{ uri: `${movie.poster_image}` }}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.year}>{movie.release_date}</Text>
          <Text style={styles.rating}>{movie.user_rating}%</Text>
        </View>
      </View>
      <Text style={styles.plot}>{movie.plot}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "#d4851e7a",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  detail: {
    margin: 20,
    flexDirection: "row",
  },
  content: {
    marginLeft: 10,
  },
  image: {
    width: Layout.window.width / 3,
    height: Layout.window.height / 3,
  },
  year: {
    fontSize: 20,
  },
  rating: {
    borderWidth: 1,
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: "#ff9800",
    textAlign: "center",
    textAlignVertical: "center",
    height: 30,
  },
  plot: {
    padding: 15,
  },
});
