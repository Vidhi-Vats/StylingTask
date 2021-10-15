import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList } from "react-native";

const list = [
  {
    title: "Shirts",
    data: ["Polo Shirts", "Denim Shirts", "Zara Shirts"]
  },
  {
    title: "Jeans",
    data: ["Plain Jeans", "Ripped Jeans", "Denim Jeans"]
  },
  {
    title: "T-shirts",
    data: ["Polo", "Benetton", "Zara"]
  },
  {
    title: "Shoes",
    data: ["Sneakers shoes", "Formal shoes"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title1}>{title}</Text>
  </View>
);

class Sectionlist extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
        showsVerticalScrollIndicator={false}
          sections={list}
          keyExtractor={(item, index) => item}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#87ceeb",
    padding: 15,
    marginVertical: 8,
    borderWidth:2,
    borderRadius:10
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title1: {
    fontSize: 24
  }
});

export default Sectionlist;