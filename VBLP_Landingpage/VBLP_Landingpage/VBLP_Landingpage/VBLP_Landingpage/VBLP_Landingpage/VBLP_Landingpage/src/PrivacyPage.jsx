import React, { useEffect } from 'react';
import './PrivacyPage.css';
import { useLocation } from 'react-router-dom';

// 1. ScrollToTop is now a separate component defined outside of PrivacyPage
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [pathname]); // This effect runs whenever the pathname (URL) changes

  // This component doesn't render anything, it just performs the scroll action
  return null;
};


const PrivacyPage = () => {
  return (
    // 2. We use a React Fragment to return both the ScrollToTop component and the main content
    <>
      {/* 3. We render the ScrollToTop component here. It will run its logic every time this page is visited. */}
      <ScrollToTop />
      
      <div className="privacy-policy-container">
        <div className="privacy-policy-header">
          <h1>Privacy Policy for VblpTechSolutions</h1>
          <p>At VblpTechSolutions, accessible from <span style={{color:"blue", cursor:"pointer"}}> <a href="https://vblptechsolutions.com/">https://vblptechsolutions.com/</a> </span>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by VblpTechSolutions and how we use it.</p>
          <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
          <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in VblpTechSolutions. This policy is not applicable to any information collected offline or via channels other than this website.</p>
        </div>
        
        <div className="privacy-policy-content">
          <section className="policy-section">
            <h2>Consent</h2>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
          </section>
          
          <section className="policy-section">
            <h2>Information We Collect</h2>
            <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, and in connection with other activities, services, features or resources we make available on our Site.</p>
            <ul>
              <li>Name and contact information</li>
              <li>Demographic information</li>
              <li>Computer and connection information</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>How We Use Your Information</h2>
            <p>VblpTechSolutions uses collected information for the following purposes:</p>
            <ul>
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>
            </ul>
          </section>
          
          <section className="policy-section">
            <h2>Log Files</h2>
            <p>VblpTechSolutions follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
          </section>
          
          <section className="policy-section">
            <h2>Cookies and Web Beacons</h2>
            <p>Like any other website, VblpTechSolutions uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
            <p>For more general information on cookies, please read <span style={{color:"blue", cursor:"pointer"}}> <a href= "What Are Cookies from Cookie Consent">"What Are Cookies" from Cookie Consent".</a> </span></p>
          </section>
          
          <section className="policy-section">
            <h2>Google DoubleClick DART Cookie</h2>
            <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL –<span style={{color:"blue", cursor:"pointer"}}>https://policies.google.com/technologies/ads</span></p>
          </section>
          
          <section className="policy-section">
            <h2>Our Advertising Partners</h2>
            <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>
            <ul>
              <li>Google</li>
              <span style={{color:"blue", cursor:"pointer"}}><a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></span>
            </ul>
          </section>

          <section className="policy-section">
            <h2>Advertising Partners Privacy Policies</h2>
            <p>You may consult this list to find the Privacy Policy for each of the advertising partners of VblpTechSolutions.</p>
            <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on VblpTechSolutions, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
            <p>Note that VblpTechSolutions has no access to or control over these cookies that are used by third-party advertisers.</p>
          </section>

          <section className="policy-section">
            <h2>Third Party Privacy Policies</h2>
            <p>VblpTechSolutions's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
            <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>
          </section>

          <section className="policy-section">
            <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <p>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</p>
            <p>Request that a business delete any personal data about the consumer that a business has collected.</p>
            <p>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
          </section>

          <section className='policy-section'>
            <h2>GDPR Data Protection Rights</h2>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <p>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</p>
            <p>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</p>
            <p>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</p>
            <p>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</p>
            <p>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</p>
            <p>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</p>
            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
          </section>

          <section className='policy-section'>
            <h2>Children's Information</h2>
            <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
            <p>VblpTechSolutions does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
          </section>

        </div>
      </div>
    </>
  );
};

export default PrivacyPage;