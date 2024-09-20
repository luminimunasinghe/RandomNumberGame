import React from "react";
import PropTypes from 'prop-types';
import{View,Text,StyleSheet} from 'react-native';

class Game extends React.Component{
    static PropTypes={

        randomNumberCount:PropTypes.string.isRequired, 
    };
    target=10 +Math.floor(40*Math.random());
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.target}>{this.target}</Text>
                <Text style={styles.target}>{this.props.randomNumberCount}</Text>

            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#ddd",
        flex:1,
        paddingTop:30,
    },
    target:{
        fontSize:40,
        backgroundColor:"#aaa",
        marginHorizontal:50,
        textAlign:'center',

    },
});
export default Game;