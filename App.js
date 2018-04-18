import React from 'react';
import { Button, View, Text, StyleSheet,TouchableOpacity, TextInput, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json


class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>PENGINPUTAN BUKU PERPUSTAKAAN</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
constructor(props) {
    super(props);
    this.state = {
      namabuku: '',
      jenisbuku: '',
      kodebuku: 0,
      
      activityIndicatorLoading: false,
    };
  }

insertDataIntoMySQL = () => {
  this.setState({ activityIndicatorLoading: true }, () => {
    fetch('https://eka-ariawan.000webhostapp.com/insertPesanan.php',
        {
          method: 'POST',
          headers:
          {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              namabuku: this.state.namabuku,
              jenisbuku: this.state.jenisbuku,
              kodebuku: this.state.kodebuku,
            }
          )
          }).then((response) => response.json()).then((responseJsonFromServer) => {
            alert(responseJsonFromServer);
            this.setState({ activityIndicatorLoading: false });
          }).catch((error) => {
            console.error(error);
            this.setState({ activityIndicatorLoading: false });
            });
  });
}
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={{flex:2}}>
        <Text style={{textAlign: 'center', backgroundColor:'#ffbfc6',fontSize:20,padding:20,borderRadius:30,width:300}}>Halaman Penginputan</Text>
        </View>
        <View style={{flex:4}}>
        <TextInput
                style={{ height: 40, width: 150, textAlign: 'center', backgroundColor:'white', borderRadius:15, height:60,width:270 }}
              placeholder="Nama Buku"
              onChangeText={(namabuku) => this.setState({ namabuku })}
            />
            <Text></Text>
        <TextInput
                style={{ height: 40, width: 150, textAlign: 'center', backgroundColor:'white', borderRadius:15, height:60,width:270 }}
              placeholder="jenis Buku"
              onChangeText={(jenisbuku) => this.setState({ jenisbuku })}
            />
            <Text></Text>
        <TextInput
                style={{ height: 40, width: 150, textAlign: 'center', backgroundColor:'white', borderRadius:15, height:60,width:270 }}
              placeholder="kode buku"
              onChangeText={(kodebuku) => this.setState({ kodebuku})}
            />
            <Text></Text>
            <TouchableOpacity
              style={styles.TouchableOpacityStyle}
              activeOpacity={0.5}
             
              onPress={this.insertDataIntoMySQL}
            >
              <Text >Registrasi</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
        <Button
          title="LIHAT BUKU YANG DI INPUTKAN"
          onPress={() => this.props.navigation.navigate('Input')}
          color="#541219"
        />
        </View>
        
     </View> 
    );
  }
}

class Input extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  render() {
    return (
      <View style={styles.containerMain}>
        <Text>NAMA BUKU</Text>
        <Text></Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
          color="#541219"
        />
      </View>
    );
  }
}

class Registrasi extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };
  render() {
    const { params } = this.props.navigation.state;
    const nama = params ? params.nama : null;
    const jenis = params ? params.jenis : null;
    return (
      <View style={styles.containerMain}>
        <Text></Text>
        <Text></Text>
        <Text>Penginputan Buku Telah Behasil</Text>
        <Text></Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
          color="#541219"
        />
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Input: {
      screen: Input,
    },
    Registrasi: {
      screen: Registrasi,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#ba0517',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  TouchableOpacityStyle:
   {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#2196F3',
      marginBottom: 20,
      width: '70%',
      borderRadius: 7,
      padding:30,
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center'
    },
  icon: {
    //tintColor: '#fff',
    height: 100,
    width: 100,
  }
});