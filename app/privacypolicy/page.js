import React from 'react'

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-6">
          Effective Date: 1st September 2024<br />
          Last Updated: 1st September 2024
        </p>

        <p className="mb-4">
          WareFlow ("we," "us," or "our") is committed to protecting the privacy and security of the personal information of our users, customers, employees, and partners. This Privacy Policy outlines how we collect, use, disclose, and protect your information. We comply with applicable data protection regulations, including Kenya's Data Protection Act (DPA) among others.
        </p>

        <h2 className="text-2xl font-bold mb-2">1. Definitions</h2>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Personal Data: Any information that can be used to identify an individual, either directly or indirectly.</li>
          <li>Data Subject: An individual whose personal data is collected or processed.</li>
          <li>Data Controller: The entity that determines the purposes and means of processing personal data.</li>
          <li>Data Processor: The entity that processes personal data on behalf of the data controller.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">2. Scope</h2>
        <p className="mb-4">This Privacy Policy applies to:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>All visitors, users, and customers who access or use our website and services.</li>
          <li>Internal data practices within WareFlow for employees, contractors, and partners.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">3. Information We Collect</h2>
        <h3 className="text-xl font-semibold mb-2">A. Information Provided by Users</h3>
        <p className="mb-2">We collect information directly from you when you:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Create an account with WareFlow.</li>
          <li>Apply for WareFlow services, such as factoring or supplier financing.</li>
          <li>Contact our support team or communicate with us.</li>
          <li>Participate in surveys or promotional activities.</li>
        </ul>

        <p className="mb-2">The types of personal data we may collect include:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Contact Information: Name, email address, phone number, and mailing address.</li>
          <li>Financial Information: Bank account details, transaction history, credit information, and payment preferences.</li>
          <li>Identification Details: ID number, date of birth, and nationality.</li>
          <li>Employment Information: Job title, employer name, and work contact details.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">B. Information Collected Automatically</h3>
        <p className="mb-2">When you access or use our website or services, we may collect information automatically, such as:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Device Information: IP address, browser type, operating system, and device type.</li>
          <li>Usage Data: Pages visited, time spent on the website, and interactions with content.</li>
          <li>Cookies and Tracking Technologies: See our Cookie Policy for more information.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">4. How We Use Your Information</h2>
        <p className="mb-2">We use your information to:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Provide Services: To verify your identity, process applications, manage accounts, and deliver services.</li>
          <li>Improve and Develop Our Services: Analyze usage trends to enhance our offerings.</li>
          <li>Communication: Respond to your inquiries, send important updates, and notify you about changes to our services.</li>
          <li>Marketing and Promotions: With your consent, we may send promotional materials.</li>
          <li>Compliance and Legal Obligations: Ensure compliance with legal requirements, including anti-money laundering (AML) and Know Your Customer (KYC) regulations.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">5. Data Security</h2>
        <p className="mb-4">
          We implement robust security measures to protect your personal data, including encryption, secure access controls, and continuous monitoring of our systems for vulnerabilities and breaches.
        </p>

        <h2 className="text-2xl font-bold mb-2">6. Your Data Protection Rights</h2>
        <p className="mb-2">Depending on your jurisdiction, you may have the following rights:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Access: Request access to your personal data.</li>
          <li>Correction: Correct inaccurate or incomplete data.</li>
          <li>Deletion: Request deletion of your data, subject to legal requirements.</li>
          <li>Objection: Object to processing of your data for certain purposes.</li>
          <li>Restriction: Request restriction of processing.</li>
          <li>Portability: Request transfer of data to another service provider.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at:
        </p>
        <ul className="list-none mb-4 ml-4">
          <li>Email: info@wareflowafrica.com</li>
          <li>Address: Woodlands Business Park, Suite 6, Kiambere Road</li>
          <li>Phone: +254 721 233770</li>
        </ul>

        <p className="mt-8 text-sm text-gray-600">
          By using our services, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </div>
    </div>
  )
}

export default page