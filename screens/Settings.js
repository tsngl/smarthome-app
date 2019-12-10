import React, { Component } from "react";
import { StyleSheet, TouchableNativeFeedback } from "react-native";

import * as theme from "../theme";
import { Block, Text } from "../Components";
import mocks from "../Settings";
import FontAwesome from "react-native-vector-icons/FontAwesome";

class Settings extends Component {
  static navigationOptions = {
    headerLeft: ({ onPress }) => (
      <TouchableNativeFeedback onPress={() => onPress()}>
        <FontAwesome
          size={theme.sizes.font}
          color={"black"}
          name="arrow-left"
        />
      </TouchableNativeFeedback>
    ),
    headerLeftContainerStyle: {
      paddingLeft: theme.sizes.base * 2
    },
    headerStyle: {
      borderBottonColor: "transparent"
    }
  };
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { navigation, Settings } = this.props;
    const name = navigation.getParam("name");
    const Icon = console.log(Settings);
    return (
      <Block flex={1} style={style.Settings}>
        <Block row>
          <Block column>
            <Icon size={38} color={theme.colors.gray} />
          </Block>
        </Block>
        <Block>
          <Text>Extra settings</Text>
        </Block>
      </Block>
    );
  }
}
Settings.defaultProps = {
  Settings: mocks
};
export default Settings;
const style = StyleSheet.create({
  Settings: {
    padding: theme.sizes.base * 2
  }
});
