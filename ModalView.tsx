/* eslint-disable prettier/prettier */
import React, {ReactNode} from 'react';
import {Dimensions, Modal, StyleSheet, Text, View} from 'react-native';

type Props = {
  isModalVisible: boolean;
  toggleModal: () => void;
  children: ReactNode;
};

function ModalView({isModalVisible, toggleModal, children}: Props) {
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Loading scanner...</Text>
            <View style={styles.modalBody}>{children}</View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const {height, width} = Dimensions.get('window');
const modalHeight = height * 0.7;
const modalWidth = width * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBody: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: modalWidth,
    height: modalHeight,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    overflow: 'hidden',
  },
});

export default ModalView;
