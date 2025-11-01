export default function PrivacyPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="heading-1 mb-4">Privacy Policy</h1>
          <p className="text-neutral-600 mb-8">
            Last Updated: October 31, {currentYear}
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Introduction</h2>
            <p className="text-neutral-700 mb-4">
              Tokistar Lighting Incorporated ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Personal Information</h3>
            <p className="text-neutral-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Contact us through our website or email</li>
              <li>Request product information or technical specifications</li>
              <li>Sign up for newsletters or promotional materials</li>
              <li>Submit inquiries through contact forms</li>
            </ul>
            <p className="text-neutral-700 mb-4">
              This information may include your name, email address, phone number, company name, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Automatic Information</h3>
            <p className="text-neutral-700 mb-4">
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-neutral-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you product information, specifications, and catalogs</li>
              <li>Improve our website and user experience</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-neutral-700 mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li><strong>Authorized Sales Agents:</strong> To facilitate product inquiries and sales in your region</li>
              <li><strong>Service Providers:</strong> Third parties who assist in operating our website or conducting our business</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-neutral-700 mb-4">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Data Security</h2>
            <p className="text-neutral-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Your Rights</h2>
            <p className="text-neutral-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your personal information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Third-Party Links</h2>
            <p className="text-neutral-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Children's Privacy</h2>
            <p className="text-neutral-700 mb-4">
              Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-neutral-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated "Last Updated" date.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-neutral-700 mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-neutral-100 rounded-lg p-6 mb-4">
              <p className="text-neutral-700 mb-2">
                <strong>Tokistar Lighting Incorporated</strong>
              </p>
              <p className="text-neutral-700 mb-2">
                Anaheim, CA
              </p>
              <p className="text-neutral-700 mb-2">
                Phone: <a href="tel:7147727005" className="text-primary-600 hover:text-primary-700">(714) 772-7005</a>
              </p>
              <p className="text-neutral-700">
                Email: <a href="mailto:info@tokistar.com" className="text-primary-600 hover:text-primary-700">info@tokistar.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
