/** @format */

import { Box, HStack } from '@chakra-ui/react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useRouter } from 'next/router';
import { Meta } from '../components';
import { Button } from '../components/motion';
import PdfFile from '../components/PdfFile';
import { alert, success } from '../services/notifyService';
import styles from '../styles/pdf.module.css';
const DownloadPage = () => {
  const router = useRouter();
  const param = router.query?.data;
  if (!param) {
    return null;
  }
  const data = JSON.parse(param);
  const date = new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: '2-digit' });
  return (
    <>
      <Meta title='Download' />
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img className={styles.img} src='/photo.png' alt='photo' />

          <div className={styles.contactWrapper}>
            <div className={styles.contactTitle}>Contact</div>
            <hr className={styles.divider}></hr>
            <div className={styles.contact}>
              <div className={styles.contactIcon}>&</div>
              <div className={styles.contactText}>test@mail.com</div>
            </div>
            <div className={styles.contact}>
              <div className={styles.contactIcon}>&</div>
              <div className={styles.contactText}>0916809268</div>
            </div>
          </div>

          <div className={styles.skillWrapper}>
            <div className={styles.skillTitle}>Skills</div> <hr className={styles.divider}></hr>
            <div className={styles.skill}>
              <div className={styles.skillText}>React</div>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}></div>
      </div>
      <Box>
        <HStack spacing={4}>
          {/* <PDFDownloadLink document={<PdfFile data={data} />} fileName={`Resume - ${date}`}>
            {({ loading, error }) => {
              return (
                <Button
                  colorScheme='teal'
                  variant='solid'
                  size='lg'
                  isLoading={loading}
                  disabled={error}
                  loadingText='Generating...'
                  onClick={() => {
                    success('Successfully downloaded');
                  }}>
                  Download
                </Button>
              );
            }}
          </PDFDownloadLink> */}
        </HStack>
      </Box>
    </>
  );
};

export default DownloadPage;
