import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TextInput } from "react-native"
import { connect } from "react-redux"

export class User extends Component {

    render() {
        return (
            <View>
                <Text>This is a User</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

const mapStateToProps = state => {
    return {

    }
}

// const mapDispatchToProps = dispatch => {

// }

export default connect(mapStateToProps)(User)