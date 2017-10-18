import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { TouchableOpacity, StyleSheet, Text, ScrollView, View, TextInput, Image } from 'react-native';

class Pizza extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 24}}>
        <TextInput
          style={styles.text_input}
          placeholder="Type here to translate!!"
          placeholderTextColor="#787"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 28, color: 'white'}}>
          {this.state.text.split(' ').map((word) => ((word == 'pizza')? '🍕' :word)).join(' ')}
        </Text>
      </View>
    );
  }
}

class PhonesFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: 'Val Letman', phone: '054-895-1230' },
        { name: 'Nein Ad', phone: '066-980-5896' },
        { name: 'Senia Kavchik', phone: '055-659-4409' },
        { name: 'David Hilchenko', phone: '066-556-1586' },
        { name: 'Benny Silenko', phone: '070-368-8579' },
        { name: 'Tamado Fukachimo', phone: '063-912-1168' },
      ],
      text: '',
    }
  }

  findDetails(text) {
    let empty = {name :'', phone: ''};
    if (text == '') { return empty }
    for (let value of this.state.list) {
      if (value.name.toLowerCase().includes(text.toLowerCase())) {
        return value;
      }
    }
    return empty;
  }

  render() {
    return (
      <View style={{padding: 24}}>
        <TextInput
          style={styles.text_input}
          placeholder="Worker Name"
          placeholderTextColor="#787"
          onChangeText={(text) => this.setState({text})}
        />
        <TouchableOpacity onPress={() => Communications.phonecall(this.findDetails(this.state.text).phone, true)}>
          <Text style={{padding: 10, color: 'white'}}>
            {this.findDetails(this.state.text).name + ' ' + this.findDetails(this.state.text).phone }
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Yo extends Component {
  render() {
    return (
      <Text style={{padding: 10, fontSize: 28, color: 'white'}}>
        Alex says - {this.props.text}!
      </Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Pizza />
        <PhonesFinder />
        <Yo text="Yo" />
        <Yo text="Sup', man?" />
        <Yo text="Howdy" />
        <Yo text="Great" />
        <Text style={styles.text}>PhonYai!!</Text>
        <Image source={pic} style={{width: 193, height: 110}} />
        <Text style={styles.text}>PhonYai!!</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  text_input: {
    padding: 10,
    fontSize: 24,
    color: '#fff',
  }
});
