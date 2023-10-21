/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import CodeScanner from './CodeScanner';
import ModalView from './ModalView';

const App = () => {
  // const [openScanner, setOpenScanner] = useState(false);
  const [codeData, setCodeData] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleScan = (data: string) => {
    setCodeData(data);
    setModalVisible(false);
  };

  const handlePress = () => {
    console.log('Button Pressed');
    // setOpenScanner(true);
    setModalVisible(true);
  };

  const handleSend = () => {
    Alert.alert(`Sending data: ${codeData}`);
  };

  return (
    <View style={styles.container}>
      {isModalVisible ? (
        <ModalView isModalVisible={isModalVisible} toggleModal={toggleModal}>
          <CodeScanner setCodeData={handleScan} />
        </ModalView>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Launch scanner</Text>
        </TouchableOpacity>
      )}

      {codeData && (
        <>
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.buttonText}>Send data to the backend</Text>
          </TouchableOpacity>
          <Text>Data: {codeData}</Text>
        </>
      )}

      {/* {openScanner && <CodeScanner setCodeData={handleScan} />} */}

      {/* MODAL  */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    // marginBottom: 10,
  },
  sendButton: {
    backgroundColor: '#4ec78b',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
