import React, {Component} from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Dimensions,Button } from 'react-native';
import jogodavelha from './src/jogodavelha'

export default class App extends Component {

  constructor(props){
    super(props);
    jogodavelha.start();
    this.state = {
      board: jogodavelha.board,
      gameOver: jogodavelha.gameover
    }
  }

  makeplay(index){
    jogodavelha.make_play(index)
    this.setState({
      board: jogodavelha.board,
      gameOver: jogodavelha.gameover
    })
  }

  isGameOver(){
    if(this.state.gameOver ){
      if(jogodavelha.simbols.turn_index == 0){
        return  <Text style={{color:'#1eff00'}}>'O' Venceu!</Text>
                  
      }
      if(jogodavelha.simbols.turn_index == 1){
        return  <Text style={{color:'#16cef2'}}>X Venceu!</Text>
                  
      }
    }   
  }

  render(){  

    return (
      <View style={{flex:1,backgroundColor: '#666661'}}>
        <Text style={style.titulo}>Jogo da Velha</Text>
        <View style={style.container}>
          {this.state.board.map((value, index) => (
            <TouchableOpacity 
              key={index} 
              style={[style.peca,this.corQ(value)]} 
              onPress= {() => {this.makeplay(index)}}
            >
            {this.corR(value)}
            </TouchableOpacity>
          ))}
        </View>
        <Text style={style.gameover}>{this.isGameOver()}</Text>
        <Button 
          onPress= {() => {jogodavelha.start(null)}}
          title='Zerar'
          color='#7d4011'
        >
        </Button>
      </View>
    );
  }
   corQ(value) {
        if (value == 'O') {
            return {backgroundColor:'#1eff00'}
        }
        if (value == 'X') {
            return {backgroundColor:'#16cef2'}
        }
    }
   corR(value) {
        if (value == 'O') {
            return <Text style={[style.texto]}>{value}</Text>
        } else {
            return <Text style={style.texto}>{value}</Text>
        }
    }
}

  const style = StyleSheet.create({
    container:{
      flex:0.9,
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent:'center',
      alignItems: 'center',
      alignContent:'center',
      backgroundColor: '#666661'
    },
    peca:{
      width: Dimensions.get('window').width / 3,
      height: Dimensions.get('window').width / 3,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      borderWidth:1,
      borderColor:'#666'
    },
    texto:{
      fontSize:60,
      color:'#fff'
    },
    gameover:{
      textAlign:'center',
      justifyContent:'center',
      paddingTop:10,
      marginBottom:20,
      color:'#fff',
      fontSize:20,
      fontWeight:'bold'
    },
    titulo:{
      fle:0.1,
      textAlign:'center',
      justifyContent:'center',
      marginTop:40,
      color:'#fff',
      fontSize:25,
      fontWeight:'bold'
    }
  })