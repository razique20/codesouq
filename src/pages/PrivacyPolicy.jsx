import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-10">Privacy Policy</h1>

        <div className="space-y-8 text-gray-700">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              Welcome to CodeSouq. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you register on the website, place an order, subscribe to our newsletter, or interact with us. This may include your name, email address, phone number, company name, and project details.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>
              We use your information to provide, maintain, and improve our services. This includes communicating with you, processing your inquiries, sending updates, marketing communications, and improving our website functionality and customer service.
            </p>
          </div>

          {/* Sharing Your Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to others. We may share information with trusted partners who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
            </p>
          </div>

          {/* Cookies and Tracking */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
            <p>
              Our site may use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device. You can control cookie settings through your browser settings.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at <span className="text-blue-600 underline">support@codesouq.ae</span>.
            </p>
          </div>

          {/* Changes to This Privacy Policy */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We encourage you to review this policy periodically for any changes. Changes are effective when they are posted on this page.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at <span className="text-blue-600 underline">support@codesouq.ae</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
