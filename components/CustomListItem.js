import React, {useState , useEffect} from "react"
import { KeyboardAvoidingView, StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button, Input, Image} from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListItem } from "react-native-elements";
import { Avatar } from "react-native-elements";
import { db } from "../firebase";
const CustomListItem = ({id, chatName, enterChat }) =>  {
const [chatMessages, setChatMessages] = useState([]);   

useEffect(() =>  {
  const unsubscribe = db
  .collection('chats')
  .doc(id)
  .collection('messages')
  .orderBy('timestap','desc')
  .onSnapshot((snapshot) => 
    setChatMessages(snapshot.docs.map((doc)=>doc.data()))
  );

  return unsubscribe;
})

    return (
       
            <ListItem 
            key= {id}
            onPress={() => enterChat(id,chatName)} key={id} bottomDivider>

               <Avatar 
               rounded
               source={{
                   uri:
                   "http://assets.stickpng.com/images/585e4beacb11b227491c3399.png"
               }}
               />
                      
              <ListItem.Content>
                  <ListItem.Title >
                    {chatName}
                  </ListItem.Title>
                  
              </ListItem.Content>

            </ListItem>
            
      
    );
};

export default CustomListItem;

const styles = StyleSheet.create({
    
});