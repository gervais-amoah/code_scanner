/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import CodeScanner from './CodeScanner';
import ModalView from './ModalView';

const App = () => {
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
    setModalVisible(true);
  };

  const handleSend = () => {
    Alert.alert(`Send "${codeData}"`);
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
          <Text>
            Data decoded: <Text style={styles.dataText}>{codeData}</Text>
          </Text>
        </>
      )}
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
  },
  sendButton: {
    backgroundColor: '#4ec78b',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  dataText: {
    fontWeight: '500',
  },
});

export default App;
