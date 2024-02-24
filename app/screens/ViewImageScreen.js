import React from 'react';
import {StyleSheet,Image,View} from 'react-native';


function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
        <Image resizeMode='contain' style={styles.viewImage} source={require(`../assets/chair.jpg`)} />
        </View>
    );
}

const styles = StyleSheet.create({
    
    container:{  
        flex:1,
        backgroundColor:`black`,
    },  
    viewImage:{
        width:`100%`,
        height:`100%`,
    },
    closeIcon:{
        width:50,
        height:50,
        backgroundColor:`#4ecdc4`,
        top:40,
        left:10,
        borderRadius:10,
        position:`absolute`

    },
    deleteIcon:{
        width:50,
        height:50,
        backgroundColor:`tomato`,
        top:40,
        right:10,
        borderRadius:10,
        position:`absolute`

    }

})

export default ViewImageScreen;