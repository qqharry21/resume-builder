/** @format */

import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = ({ title, keywords, description, image }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={image ? image : '/logo.png'} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={title} />
      <meta property='og:url' content='' />
      {/* <meta name='fb:app_id' content='' /> */}

      <title>{title.includes('Resume Builder') ? title : title.concat(' | Resume Builder')}</title>

      <link rel='icon' href='/logo.png' />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Resume Builder',
  keywords: 'web development, programming, web design, react js, chakra ui, next js',
  description: 'Build your own resume with this application',
};

Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
};

export default Meta;
