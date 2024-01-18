import React from "react";
// import { Image } from "expo-image";
import { Button, Card, Text } from "react-native-paper";
import { TypeCourse } from "../types";

const Course = (props: TypeCourse) => (
  <Card>
    <Card.Cover source={require("../assets/images/icon.png")} />
    {/* <Image source={require("../assets/images/icon.png")} /> */}
    <Card.Content>
      <Card.Title title={props.name} />
      <Text variant="bodyLarge">{props.headline}</Text>
      <Card.Actions>
        <Button mode="contained">Learn more</Button>
      </Card.Actions>
    </Card.Content>
  </Card>
);

export default Course;
