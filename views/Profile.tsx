import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TextInput } from "react-native"
import { connect } from "react-redux"
import Badges from "./../components/Badges"

export class Profile extends Component {
  componentDidMount() {
    this.props.setUserName("Matt")
  }

  render() {
    return (
      <View>
        <View>
          <Text>Level 24</Text>
          <Text>Profile Pic Goes Here</Text>
        </View>
        <View>
          <Text>{this.props.username}</Text>
        </View>
        <View>
          <Text>Equipped Badges</Text>
          <Badges />
        </View>
        <View>
          <Text>Hobbies</Text>
          <TextInput value={"My hobbies are bla bla bla bla"} />
        </View>
        <View>
          <Text>Interests</Text>
          <TextInput value={"My interest are bla bla bla bla"} />
        </View>
        <View>
          <Text>All Badges</Text>
          <Badges />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: "purple",
  }
})

const mapStateToProps = state => {
  return {
    username: state.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserName: (username) => {
      dispatch({
        type: "SET_USERNAME",
        username: username
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)