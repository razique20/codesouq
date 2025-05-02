import React from 'react';

const CookiePolicy = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-20 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-10">Cookie Policy</h1>

        <div className="space-y-8 text-gray-700">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              This Cookie Policy explains how CodeSouq ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
          </div>

          {/* What are Cookies */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">2. What are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your device when you visit a website. Cookies are widely used to make websites work more efficiently, as well as to provide reporting information and assist with marketing activities.
            </p>
          </div>

          {/* Why We Use Cookies */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">3. Why We Use Cookies</h2>
            <p>
              We use cookies for several reasons, such as to:
              <ul className="list-disc list-inside mt-2 ml-4">
                <li>Recognize your device and settings for a smoother user experience</li>
                <li>Track website usage and performance</li>
                <li>Enhance functionality and personalize content</li>
                <li>Analyze trends and improve our services</li>
              </ul>
            </p>
          </div>

          {/* Types of Cookies We Use */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">4. Types of Cookies We Use</h2>
            <p>
              <strong>Essential Cookies:</strong> Necessary for the operation of our website.<br />
              <strong>Performance Cookies:</strong> Help us measure and improve website performance.<br />
              <strong>Functionality Cookies:</strong> Remember your preferences for a customized experience.<br />
              <strong>Analytics and Tracking Cookies:</strong> Collect information to help us understand user interaction.
            </p>
          </div>

          {/* Managing Cookies */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">5. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. You can choose to block or delete cookies, but this may impact your experience on our website.
            </p>
          </div>

          {/* Changes to Cookie Policy */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes to our cookies or for operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or other technologies, please contact us at <span className="text-blue-600 underline">support@codesouq.ae</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
