"use client";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black px-6 py-20 flex items-center justify-center relative">
      {/* Decorative background blobs */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-700/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-700/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl w-full bg-gray-900/70 backdrop-blur-lg border border-indigo-900/50 rounded-2xl p-6 md:p-10 shadow-2xl shadow-indigo-950/50 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <div className="space-y-10 text-gray-300 text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-cyan-200 mb-3">1. Introduction</h2>
            <p>
              Welcome to Algorithinn. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-cyan-200 mb-3">2. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you register on the website, place an order, subscribe to our newsletter, or interact with us. This may include your name, email address, phone number, company name, and project details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-cyan-200 mb-3">3. How We Use Your Information</h2>
            <p>
              We use your information to provide, maintain, and improve our services. This includes communicating with you, processing your inquiries, sending updates, marketing communications, and improving our website functionality and customer service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-cyan-200 mb-3">4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information to others. We may share information with trusted partners who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-cyan-200 mb-3">5. Cookies and Tracking Technologies</h2>
            <p>
              Our site may use cookies and similar tracking technologies to enhance your experience. Cookies are small data files stored on your device. You can control cookie settings through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-cyan-200 mb-3">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-cyan-200 mb-3">7. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at{" "}
              <span className="text-emerald-400 underline">support@Algorithinn.ae</span>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-cyan-200 mb-3">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We encourage you to review this policy periodically for any changes. Changes are effective when they are posted on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-cyan-200 mb-3">9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
              <span className="text-emerald-400 underline">support@Algorithinn.ae</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
