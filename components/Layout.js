import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta keywords='keywords' content={keywords} />
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: "Bobby's Cookbook",
  description: 'Recipes for those who loves to cook :D',
  keywords: 'recipe, cooking, hobby',
};

export default Layout;
