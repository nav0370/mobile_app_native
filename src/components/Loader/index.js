import React, { Component } from "react";
import { Animated, StyleSheet } from "react-native";

export default class Loader extends Component {
  state = {
    AnimatedOpacity: new Animated.Value(1)
  };

  componentDidMount() {
    Animated.sequence([
      Animated.delay(this.props.animationOffset),

      Animated.loop(
        Animated.sequence([
          Animated.timing(this.state.AnimatedOpacity, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
          }),

          Animated.timing(this.state.AnimatedOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
          })
        ])
      )
    ]).start();
  }

  render() {
    let { AnimatedOpacity } = this.state;

    return (
      <Animated.View
        testID="LoadingBarAnimation" 
        style={[
          styles.textBar,
          this.props.style,
          {
            opacity: AnimatedOpacity
          }
        ]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
const styles = StyleSheet.create({
  textBar: {
    borderRadius: 0,
    width: 60,
    height: 20,
    backgroundColor: "#f4f4f4",
    paddingTop: 5
  }
});