/** @format */

import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  leftBar: {
    height: '100%',
    width: '200px',
    position: 'fixed',
    backgroundColor: '#319795',
    zIndex: 1,
    top: 0,
    left: 0,
    paddingTop: '60px',
  },
});
const PdfFile = ({ data }) => {
  return (
    <Document>
      <Page size='A4' style={styles.page}>
        <View style={styles.leftBar}>
          <Text>{data.firstName}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfFile;
