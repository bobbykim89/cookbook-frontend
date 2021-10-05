import Head from 'next/head';
import Footer from './LayoutParts/Footer';
import Navbar from './LayoutParts/Navbar';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div className='relative'>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta keywords='keywords' content={keywords} />
      </Head>
      <Navbar />
      <div
        className='absolute inset-0 z-[-1] h-full bg-repeat opacity-5'
        style={{
          backgroundImage: 'url(/images/pattern.svg)',
        }}
      ></div>
      <div className='relative'>{children}</div>
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
