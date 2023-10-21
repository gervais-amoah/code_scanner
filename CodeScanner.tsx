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
        showMarker={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cameraContainerStyle: {
    // height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CodeScanner;
