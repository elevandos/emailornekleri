import Head from "next/head";
import Header from "../components/Header/Header";
import styles from "./index.module.css";
import Footer from "../components/Footer/Footer";
import Searchbar from "../components/Searchbar/Searchbar";
import { AppContextProvider } from "../store/context/AppContext";
import ResultContainer from "../components/ResultContainer/ResultContainer";

import { ToastContainer } from "react-toastify";
import DetailsSection from "../components/DetailsSection/DetailsSection";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {

  return (
    <AppContextProvider>
      <Head>
        <title>Email Örnekleri | Yapay Zeka Destekli ve Ücretsiz E-posta Şablonları</title>
        <link rel="icon" href="assets/icons/favicon.ico" />
        <meta name="description" content="Bir çok dilde bireysel veya kurumsal e-posta örnekleri oluşturmak için yaoay zekadan ücretsiz faydalanın. OpenAI desteğini işinizde kullanmaya başlayın."/>
        <meta property="og:title" content="AI Email Örnekleri | Yapay Zeka İle E-Posta Şablonları"/>
        <meta property="og:site_name" content="Email Örnekleri"/>
        <meta property="og:url" content="https://elevandos.com/"/>
        <meta property="og:description" content="Yapay zeka ile ücretsiz email örnekleri oluşturmak için AI Email'i kullanın. İşinizi kolaylaştırmak için Elevandos tarafından oluşturuldu."/>
        <meta property="og:type" content="product"/>
        <meta property="og:image" content="assets/images/ogimg.jpg"></meta>
      </Head>
      
      <Header></Header>
      <main className={styles.main}>
        <div className={styles.container}>
        <div className={styles['inner-wrap']}>
          <div className={styles['left-wrap']}>
            <img src="assets/images/logo-blue.png" className={styles.logo} />
            <div className={styles.container}>
              <Searchbar />
              <ResultContainer />
            </div>
            <DetailsSection/>
          </div>
          <Sidebar/>
        </div>
        </div>
      </main>
      <Footer></Footer>
      <ToastContainer />
    </AppContextProvider>
  );
}
