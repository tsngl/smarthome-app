import React, { Component } from "react";
import { StyleSheet, TouchableNativeFeedback } from "react-native";

import * as theme from "../theme";
import { Block, Text, PanSlider } from "../Components";
import mocks from "../Settings";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Slider } from "react-native-elements";

class Settings extends Component {
  static navigationOptions = {
    headerLeft: ({ onPress }) => (
      <TouchableNativeFeedback onPress={() => onPress()}>
        <FontAwesome
          size={theme.sizes.font * 1.5}
          color={theme.colors.black}
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

  state = {
    direction: 45,
    speed: 12
  };
  renderController() {
    return (
      <Block flex={1} right center style={style.controller}>
        <Block center style={style.controllerValue}>
          <Text color="white"></Text>
        </Block>
        <Block flex={0.9} style={[style.controllerOverlay]} />
      </Block>
    );
  }
  render() {
    const { navigation, Settings } = this.props;
    const name = navigation.getParam("name");
    const Icon = Settings[name].icon;
    return (
      <Block flex={1} style={style.Settings}>
        <Block flex={0.6} row>
          <Block column>
            <Icon size={theme.sizes.font * 4} color={theme.colors.gray2} />
            <Block flex={1.2} row style={{ alignItems: "flex-end" }}>
              <Text h1>27</Text>
              <Text h1 size={34} height={80} weight={"600"} spacing={0.1}>
                °C
              </Text>
            </Block>
            <Text caption>Temperature</Text>
          </Block>
          <Block flex={1} center>
            <PanSlider />
          </Block>
        </Block>

        <Block flex={1}>
          <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
            <Block row space="between">
              <Text welcome color="black">
                Direction
              </Text>
              <Text>{this.state.direction}</Text>
            </Block>
            <Slider
              minimumValue={0}
              maximumValue={90}
              thumbTintColor={theme.colors.accent}
              minimumTrackTintColor={theme.colors.accent}
              maximumTrackTintColor={theme.colors.gray2}
              onValueChange={value =>
                this.setState({ direction: parseInt(value, 10) })
              }
            />
          </Block>

          <Block column style={{ marginVertical: theme.sizes.base * 2 }}>
            <Block row space="between">
              <Text welcome color="black">
                Speed
              </Text>
              <Text>{this.state.speed}</Text>
            </Block>
            <Slider
              //step={2}
              minimumValue={0}
              maximumValue={30}
              thumbTintColor={theme.colors.accent}
              minimumTrackTintColor={theme.colors.accent}
              maximumTrackTintColor={theme.colors.gray2}
              onValueChange={value =>
                this.setState({ speed: parseInt(value, 10) })
              }
            />
          </Block>
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
  },
  slider: {}
});
