import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | ZA Tax and Accounting</title>
        <meta name="description" content="ZA Tax and Accounting terms of service. Review our terms and conditions for using our website and tax preparation services." />
        <link rel="canonical" href="https://zataxandaccounting.com/terms-of-service" />
      </Helmet>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-sm text-gray-500 mb-8">Last updated: January 1, 2024</p>
              
              <p>Welcome to ZA Tax and Accounting. These Terms of Service ("Terms") govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms.</p>

              <h2>Services</h2>
              <p>ZA Tax and Accounting provides professional tax and accounting services including:</p>
              <ul>
                <li>Individual and business tax preparation and filing</li>
                <li>Tax planning and consultation</li>
                <li>Bookkeeping and accounting services</li>
                <li>Payroll processing</li>
                <li>Financial consulting and advisory services</li>
                <li>IRS representation and tax resolution</li>
              </ul>

              <h2>Client Responsibilities</h2>
              <p>As our client, you agree to:</p>
              <ul>
                <li>Provide complete, accurate, and timely information</li>
                <li>Maintain organized records and supporting documentation</li>
                <li>Respond promptly to requests for information</li>
                <li>Review all documents before signing</li>
                <li>Make timely payments for services rendered</li>
                <li>Notify us of any changes in your financial situation</li>
              </ul>

              <h2>Professional Standards</h2>
              <p>Our services are provided in accordance with:</p>
              <ul>
                <li>Generally Accepted Accounting Principles (GAAP)</li>
                <li>IRS regulations and tax law</li>
                <li>Professional ethics and standards</li>
                <li>State licensing requirements</li>
              </ul>

              <h2>Appointment and Scheduling</h2>
              <ul>
                <li>Appointments must be scheduled in advance</li>
                <li>We require 24-hour notice for cancellations</li>
                <li>Late cancellations may be subject to fees</li>
                <li>Peak tax season may have limited availability</li>
                <li>Emergency consultations available by arrangement</li>
              </ul>

              <h2>Payment Terms</h2>
              <ul>
                <li>Payment is due upon completion of services unless other arrangements are made</li>
                <li>We accept cash, check, and major credit cards</li>
                <li>Payment plans may be available for qualifying services</li>
                <li>Past due accounts may be subject to interest charges</li>
                <li>Collection costs may be charged for delinquent accounts</li>
              </ul>

              <h2>Accuracy and Liability</h2>
              <p>While we strive for accuracy in all our work:</p>
              <ul>
                <li>Our liability is limited to the fees paid for services</li>
                <li>We are not responsible for penalties resulting from incomplete or inaccurate information provided by clients</li>
                <li>Clients are ultimately responsible for the accuracy of their tax returns</li>
                <li>We carry professional liability insurance</li>
              </ul>

              <h2>Confidentiality</h2>
              <ul>
                <li>All client information is kept strictly confidential</li>
                <li>Information is shared only as required by law or with client consent</li>
                <li>We maintain secure systems and procedures</li>
                <li>Staff is bound by confidentiality agreements</li>
              </ul>

              <h2>Document Retention</h2>
              <ul>
                <li>We retain client records as required by law and professional standards</li>
                <li>Clients may request copies of their documents at any time</li>
                <li>Original documents will be returned to clients when requested</li>
                <li>Electronic storage systems are secure and backed up</li>
              </ul>

              <h2>Professional Relationship</h2>
              <p>Our engagement with you creates a professional relationship that:</p>
              <ul>
                <li>Is limited to the specific services requested</li>
                <li>May be terminated by either party with written notice</li>
                <li>Does not create a fiduciary relationship beyond professional duties</li>
                <li>Is governed by professional standards and ethics</li>
              </ul>

              <h2>Limitation of Services</h2>
              <p>Unless specifically agreed upon, our services do not include:</p>
              <ul>
                <li>Legal advice (we may refer you to qualified attorneys)</li>
                <li>Investment advice or securities transactions</li>
                <li>Audit or compilation services (unless specifically contracted)</li>
                <li>Ongoing monitoring of your financial affairs</li>
              </ul>

              <h2>Technology and Security</h2>
              <ul>
                <li>We use secure systems for data transmission and storage</li>
                <li>Client portals require secure login credentials</li>
                <li>Email communication may not be fully secure</li>
                <li>Clients are responsible for maintaining password security</li>
              </ul>

              <h2>Dispute Resolution</h2>
              <p>In the event of a dispute:</p>
              <ul>
                <li>We encourage direct communication to resolve issues</li>
                <li>Mediation may be used before legal action</li>
                <li>Any legal disputes will be governed by state law</li>
                <li>Venue for legal proceedings will be in our local jurisdiction</li>
              </ul>

              <h2>Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Material changes will be communicated to existing clients. Continued use of our services constitutes acceptance of updated terms.</p>

              <h2>Contact Information</h2>
              <p>For questions about these Terms or our services, please contact us:</p>
              <ul>
                <li>Phone: (555) TAX-HELP</li>
                <li>Email: info@zataxandaccounting.com</li>
                <li>Address: 123 Business Drive, Your City, ST 12345</li>
              </ul>

              <h2>Professional Licensing</h2>
              <p>ZA Tax and Accounting is licensed to practice in [State] and maintains all required professional certifications and continuing education requirements.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;