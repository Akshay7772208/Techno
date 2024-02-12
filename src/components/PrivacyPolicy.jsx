import React from 'react';

const PrivacyPolicy = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: 'auto',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    //   marginTop: '50px',
    },
    contentContainer: {
      marginLeft: '80px',
    },
    subheading: {
      color: '#333',
      marginTop: '20px',
      fontWeight:'bold'
    },
    paragraph: {
      lineHeight: '1.6',
      color: '#666',
      marginBottom: '0'
    },
    list: {
        padding: '0',
        marginLeft: '20px', // Adjust the margin as needed
    },
    listItem: {
        lineHeight: '1.6',
        color: '#666',
        listStyleType: 'disc', 
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <p style={{...styles.paragraph,fontWeight:'bold'}}>
          Respecting privacy is an important part of our commitment to respondents and the general public.
        </p>

        <p style={{...styles.paragraph,fontWeight:'bold'}}>
          Updated as of Nov 30th, 2019
        </p>
        <p style={styles.paragraph}>
          Technobridge (referred to as "us", "we" and "our" in this notice) is a part of Corporate Training Industry.
          We are dedicated to protecting the privacy of our customers and research participants.
          This privacy policy is applicable to all our clients and private data that we assemble or use in the development of our business,
          as well as all client information and research participant data stored at any Technobridge facility or kept on the Technobridge network.
          Anyone who has access to such information must follow this privacy policy.
        </p>
        <p style={styles.paragraph}>
          We are always committed to being transparent in our management and processing of personal information in agreement with valid privacy and data protection laws.
          However, this Privacy Notice elucidates what private information we gather from you, how we use it, and what your rights are.
        </p>

        <p style={styles.paragraph}>
          If you have any questions, please contact: <a href="mailto:info@technobridge.in">info@technobridge.in</a>
        </p>

        <p style={styles.subheading}>This Privacy Policy explains the following:</p>
      <ul style={styles.list}>
        <li style={styles.listItem}>What private data we gather;</li>
        <li style={styles.listItem}>How we use this data;</li>
        <li style={styles.listItem}>How long we save your private data;</li>
        <li style={styles.listItem}>How we protect your private data;</li>
        <li style={styles.listItem}>Information sharing and revelation;</li>
        <li style={styles.listItem}>International and group company transfer of private data;</li>
        <li style={styles.listItem}>Your rights concerning the private data you provide to us;</li>
        <li style={styles.listItem}>Our accountability for website links;</li>
        <li style={styles.listItem}>Updates;</li>
        <li style={styles.listItem}>How to contact us.</li>
      </ul>

      <span style={styles.subheading}>What private data we collect:</span>
        {/* Include the additional content here */}
        <p style={styles.paragraph}>
          We may collect private data in several different contexts.
        </p>

        <p style={styles.paragraph}>
          <span style={styles.subheading}>What private data we collect during our market research studies</span>
        </p>

        <p style={styles.paragraph}>
          We may gather data such as e-mail address, name, industry name, job title, and occupation title from certain non-public and public sources,
          such as third-party business contact data suppliers and corporate websites. We may also receive data such as name, job title, business name,
          e-mail address, and occupation title from our patrons, who are usually suppliers of facilities watching for feedback on their services,
          industry, or products from their clients.
        </p>

        <p style={styles.paragraph}>
          In online surveys, we may also collect your IP address. This is mainly used for quality examination purposes and to avert fraud.
          We never use an IP address to identify persons.
        </p>

        <p style={styles.paragraph}>
          <span>Client Information</span>
        </p>

        <p style={styles.paragraph}>
          We treat all data we receive from patrons as private and do not use the information for any purpose other than to accomplish our duties to them.
          We keep consumer info secure at all times and avert the misuse and illegal disclosure of it by our staffs or any third parties.
        </p>
        <span style={styles.subheading}>How we use this information</span>
        <p style={styles.paragraph}>
          Except where mandatory by law, we use the private data you provide for the following purposes:
        </p>

        <p style={styles.paragraph}>
          The processing of your private data is based either on a) our legitimate interests associated with us delivering you services you have demanded or consumer relationship with us, or b) your agreement, where demanded.
        </p>

        <p style={styles.paragraph}>
          We may share your data in the following ways:
        </p>

        <ul style={styles.list}>
          <li>
            (a) with our service providers, as it is essential to allow them to provide services to us (in which cases such service providers are banned from using the data until it is required to provide the services);
          </li>
          <li>
            (b) with our customers;
          </li>
          <li >
            (c) as practically necessary to comply with law or a legal process (including a court or government order or summons), to detect, prevent, or otherwise address fraud, security or technical issues, to enforce this privacy policy, and to protect the rights, property or safety of Technobridge, our users, and/or the public;
          </li>
          <li >
            (d) if we sell, transfer or otherwise share some or all of our commercial or assets, comprising your private information, in association with a corporate transaction such as sale of assets or reorganization, a merger, acquisition, or consolidation or in the event of bankruptcy, in such case we will make reasonable efforts to require the receiver to honor this privacy policy; or
          </li>
          <li >
            (e) with your rapid consent.
          </li>
        </ul>

        <p style={styles.paragraph}>
          If you would like more information on any of the data transfer mechanisms on which we rely, please contact us using the details provided below.
        </p>

        <p style={styles.paragraph}>
          <strong>General Rights</strong>
        </p>

        <p style={styles.paragraph}>
          If you wish to stop receiving promotion communications from us, then please click on the "unsubscribe" link at the bottom of the relevant emailing. If you wish to opt-out totally then please contact us at using the details provided below.
        </p>

        <p style={styles.paragraph}>
          If you would like us to erase your data from our records, please contact us using the contact details given below, and we will respond within a reasonable time. Please note that we may be required to recollect certain data by law and/or for our own legitimate business determination.
        </p>

        <span style={styles.subheading}>Our responsibility for website links</span>
        <p style={styles.paragraph}>
          This Privacy Notice is limited to the private data collected by Technobridge. We may provide links within our website to other websites, including social media sites such as Facebook, LinkedIn, and Twitter. If you follow these links, you should use these sites in combination with their valid user and privacy notices as their data practices fall outside the scope of this Privacy Notice. Additionally, we can have no responsibility for control over the data collected by any third-party website, and we won’t be answerable for the fortification and privacy of any data which you may deliver on such websites.
        </p>

        <span style={styles.subheading}>WHAT ABOUT COOKIES?</span>
        <p style={styles.paragraph}>
          Cookies are identifiers that we transfer to your PC’s hard drive through your web browser your internet browser to empower our frameworks to perceive your internet browser to provide extra highlights such as customized information and storage of items in your cart. The help tab on the toolbar on most browsers from accepting new cookies, how to have the browser notify you when you get another cookie, or how to have cripple cookies altogether. However, cookies allow you to take full favorable positions of some of the Technobridge and we endorsed that you leave them turned on.
        </p>

        <span style={styles.subheading}>DATA TRANSFER OUTSIDE OF THE EU/EEA</span>
        <p style={styles.paragraph}>
          The personal information that we collect from you might be exchanged to, and stored outside the European Union ("EU") and the European Economic Area ("EEA"). It might be processed by staff operating outside the EU/EEA who works for us or for one of our providers, in which case the other nation’s information as protected laws will have been approved as satisfactory by the European Commission or other relevant safeguards are set up.
        </p>

        <p style={styles.paragraph}>
          Some of our third-party service provider companies explicitly state that they exchange personal information outside of the EU/EEA.
        </p>

        <ul style={styles.list}>
          <li>
            Google Analytics – (EU-US Privacy Shield)
          </li>
          <li >
            Amazon Web Services, Inc. – (EU-US Privacy Shield)
          </li>
          <li >
            Fastly Inc. – (EU-US Privacy Shield)
          </li>
        </ul>

        <p style={styles.paragraph}>
          These are examples of some service providers and with their legal basis for each exchange.
        </p>

        <span style={styles.subheading}>Updates</span>
        <p style={styles.paragraph}>
          This Privacy Policy may be updated periodically to reproduce changes in law, finest practice, or a modification in our practices concerning the action of private information. The date of the most current amendment will seem at the top of this page. If you do not agree to the vicissitudes, please do not continue to use our services and please refrain from sharing your private information with us. You should check this notice regularly for updates.
        </p>

        <span style={styles.subheading}>How to contact us:</span>
        <p style={styles.paragraph}>
          If you have any queries regarding this Privacy Policy, you can contact our officer in any of the following ways:
        </p>

        <p style={styles.paragraph}>
          Registered Office: S.no 124/1, Mangalmurti H. S.,Near Yashoda Hotel, Bhosari, Pune, Maharashtra - 411039
        </p>

        <p style={styles.paragraph}>
          Telephone: +1-214-272-0393
        </p>

        <p style={styles.paragraph}>
          Email: info@technobridge.in
        </p>

        <span style={styles.subheading}>ADDITIONAL INFORMATION</span>
        <p style={styles.paragraph}>
          In this Additional Information section, we explain some of the terminology used in this Privacy Policy.
        </p>

        <p style={styles.paragraph}>
          "information manager" – the person or industry that controls the purposes and means of processing private data.
        </p>

        <p style={styles.paragraph}>
          "private data" – any information that narrates to you.
        </p>

        <p style={styles.paragraph}>
          "processing" – means doing whatever with data. For example, it comprises disclosing it, collecting it, holding it, and deleting it.
        </p>
  </div>
    </div>
  );
};

export default PrivacyPolicy;
