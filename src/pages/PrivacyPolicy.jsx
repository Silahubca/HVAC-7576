import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | ZA Tax and Accounting</title>
        <meta name="description" content="ZA Tax and Accounting privacy policy. Learn how we collect, use, and protect your personal and financial information." />
        <link rel="canonical" href="https://zataxandaccounting.com/privacy-policy" />
      </Helmet>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2024</p>
              
              <p>ZA Tax and Accounting ("we," "our," or "us") respects your privacy and is committed to protecting your personal and financial information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

              <h2>Information We Collect</h2>
              <p>We may collect personal and financial information that you provide directly to us, such as:</p>
              <ul>
                <li>Name, email address, phone number, and address</li>
                <li>Social Security numbers and tax identification numbers</li>
                <li>Financial information including income, expenses, and tax documents</li>
                <li>Banking information for direct deposit and payment processing</li>
                <li>Employment and business information</li>
                <li>Communication preferences</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Prepare and file your tax returns</li>
                <li>Provide accounting and bookkeeping services</li>
                <li>Process payments and manage billing</li>
                <li>Communicate with you about your account and services</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our services and client experience</li>
              </ul>

              <h2>Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul>
                <li>With the IRS and state tax authorities as required for tax preparation and filing</li>
                <li>With service providers who help us operate our business (under strict confidentiality agreements)</li>
                <li>When required by law, court order, or government investigation</li>
                <li>To protect our rights, property, or safety, or that of our clients</li>
                <li>With your explicit written consent</li>
              </ul>

              <h2>Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal and financial information:</p>
              <ul>
                <li>Encryption of sensitive data during transmission and storage</li>
                <li>Secure, password-protected systems</li>
                <li>Limited access to information on a need-to-know basis</li>
                <li>Regular security assessments and updates</li>
                <li>Secure document storage and disposal procedures</li>
              </ul>

              <h2>Document Retention</h2>
              <p>We retain your tax records and supporting documents in accordance with IRS requirements:</p>
              <ul>
                <li>Tax returns and related documents: minimum 7 years</li>
                <li>Bookkeeping records: as required by law and business needs</li>
                <li>Communication records: as necessary for ongoing service</li>
              </ul>

              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access and review your personal information in our files</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request copies of your tax returns and supporting documents</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for certain uses of your information</li>
              </ul>

              <h2>Website Cookies and Tracking</h2>
              <p>Our website may use cookies and similar technologies to:</p>
              <ul>
                <li>Improve website functionality and user experience</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Remember your preferences and settings</li>
              </ul>
              <p>You can control cookie settings through your browser preferences.</p>

              <h2>Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>

              <h2>Children's Privacy</h2>
              <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.</p>

              <h2>Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
              <ul>
                <li>Email: privacy@zataxandaccounting.com</li>
                <li>Phone: (555) TAX-HELP</li>
                <li>Address: 123 Business Drive, Your City, ST 12345</li>
              </ul>

              <h2>Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.</p>

              <h2>Regulatory Compliance</h2>
              <p>Our privacy practices comply with applicable federal and state laws, including:</p>
              <ul>
                <li>IRS Publication 1075 (Tax Information Security Guidelines)</li>
                <li>Gramm-Leach-Bliley Act privacy requirements</li>
                <li>State privacy and data protection laws</li>
                <li>Professional accounting ethics and confidentiality standards</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;