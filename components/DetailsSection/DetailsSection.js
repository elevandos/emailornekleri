import styles from "./DetailsSection.module.css";

const DetailsSection = () => {

    /**
     * FAQ button click handler
     * @param {event} event 
     */
    const faqClickHandler = (e) => {
       e.target.parentNode.classList.toggle(styles['active']);
    }

    return (
        <div className={styles['details-wrapper']}>
            <div className={'ads ad-desktop banner-728x90'}>
              <img src="assets/images/elevandos-728x90.png" />
            </div>
            <div className={'ads ad-mob banner-300x250'}>
              <img src="assets/images/banner-300x250.png" />
            </div>
            <div className={styles['info-box']}>
                <div className={styles['head']}>
                    <h2 className={styles['title']}Email GPT Nedir?</h2>
                </div>
                <div id="infoBody" className={styles['body']}>
                    <p className={styles.para}>EmailGPT, bir kurumsal e-posta veya bir satış & pazarlama emaili oluşturmak için OpenAI desteği ile işlerinizi hızlandırmak için tasarlandı. Sadece işiniz için değil, günlük yaşamınızda da gönderebileceğiniz onlarca e-posta şablonuna saniyeler içerisinde erişin. </p>
                    <p className={styles.para}>Dil veya çeviri sorunu yaşayanlar için İngilizce e-posta örnekleri veya Almanca e-posta örnekleri gibi bir çok dilde hazır e-posta şablonları ücretsiz olarak sunulmaktadır. Emailornekleri.com'da işinizi kolaylaştıracak ücretsiz e-posta şablonlarına kolayca erişin. </p>
                    <p className={styles.para}>Yapay zekanın yaşamımızdaki yerine, bizzat bizim de deneyimlediğimiz kurumsal e-posta oluşturma sorununa çözüm oluşturduk. Yeni bir satış temsilcisi veya kurumsal hayata yeni başlamış bir stajyer iseniz sizin için oldukça faydalı bir araç olacaktır. </p>
                </div>
            </div>
            <div className={'ads ad-desktop banner-728x90'}>
              <img src="assets/images/banner-728x90.png" />
            </div>
            <div className={'ads ad-mob banner-300x250'}>
              <img src="assets/images/banner-300x250.png" />
            </div>
            <div className={styles['info-box']}>
                <div className={styles['head']}>
                    <h2 className={styles['title']}>Email GPT yani Emailornekleri.com nasıl çalışır?</h2>
                </div>
                <div id="infoBody" className={styles['body']}>
                    <p className={styles.para}>Saniyeler içerisinde sizin için email örnekleri oluşturabilen Open AI destekli emailornekleri.com'un kullanımı çok basittir. İşte adım adım Email Örnekleri uygulamasının kullanımı:</p>
                    <ol className={styles.list}>
                        <li><a href="https://emailornekleri.com">Email Örnekleri</a> web sitesine telefon veya bilgisayarınızdan giriş yapın.</li>
                        <li>Hangi dilde sonuç almak istiyorsanız yukarıdan dil seçimini yapın.</li>
                        <li>Sayfanın ortasında yer alan arama alanına E-posta konusu veya içeriğine dair bir kelime yazın.</li>
                        <li>Karşınıza çıkan konulardan size en uygun olanı seçerek "E-posta Oluştur" butonuna tıklayın.</li>
                        <li>E-posta konu başlığı ve e-posta içeriği yapay zeka terafından yoğunluğa bağlı bir hızla oluşturuluyor, birkaç saniye bekleyin.</li>
                        <li>E-posta metni sizin için uygunsa "Kopyala" butonuna basarak içeriği kopyalayın ve kullanmaya başlayın.</li>
                    </ol>
                    <p className={styles.para}>Email Örnekleri ile etkileyici e-posta örnekleri elde etmek için içerik yazarı veya teknoloji uzmanı olmanıza gerek yok. İstediğiniz konu başlığını girin ve Emailornekleri.com'un sizin için Open AI desteğiyle e-posta içeriği oluşturmasını bekleyin. İşte bu kadar basit.</p>
                </div>
            </div>
            <div className={'ads ad-desktop banner-728x90'}>
              <img src="assets/images/banner-728x90.png" />
            </div>
            <div className={'ads ad-mob banner-300x250'}>
              <img src="assets/images/banner-300x250.png" />
            </div>
            <div className={styles['info-box']}>
                <div className={styles['head']}>
                    <h2 className={styles['title']}>Why use EmailGPT?</h2>
                </div>
                <div id="infoBody" className={styles['body']}>
                    <p className={styles.para}>Email communication can be a time-consuming and tedious process. With EmailGPT, you can generate high-quality emails quickly and efficiently, freeing up valuable time for other important tasks. Whether you're a busy professional or a student, EmailGPT is the ultimate tool for anyone looking to streamline their email communication.</p>
                    <p className={styles.para}>With its intuitive interface, customization options, and natural-sounding email generation, EmailGPT can help you improve the quality of your email communication and build strong relationships with your recipients. Whether you're crafting a job application, a thank-you note, or a simple message to a colleague, EmailGPT can help you craft emails that are tailored to your recipient's needs and preferences.</p>
                    <p className={styles.para}>And with its superfast web app, light/dark theme mode, responsive design, and multi-lingual support, EmailGPT is the ultimate tool for anyone looking to take their email communication to the next level. So why wait? Try EmailGPT today and experience the power of AI-powered email generation for yourself.</p>
                </div>
            </div>
            <div className={'ads ad-desktop banner-728x90'}>
              <img src="assets/images/banner-728x90.png" />
            </div>
            <div className={'ads ad-mob banner-300x250'}>
              <img src="assets/images/banner-300x250.png" />
            </div>
            <div className={styles['info-box']}>
                <div className={styles['head']}>
                    <h2 className={styles['title']}>FAQs</h2>
                </div>
                <div id="infoBody" className={styles['body']}>
                    <div className={styles['faq-item']}>
                        <div className={styles['faq-button']} onClick={faqClickHandler}>What is EmailGPT web app?</div>
                        <div className={styles['faq-body']}>EmailGPT web app is an AI-powered tool that leverages GPT to generate high-quality emails based on user-provided subject or topic. The web app is built using ReactJS and NextJS frameworks and can be used by anyone who needs help with drafting emails.</div>
                    </div>
                    <div className={styles['faq-item']}>
                        <div className={styles['faq-button']} onClick={faqClickHandler}>How do I use EmailGPT web app?</div>
                        <div className={styles['faq-body']}>To use EmailGPT web app, simply navigate to the website and input your desired email subject or topic. The AI algorithm will generate a high-quality email response based on your input, which you can then edit and send as you see fit.</div>
                    </div>
                    <div className={styles['faq-item']}>
                        <div className={styles['faq-button']} onClick={faqClickHandler}>How does EmailGPT web app ensure the quality of the emails it generates?</div>
                        <div className={styles['faq-body']}>EmailGPT web app uses the latest machine learning algorithms to ensure that the emails it generates are of the highest quality. The tool is constantly being updated and refined based on user feedback, and the AI algorithm is continually learning and adapting to improve its performance.</div>
                    </div>
                    <div className={styles['faq-item']}>
                        <div className={styles['faq-button']} onClick={faqClickHandler}>Is EmailGPT web app safe to use?</div>
                        <div className={styles['faq-body']}>Yes, EmailGPT web app is safe to use. The tool is designed to be used for legitimate purposes only and does not collect any personally identifiable information from users. Additionally, the app is hosted on secure servers and utilizes the latest encryption technologies to protect user data.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsSection;
