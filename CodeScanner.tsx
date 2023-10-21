/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BarCodeReadEvent} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

type Props = {
  setCodeData: (data: string) => void;
};

function CodeScanner({setCodeData}: Props) {
  const onSuccess = (e: BarCodeReadEvent) => {
    console.log('Decoded');
    setCodeData(e.data);
  };

  return (
    <View style={styles.cameraContainerStyle}>
      <QRCodeScanner
        onRead={onSuccess}
        reactivate={true}
        reactivateTimeout={500}
        // showMar]ker={true}
        // cameraTimeout={5000}
        // cameraContainerStyle={}
        // flashMode={RNCamera.Constants.FlashMode.torch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainerStyle: {
    // height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 4,
    // borderColor: '#b64f4f',
  },
});

export default CodeScanner;
