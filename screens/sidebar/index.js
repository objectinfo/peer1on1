import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerCover = require("../../assets/images/drawer-cover.png");
const drawerImage = require("../../assets/images/logo-peer1on1.png");
const datas = [
  {
    name: "Home",
    route: "HomeStack",
    icon: "home",
    bg: "#C5F442"
  },
  {
    name: "Team",
    route: "LeadershipStack",
    icon: "people",
    bg: "#477EEA"
  },
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  _onPressButton(props, data) {
    if (props.activeItemKey == data.route) {
      props.navigation.closeDrawer();
    } else {
      props.navigation.navigate(data.route);
    }
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square source={drawerImage} style={styles.drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this._onPressButton(this.props, data)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;