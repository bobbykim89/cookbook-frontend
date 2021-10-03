import Head from 'next/head';
import Footer from './LayoutParts/Footer';
import Navbar from './LayoutParts/Navbar';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta keywords='keywords' content={keywords} />
      </Head>
      <Navbar />
      <div className='relative min-h-[85vh]'>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Bobby's Cookbook",
  description: 'Recipes for those who loves to cook :D',
  keywords: 'recipe, cooking, hobby',
};

export default Layout;
