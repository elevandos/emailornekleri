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
                    <h2 className={styles['title']}>What is EmailGPT?</h2>
                </div>
                <div id="infoBody" className={styles['body']}>
                    <p className={styles.para}>EmailGPT is a revolutionary new web app that leverages the power of artificial intelligence to create high-quality emails with ease. Whether you're a busy professional, a student, or anyone in between, EmailGPT can help you streamline your email communication and improve the overall quality of your messages. With its cutting-edge tech stack featuring ReactJS, NextJS, NPM, and the OpenAI API, EmailGPT is the ultimate tool for anyone looking to take their email communication to the next level.</p>
                    <p className={styles.para}>With EmailGPT, you no longer need to spend hours drafting emails or struggling with writer's block. Simply enter your desired subject or topic, and let the AI-powered tool generate a natural-sounding email for you in seconds. Whether you're crafting a job application, a thank-you note, or a simple message to a colleague, EmailGPT can help you craft emails that are tailored to your recipient's needs and preferences.</p>
                    <p className={styles.para}>So why wait? Try EmailGPT today and experience the power of AI-powered email generation for yourself. With its user-friendly interface, customization options, and time-saving efficiency, EmailGPT is the ultimate tool for anyone looking to streamline their email communication and improve the overall quality of their messages.</p>
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
                    <h2 className={styles['title']}>How Does EmailGPT Work?</h2>
                </div>
                <div id="infoBody" className={styles['body']}>
                    <p className={styles.para}>Using EmailGPT is easy and intuitive. Simply enter your desired subject or topic, and let the AI-powered tool generate a high-quality email for you in seconds. Here's a step-by-step guide to using EmailGPT:</p>
                    <ol className={styles.list}>
                        <li>Open the <a href="emailgpt.flerosoft.com">EmailGPT</a> web app in your favorite browser</li>
                        <li>Select the language you want to use</li>
                        <li>Enter your desired subject or topic in the text input box</li>
                        <li>Click the "Generate Email" button</li>
                        <li>Wait a few seconds while EmailGPT generates a natural-sounding email for you</li>
                        <li>Click the "Copy to Clipboard" button to copy the email to your clipboard, or click the "Reset" button to start over</li>
                    </ol>
                    <p className={styles.para}>With EmailGPT, you don't need to be a writer or a tech expert to craft impressive emails that get the job done. Simply input your desired message and watch as EmailGPT generates the perfect email for you.</p>
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
