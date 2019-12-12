import React, { Component } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Block, Text } from "../Components";

import * as theme from "../theme";
import mocks from "../Settings";

class Dashboard extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigation, Settings } = this.props;
    const LightIcon = Settings["light"].icon;
    const AcIcon = Settings["ac"].icon;
    const TempIcon = Settings["temperature"].icon;
    const FanIcon = Settings["fan"].icon;
    const WifiIcon = Settings["wi-fi"].icon;
    const ElectIcon = Settings["electricity"].icon;
    return (
      <ScrollView
      contentContainerStyle={styles.buttons}
      showsVerticalScrollIndicator={false}
    >
      <Block style={styles.dashboard}>
        <Block column style={styles.dashboard.marginVertical}>
          <Text welcome>Welcome</Text>
          <Text name>Tsengelmaa</Text>
        </Block>

        <Block row style={{ paddingVertical: 10 }}>
          <Block flex={1.5} row style={{ alignItems: "flex-end" }}>
            <Text h1>34</Text>
            <Text h1 size={34} height={80} weight="600" spacing={0.1}>
              °C
            </Text>
          </Block>
          <Block
            flex={1}
            column
            style={{ paddingHorizontal: theme.sizes.base }}
          >
            <Text caption>Humidity</Text>
            <Text>Chart</Text>
          </Block>
        </Block>

       
          <Block flex={0} column space="between">
            <Block row space="around" style={styles.dashboard.marginVertical}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Settings", { name: "light" })
                }
              >
                <Block center middle style={styles.button}>
                  <LightIcon size={38} />
                  <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                    {Settings["light"].name}
                  </Text>
                </Block>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Settings", { name: "ac" })}
              >
                <Block center middle style={styles.button}>
                  <AcIcon size={38} />
                  <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                    {Settings["ac"].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>

            <Block row space="around" style={styles.dashboard.marginVertical}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Settings", { name: "temperature" })
                }
              >
                <Block center middle style={styles.button}>
                  <TempIcon size={38} />
                  <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                    {Settings["temperature"].name}
                  </Text>
                </Block>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Settings", { name: "fan" })}
              >
                <Block center middle style={styles.button}>
                  <FanIcon size={38} />
                  <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                    {Settings["fan"].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>

            <Block row space="around" style={styles.dashboard.marginVertical}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Settings", { name: "wi-fi" })
                }
              >
                <Block center middle style={styles.button}>
                  <WifiIcon size={38} />
                  <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                    {Settings["wi-fi"].name}
                  </Text>
                </Block>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("Settings", { name: "electricity" })
                }
              >
                <Block center middle style={styles.button}>
                  <ElectIcon size={38} />
                  <Text button style={{ marginTop: theme.sizes.base * 0.5 }}>
                    {Settings["electricity"].name}
                  </Text>
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
      
      </Block>
      </ScrollView>
    );
  }
}

Dashboard.defaultProps = {
  Settings: mocks
};
export default Dashboard;
const styles = StyleSheet.create({
  dashboard: {
    padding: theme.sizes.base * 2,
    marginVertical: theme.sizes.base * 2
    // marginBottom: theme.sizes.base * 6,
  },
  button: {
    backgroundColor: theme.colors.button,
    width: 151,
    height: 151,
    borderRadius: 151 / 2
  }
});
