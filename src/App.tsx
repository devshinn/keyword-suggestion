import Header from './components/common/Header';
import Layout from './components/common/Layout';
import ShearchSection from './components/shearchSection/ShearchSection';
import SearchProvider from './context/ShearchProvider';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <SearchProvider>
          <ShearchSection />
        </SearchProvider>
      </Layout>
    </>
  );
}

export default App;
