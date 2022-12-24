import React, { Fragment } from 'react'
import Header from '../../pages/Header'

export const AboutPageHeader = function ({ header, paragraph }) {
    return (
      <div className='mx-auto w-full flex flex-col items-center justify-center px-4 md:px-0'>
        <h4 className='text-3xl md:text-5xl mb-2 font-body font-bold text-white text-center lg:px-80 '>
          {header}
        </h4>
        <p className='text-base font-body text-center text-white font-normal px-4  md:px-0 lg:px-80 mt-3'>
          {paragraph}
        </p>
      </div>
    );
  };

const LegalPolicy = () => {
    
  return (
    <Fragment>
        <Header>

        </Header>
        <div className="w-full lg:px-32 lg:py-[82px] md:px-20 md:py-10 px-7 py-6 flex flex-col justify-between items-center bg-[#080A0C] bg-[url('/src/assets/sectionBackground.webp')] bg-cover bg-center text-white">
            <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-3xl lg:py-20 py-16 font-bold'>
                Legal
            </h1>
            <main className=' w-full md:px-0 md:w-3/4 mx-auto'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='lg:text-4xl md:text-3xl text-2xl mb-6'>Mooncod Global Policy</p>
                    <p className='leading-8'>We at Mooncod (defined below) respect and protect the privacy of visitors to our websites and our customers. <br/> This Privacy Policy describes our information handling practices when you access our services, which include our content on the websites located at <span><a href="https://mooncod.io" target='_blank' rel='noreferrer'>mooncod.io</a></span>, or any other websites, pages, features, or content we own or operate (collectively, the "Site(s)") or when you use the Mooncod mobile app, the Mooncod Card App (as defined below), any Mooncod, Mooncod Exchange, Mooncod Prime, or Mooncod Custody API or third party applications relying on such an API, and related services (referred to collectively hereinafter as "Services").

                    Please take a moment to read this Privacy Policy carefully. If you have any questions about this Policy, please submit your request via our Support Portal at https://support.mooncod.io.

                    We may modify this Privacy Policy from time to time which will be indicated by changing the date at the top of this page. If we make any material changes, we will notify you by email (sent to the email address specified in your account), by means of a notice on our Services prior to the change becoming effective, or as otherwise required by law.</p>
                    <div className='w-full mt-10'>
                        <ol className=' list-decimal md:text-2xl text-xl md:px-4 px-2'>
                            <li className=''>
                                <p className='font-bold py-5 text-xl md:text-2xl '>ACCEPTANCE OF THIS PRIVACY POLICY</p>
                                <p className='text-base leading-8'>By accessing and using our Services, you signify acceptance to the terms of this Privacy Policy. Where we require your consent to process your personal information, we will ask for your consent to the collection, use, and disclosure of your personal information as described further below. We may provide additional "just-in-time" disclosures or information about the data processing practices of specific Services. These notices may supplement or clarify our privacy practices or may provide you with additional choices about how we process your data.
                                If you do not agree with or you are not comfortable with any aspect of this Privacy Policy, you should immediately discontinue access or use of our Services.</p>
                            </li>
                            <li>
                                <p className='font-bold md:text-2xl text-xl py-5'>Our Relationship With You</p>
                                <table id='table'>
                                    <tr>
                                        <th>Where You Reside</th>
                                        <th>Services Provided</th>
                                        <th>Your Operating Entity</th>
                                        <th>Contact Address</th>
                                    </tr>
                                    <tr>
                                        <td>Anywhere but the United States and Japan</td>
                                        <td>Custodial services</td>
                                        <td>Mooncod Custody International Limited (unless otherwise indicated in your service contract) Company No: 657718</td>
                                        <td>70 Sir John Rogerson's Quay Dublin 2, Ireland</td>
                                    </tr>
                                    <tr>
                                        <td>EU and the United Kingdom</td>
                                        <td>Digital Currency services</td>
                                        <td>Mooncod Europe, Limited. Company No: 675475</td>
                                        <td>70 Sir John Rogerson's Quay Dublin 2, Ireland</td>
                                    </tr>
                                    <tr>
                                        <td>Germany</td>
                                        <td>Digital Currency services</td>
                                        <td>Mooncod Germany GmbH. Company No: HRB 213709 B. BaFin-ID 10158674</td>
                                        <td>Kurfürstendamm 22, 10719 Berlin, Germany</td>
                                    </tr>
                                    <tr>
                                        <td>European Economic Area</td>
                                        <td>Fiat Wallet services</td>
                                        <td>Mooncod Ireland, Limited. Company No: 630350 CBI Register No: C188493</td>
                                        <td>70 Sir John Rogerson's Quay Dublin 2, Ireland</td>
                                    </tr>
                                    <tr>
                                        <td>Singapore</td>
                                        <td>Digital Currency services, Fiat Wallet services</td>
                                        <td>Mooncod Singapore Pte. Ltd. Unique Entity No.: 201935002N</td>
                                        <td>One Marina Boulevard, #28-00, Singapore 018989</td>
                                    </tr>
                                    <tr>
                                        <td>Japan</td>
                                        <td>Digital Currency services, Fiat Wallet services, Custodial services</td>
                                        <td>Mooncod KK. Company No: 0100-01-173138 FSA Register No: Kanto Finance Bureau Directory-General No. 00028</td>
                                        <td>Otemachi Building 4F FINOLAB, 1-6-1 Otemachi, Chiyoda-ku, Tokyo</td>
                                    </tr>
                                    <tr>
                                        <td>Anywhere but the EU, US, UK, Singapore and Japan</td>
                                        <td>Digital Currency Services</td>
                                        <td>Mooncod Ascending Markets Kenya Limited (“CB Kenya”)</td>
                                        <td>P.O. Box 10643, G.P.O. Nairobi, Kenya</td>
                                    </tr>
                                    <tr>
                                        <td>United Kingdom (and select non-EEA countries in Europe)</td>
                                        <td>Fiat Wallet services</td>
                                        <td>CB Payments. Ltd Company No: 09708629 FCA Register No: 900635</td>
                                        <td>5 Fleet Place, London, EC4M 7RD, United Kingdom</td>
                                    </tr>
                                    <tr>
                                        <td>United States</td>
                                        <td>Digital Currency services, Fiat Wallet services</td>
                                        <td>Mooncod, Inc. CA Entity No.: C3548456</td>
                                        <td>Mooncod, Inc. c/o C T Corporation System 818 West Seventh St., Ste. 930 Los Angeles, California 90017</td>
                                    </tr>
                                    <tr>
                                        <td>United States</td>
                                        <td>Custodial services</td>
                                        <td>Mooncod Custody Trust Company, LLC (unless otherwise indicated in your service contract) NYS License # 122506</td>
                                        <td>Mooncod Custody Trust Company, LLC c/o C T Corporation System 28 Liberty Street New York, New York 10005</td>
                                    </tr>
                                    <tr>
                                        <td>United States</td>
                                        <td>Credit and Lending services, Margin Trading services</td>
                                        <td>Mooncod Credit, Inc. CA Entity No.: C4315976</td>
                                        <td>Mooncod Credit, Inc. c/o C T Corporation System 818 West Seventh St., Ste. 930 Los Angeles, California 90017</td>
                                    </tr>

                                </table>
                                <p className='text-base my-5 leading-8'>The CB operating entity you contract with determines the means and purposes of processing your personal information in relation to the Services provided to you (typically referred to as a “data controller”).
                                You may be asked to provide personal information anytime you are in contact with any CB companies. The CB companies may share your personal information with each other and use it consistent with this Privacy Policy. They may also combine it with other information to provide and improve our products, services, and content (additional details below). For example, even if you do not reside in the United States (the “US”), your information may be shared with Mooncod, Inc. which provides global support for all Services including technical infrastructure, product development, security, compliance, fraud prevention, and customer support.
                                If you have any questions about your CB Account, your personal information, or this Privacy Policy, please submit your request via our Support Portal.</p>
                            </li>
                            <li>
                                <p className='font-bold md:text-2xl text-xl py-5'>THE PERSONAL INFORMATION WE COLLECT</p>
                                <p className='text-base my-4 leading-8'>Personal information is typically data that identifies an individual or relates to an identifiable individual. This includes information you provide to us, information which is collected about you automatically, and information we obtain from third parties. The definition of personal information depends on the applicable law based on your physical location. Only the definition that applies to your physical location will apply to you under this Privacy Policy.
                                Information you provide to us. To establish an account and access our Services, we'll ask you to provide us with some important information about yourself. This information is either required by law (e.g. to verify your identity), necessary to provide the requested services (e.g. you will need to provide your bank account number if you'd like to link that account to CB), or is relevant for certain specified purposes, described in greater detail below. As we add new features and Services, you may be asked to provide additional information.
                                If you choose not to share certain information with us, we may not be able to serve you as effectively or offer you our Services. Any information you provide to us that is not required is voluntary.
                                <br /> <br />
                                We may collect the following types of information from you:</p>
                                <div>
                                    <ul className='list-disc text-base leading-8'>
                                        <li>Personal Identification Information: Full name, date of birth, nationality, gender, signature, utility bills, photographs, phone number, home address, and/or email.</li>
                                        <li>Formal Identification Information: Government issued identity document such as Passport, Driver's License, National Identity Card, State ID Card, Tax ID number, passport number, driver's license details, national identity card details, visa information, and/or any other information deemed necessary to comply with our legal obligations under financial or anti-money laundering laws.</li>
                                        <li>Institutional Information: Employer Identification number (or comparable number issued by a government), proof of legal formation (e.g. Articles of Incorporation), personal identification information for all material beneficial owners.</li>
                                        <li>Financial Information: Bank account information, payment card primary account number (PAN), transaction history, trading data, and/or tax identification.</li>
                                        <li>Transaction Information: Information about the transactions you make on our Services, such as the name of the recipient, your name, the amount, and/or timestamp.</li>
                                        <li>Employment Information: Office location, job title, and/or description of role.</li>
                                        <li>
                                        Correspondence: Survey responses, information provided to our support team or user research team.</li>
                                        <li>Audio, electronic, visual and similar information, such as call and video recordings.</li>
                                    </ul>
                                    <p className='text-base my-3 leading-8'><strong>Information we collect from you automatically. </strong>To the extent permitted under the applicable law, we may collect certain types of information automatically, such as whenever you interact with the Sites or use the Services. This information helps us address customer support issues, improve the performance of our Sites and Services, provide you with a streamlined and personalized experience, and protect your account from fraud by detecting unauthorized access. Information collected automatically includes:</p>
                                    <ul className='list-disc text-base leading-8'>
                                        <li>Online Identifiers: Geo location/tracking details, browser fingerprint, operating system, browser name and version, and/or personal IP addresses.
                                        </li>
                                        <li>
                                        Usage Data: Authentication data, security questions, click-stream data, public social networking posts, and other data collected via cookies and similar technologies. Please read our Cookie Policy for more information.</li>
                                        <p className='my-3'>For example, we may automatically receive and record the following information on our server logs:</p>
                                        <li>How you came to and use the Services;</li>
                                        <li>Device type and unique device identification numbers;</li>
                                        <li>Device event information (such as crashes, system activity and hardware settings, browser type, browser language, the date and time of your request and referral URL);</li>
                                        <li>
                                            How your device interacts with our Sites and Services, including pages accessed and links clicked;
                                        </li>
                                        <li>
                                            Broad geographic location (e.g. country or city-level location); and
                                        </li>
                                        <li>Other technical data collected through cookies, pixel tags and other similar technologies that uniquely identify your browser.</li>
                                        <p className='my-3'>
                                            We may also use identifiers to recognize you when you access our Sites via an external link, such as a link appearing on a third party site.
                                        </p>
                                        <p><span className='font-bold my-4 leading-8'>Information we collect from our affiliates and third parties. </span>From time to time, we may obtain information about you from our affiliates or third party sources as required or permitted by applicable law. These sources may include:
                                        </p>

                                        <li>
                                        Our Mooncod Family of Companies: Our “family of companies” is the group of companies related to us by common control or ownership (“Affiliates”). In accordance with applicable law, we may obtain information about you from our Affiliates as a normal part of conducting business, if you link your various Mooncod accounts (e.g., Mooncod Wallet account or Mooncod Commerce account in order to convert cryptocurrency into fiat and make withdrawals into your bank account), so that we may offer our Affiliates’ Services to you.
                                        </li>
                                        <li>
                                        Public Databases, Credit Bureaus & ID Verification Partners: We obtain information about you from public databases and ID verification partners for purposes of verifying your identity in accordance with applicable law. ID verification partners like World-Check use a combination of government records and publicly available information about you to verify your identity. Such information may include your name, address, job role, public employment profile, credit history, status on any sanctions lists maintained by public authorities, and other relevant data. We obtain such information to comply with our legal obligations, such as anti-money laundering laws. In some cases, we may process additional data about you to assess risk and ensure our Services are not used fraudulently or for other illicit activities. In such instances, processing is necessary for us to continue to perform our contractual obligations with you and others. World-Check's Privacy Policy, available at <a href="https://www.refinitiv.com/en/products/world-check-kyc-screening/privacy-statement/" rel='noreferrer' target='_blank' className="text-blue-300">https://www.refinitiv.com/en/products/world-check-kyc-screening/privacy-statement/</a>, describes its collection and use of personal data.
                                        </li>
                                        <li>
                                        Blockchain Data: We may analyze public blockchain data to ensure parties utilizing our Services are not engaged in illegal or prohibited activity under our Terms, and to analyze transaction trends for research and development purposes.
                                        </li>
                                        <li>
                                        Joint Marketing Partners & Resellers: For example, unless prohibited by applicable law, joint marketing partners or resellers may share information about you with us so that we can better understand which of our Services may be of interest to you.
                                        </li>
                                        <li>
                                        Advertising Networks & Analytics Providers: We work with these providers to provide us with de-identified information about how you found our Sites and how you interact with the Sites and Services. This information may be collected prior to account creation. For more information on how you can manage collection of this data, please see our Cookie Policy.
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <p className='font-bold md:text-2xl text-xl py-5'>ANONYMIZED AND AGGREGATED DATA</p>
                                <p className='text-base'>
                                    Anonymization is a data processing technique that modifies personal information so that it cannot be associated with a specific individual. Except for this section, none of the other provisions of this Privacy Policy applies to anonymized or aggregated customer data (i.e. information about our customers that we combine together so that it no longer identifies or references an individual customer).
                                    Mooncod may use anonymized or aggregate customer data for any business purpose, including to better understand customer needs and behaviors, improve our Services, conduct business intelligence and marketing, and detect security threats. We may perform our own analytics on anonymized data or enable analytics provided by third parties.
                                    Types of data we may anonymize include, transaction data, click-stream data, performance metrics, and fraud indicators.</p>
                            </li>
                            <li>
                                <p className='font-bold md:text-2xl text-xl py-6'>HOW YOUR PERSONAL INFORMATION IS USED</p>
                                <p className='text-base leading-8'>Our primary purpose in collecting personal information is to provide you with a secure, smooth, efficient, and customized experience. We generally use personal information to create, develop, operate, deliver, and improve our Services, content and advertising; and for loss prevention and anti-fraud purposes. We may use this information in the following ways: <br/> <br/>
                                1) To maintain legal and regulatory compliance <br/> <br/>
                                Most of our core Services are subject to laws and regulations requiring us to collect, use, and store your personal information in certain ways. For example, CB must identify and verify customers using our Services in order to comply with anti-money laundering laws across jurisdictions. This includes collection and storage of your photo identification. In addition, we use third parties to verify your identity by comparing the personal information you provide against third-party databases and public records. When you seek to link a bank account to your CB Account, we may require you to provide additional information which we may use in collaboration with service providers acting on our behalf to verify your identity or address, and/or to manage risk as required under applicable law. If you do not provide personal information required by law, we will have to close your account. <br/> <br/>
                                2) To enforce our terms in our user agreement and other agreements <br/> <br/>
                                CB handles sensitive information, such as your identification and financial data, so it is very important for us and our customers that we actively monitor, investigate, prevent, and mitigate any potentially prohibited or illegal activities, enforce our agreements with third parties, and/or prevent and detect violations of our posted user agreement or agreements for other Services. In addition, we may need to collect fees based on your use of our Services. We collect information about your account usage and closely monitor your interactions with our Services. We may use any of your personal information collected for these purposes. The consequences of not processing your personal information for such purposes is the termination of your account. <br/> <br/>
                                3) To detect and prevent fraud and/or funds loss <br/> <br/>
                                We process your personal information in order to help detect, prevent, and mitigate fraud and abuse of our services and to protect you against account compromise or funds loss. <br/> <br/>
                                4) To provide Mooncod's Services <br/> <br/>
                                We process your personal information to provide the Services to you. For example, when you want to store funds on our platform, we require certain information such as your identification, contact information, and payment information. We cannot provide you with Services without such information. Third parties such as identity verification services may also access and/or collect your personal information when providing identity verification and/or fraud prevention services. 
                                <br/> 
                                <br/>

                                5) To provide Service communications
                                 <br/> <br/>
                                We send administrative or account-related information to you to keep you updated about our Services, inform you of relevant security issues or updates, or provide other transaction-related information. Without such communications, you may not be aware of important developments relating to your account that may affect how you can use our Services. You may not opt-out of receiving critical service communications, such as emails or mobile notifications sent for legal or security purposes. <br/> <br/>
                                6) To provide customer service <br/> <br/>
                                We process your personal information when you contact us to resolve any questions, disputes, collect fees, or to troubleshoot problems. Without processing your personal information for such purposes, we cannot respond to your requests and ensure your uninterrupted use of the Services. <br/> <br/>
                                7) To ensure quality control <br/> <br/>
                                We process your personal information for quality control and staff training to make sure we continue to provide you with accurate information. If we do not process personal information for quality control purposes, you may experience issues on the Services such as inaccurate transaction records or other interruptions. <br/> <br/>
                                8) To ensure network and information security <br/> <br/>
                                We process your personal information in order to enhance security, monitor and verify identity or service access, combat spam or other malware or security risks and to comply with applicable security laws and regulations. The threat landscape on the internet is constantly evolving, which makes it more important than ever that we have accurate and up-to-date information about your use of our Services. Without processing your personal information, we may not be able to ensure the security of our Services. <br/> <br/>
                                9) For research and development purposes <br/> <br/>
                                We process your personal information to better understand the way you use and interact with Mooncod's Services. In addition, we use such information to customize, measure, and improve Mooncod's Services and the content and layout of our website and applications, and to develop new services. Without such processing, we cannot ensure your continued enjoyment of our Services. <br/> <br/>
                                10) To enhance your experience <br/> <br/>
                                We process your personal information to provide a personalized experience, and implement the preferences you request. For example, you may choose to provide us with access to certain personal information stored by third parties. Without such processing, we may not be able to ensure your continued enjoyment of part or all of our Services. <br/> <br/>
                                11) To facilitate corporate acquisitions, mergers, or transactions <br/> <br/>
                                We may process any information regarding your account and use of our Services as is necessary in the context of corporate acquisitions, mergers, or other corporate transactions. <br/> <br/>
                                12) To engage in marketing activities <br/> <br/>
                                Based on your communication preferences, we may send you marketing communications (e.g. emails or mobile notifications) to inform you about our events or our partner events; to deliver targeted marketing; and to provide you with promotional offers. Our marketing will be conducted in accordance with your advertising marketing preferences and as permitted by applicable law. <br/> <br/>
                                13) To protect the health and safety of our employees and visitors, our facilities and our property and other rights. If you visit one of our locations, to maintain security at such locations you may be photographed or videotaped. <br/> <br/>
                                14) For any purpose that you provide your consent.  <br/> <br/>
                                We will not use your personal information for purposes other than those purposes we have disclosed to you, without your permission. From time to time, and as required under the applicable law, we may request your permission to allow us to share your personal information with third parties. In such instances, you may opt out of having your personal information shared with third parties, or allowing us to use your personal information for any purpose that is incompatible with the purposes for which we originally collected it or subsequently obtained your authorization. If you choose to limit the use of your personal information, certain features or CB Services may not be available to you.</p>
                            </li>
                            <li>
                                <p className='font-bold md:text-2xl text-xl py-5'>LEGAL BASES FOR PROCESSING YOUR INFORMATION</p>
                                <p className='text-base leading-8'>
                                For individuals who are located in the European Economic Area, the United Kingdom or Switzerland (collectively “EEA Residents'') at the time their personal information is collected, our legal bases for processing your information under the EU General Data Protection Regulation (“GDPR”) will depend on the personal information at issue, the specific context in the which the personal information is collected and the purposes for which it is used. We generally only process your data where we are legally required to, where processing is necessary to perform any contracts we entered with you (or to take steps at your request prior to entering into a contract with you), where processing is in our legitimate interests to operate our business and not overridden by your data protection interests or fundamental rights and freedoms, or where we have obtained your consent to do so. In some rare instances, we may need to process your personal information to protect your vital interests or those of another person. Below is a list of how CB uses your personal information, as described above in Section 5, with the corresponding legal bases for processing. If you have questions about or need further information concerning the legal basis on which we collect and use your personal information, please contact us using the contact details provided under the "How to contact us" heading below.
                                </p>
                                <table className='my-5' id='table2'>
                                    <tr className=' w-auto '>
                                        <th className='w-1/2'>Section & Purpose of Processing</th>
                                        <th className='w-1/2'>Legal Bases for Processing</th>
                                    </tr>
                                    <tr>
                                        <td className='w-1/2'>(2) To enforce our terms in our user agreement and other agreements (4) To provide Mooncod's Services (5) To provide Service communications (6) To provide customer service (7) To ensure quality control</td>
                                        <td className='w-1/2'>Based on our contract with you or to take steps at your request prior to entering into a contract.</td>
                                    </tr>
                                    <tr>
                                        <td className='w-1/2'>(9) For research and development purposes (10) To enhance your experience (11) To facilitate corporate acquisitions, mergers, or transactions (12) To engage in direct marketing activities</td>
                                        <td className='w-1/2'>Based on our legitimate interests. When we process your personal data for our legitimate interests we always ensure that we consider and balance any potential impact on you and your rights under data protection laws.</td>
                                    </tr>
                                    <tr>
                                        <td className='w-1/2'>1) To maintain legal and regulatory compliance (3) To detect and prevent fraud and/or funds loss (8) To ensure network and information security (13) To protect your or our’s vital interests</td>
                                        <td className='w-1/2'>Based on our legal obligations, the public interest, or in your vital interests.</td>
                                    </tr>
                                    <tr>
                                        <td className='w-1/2'>Based on our legal obligations, the public interest, or in your vital interests.</td>
                                        <td className='w-1/2'>Based on your consent.</td>
                                    </tr>
                                </table>
                            </li>
                            <li>
                                <p className='font-bold md:text-2xl text-xl py-5'>WHY WE SHARE PERSONAL INFORMATION WITH OTHER PARTIES</p>
                                <p className='text-base leading-8'>We take care to allow your personal information to be accessed only by those who require access to perform their tasks and duties, and to share only with third parties who have a legitimate purpose for accessing it. CB will never sell or rent your personal information to third parties without your explicit consent. We will only share your information in the following circumstances:</p>
                                <div>
                                    <ul className='list-disc'>
                                        <li>
                                            <p className='text-base leading-8'>With third party identity verification services in order to prevent fraud. This allows CB to confirm your identity by comparing the information you provide us to public records and other third party databases. These service providers may create derivative data based on your personal information that can be used in connection with the provision of identity verification and fraud prevention services. For example:</p>
                                            <ul className='list-disc md:pl-5 pl-2 my-3 leading-8'>
                                                <li className='text-base'>
                                                We may use Jumio Corporation or Jumio UK, Limited (collectively “Jumio”) to verify your identity by determining whether a selfie you take matches the photo in your government issued identity document. The information collected from your photo may include biometric data. Jumio's Privacy Policy, available at <a href="https://www.jumio.com/legal-information/privacy-policy/jumio-inc-privacy-policy-for-online-services/" target='_blank' rel='noreferrer' className='text-blue-200'>https://www.jumio.com/legal-information/privacy-policy/jumio-inc-privacy-policy-for-online-services/</a>, describes its collection and use of personal information.
                                                </li>
                                                <li className='text-base'> 
                                                For Germany users, we may use SolarisBank AG (“Solarisbank”) to verify your identity through verification of identifiable personal information. The information collected from you may include biometric data. Solarisbank’s Privacy Policy, available at <a href="https://www.solarisbank.com/en/privacy-policy/" target='_blank' rel='noreferrer' className='text-blue-200'>https://www.solarisbank.com/en/privacy-policy/</a>, describes its collection and use of personal information. 
                                                </li>
                                                <li className='text-base'>
                                                We may use Sift Science, Inc. (“Sift”) to detect and prevent fraudulent activity on your account in real time. Information shared with Sift is treated by Sift in accordance with its Privacy Policy, available at <a href="https://sift.com/service-privacy" className='text-blue-200' target='_blank' rel='noreferrer'>https://sift.com/service-privacy</a>.
                                                </li>
                                                <li className='text-base'>
                                                If you are based in the US, CB may use Plaid, Inc. ("Plaid") to connect your Mooncod account with your bank account, verify your bank account and confirm your bank account balance prior to approving a transaction. Information shared with Plaid is treated by Plaid in accordance with its Privacy Policy, available at <a href="https://plaid.com/legal/#end-user-privacy-policy" target='_blank' rel='noreferrer' className='text-blue-200'>https://plaid.com/legal/#end-user-privacy-policy</a>.
                                                </li>
                                            </ul>
                                        </li>
                                        <p className='text-base'>With financial institutions with which we partner to process payments you have authorized.</p>
                                        <li>
                                            <p className='text-base'>
                                            With service providers under contract who help with parts of our business operations. Our contracts require these service providers to only use your information in connection with the services they perform for us, and prohibit them from selling your information to anyone else. Examples of the types of service providers we may share personal information with (other than those mentioned above) include:
                                            </p>
                                            <ul className='md:ml-5 ml-3 list-disc text-base my-5'>
                                                <li>Network infrastructure</li>
                                                <li>Cloud storage</li>
                                                <li>Payment processing</li>
                                                <li>Transaction monitoring</li>
                                                <li>Security</li>
                                                <li>Document repository services</li>
                                                <li>Customer support</li>
                                                <li>Internet (e.g. ISPs)</li>
                                                <li>Data analytics</li>
                                                <li>Information Technology</li>
                                                <li>Marketing</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <p className='text-base'>With companies or other entities that we plan to merge with or be acquired by. You will receive prior notice of any change in applicable policies.</p>
                                        </li>
                                        <li>
                                            <p className='text-base'>With companies or other entities that purchase CB assets pursuant to a court-approved sale or where we are required to share your information pursuant to insolvency law in any applicable jurisdiction.</p>
                                        </li>
                                        <li>
                                            <p className='text-base'>With our professional advisors who provide banking, legal, compliance, insurance, accounting, or other consulting services in order to complete third party financial, technical, compliance and legal audits of our operations or otherwise comply with our legal obligations.</p>
                                        </li>
                                        <li>
                                            <p className='text-base'>With law enforcement, officials, or other third parties when we are compelled to do so by a subpoena, court order, or similar legal procedure, or when we believe in good faith that the disclosure of personal information is necessary to prevent physical harm or financial loss, to report suspected illegal activity, or to investigate violations of our User Agreement or any other applicable policies.</p>
                                        </li>

                                        <li>
                                            <p className='text-base'>We share personal information about you with our Affiliates as a normal part of conducting business and offering Services to you.</p>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <p className='font-bold md:text-2xl text-xl py-5'> SPECIAL PROVISIONS RELATING TO Mooncod CARD USERS</p>
                                <p className='text-base'>If you sign up to use the Digital Currency backed debit card Service (the “Mooncod Card”) provided by CB via the dedicated app for that Service (the “Mooncod Card App”), we will process your personal information in accordance with this Policy.
                                In order to provide the Mooncod Card Service to you, we have partnered with Paysafe Financial Services Limited and Paysafe Payment Solution Limited (collectively “Paysafe”). Paysafe is the issuer of the Mooncod Card and is a member of the Visa card scheme, which will be used to enable your Mooncod Card to operate as a normal debit card. When you sign up on the Mooncod Card App you agree to Paysafe's own terms and conditions and Privacy Policy (available at <a href="https://www.paysafe.com/paysafegroup/privacy-policy/" target='_blank' rel='noreferrer' className='text-blue-200'>https://www.paysafe.com/paysafegroup/privacy-policy/</a> ), and as a result Paysafe will be an independent data controller in relation to the personal information they collect and hold relating to you.
                                We may at times need to share some of your personal information that we control with Paysafe to enable us and Paysafe to provide you with the Mooncod Card Service. Where we do this, Paysafe will act as a data processor and only process your personal information to the extent necessary to enable us and Paysafe to provide the Mooncod Card Service to you.</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </main>
        </div>
    </Fragment>
  )
}

export default LegalPolicy