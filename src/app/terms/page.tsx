export default function TermsPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12">
          <h1 className="heading-1 mb-4">Terms of Use</h1>
          <p className="text-neutral-600 mb-8">
            Last Updated: October 31, {currentYear}
          </p>

          <div className="prose prose-neutral max-w-none">
            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-neutral-700 mb-4">
              Welcome to Tokistar Lighting Incorporated. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Use of Website</h2>
            <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Permitted Use</h3>
            <p className="text-neutral-700 mb-4">
              This website is intended for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Browsing product information and specifications</li>
              <li>Downloading technical documentation and catalogs</li>
              <li>Contacting sales representatives and support</li>
              <li>Requesting product quotes and information</li>
              <li>Educational and informational purposes related to lighting solutions</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-800 mt-6 mb-3">Prohibited Activities</h3>
            <p className="text-neutral-700 mb-4">
              You may not:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Use this website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Reproduce, duplicate, or copy materials without written permission</li>
              <li>Use automated systems to scrape or download content</li>
              <li>Misrepresent your affiliation with Tokistar Lighting</li>
              <li>Interfere with the proper functioning of the website</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Intellectual Property Rights</h2>
            <p className="text-neutral-700 mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, product specifications, technical data, software, and compilation of information, is the property of Tokistar Lighting Incorporated and is protected by United States and international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-neutral-700 mb-4">
              The Tokistar name, logo, and all related product names are trademarks of Tokistar Lighting Incorporated. You may not use these marks without our prior written permission.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Product Information and Specifications</h2>
            <p className="text-neutral-700 mb-4">
              While we strive to provide accurate product information and specifications:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Product specifications are subject to change without notice</li>
              <li>Images and renderings may not reflect actual product appearance</li>
              <li>Technical data is provided for reference purposes only</li>
              <li>Installation requirements may vary based on local codes and conditions</li>
              <li>All orders are subject to product availability and confirmation</li>
            </ul>
            <p className="text-neutral-700 mb-4">
              For critical applications, please contact our technical support team to verify current specifications and availability.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Warranties and Professional Installation</h2>
            <p className="text-neutral-700 mb-4">
              Tokistar Lighting products are professional-grade lighting systems intended for installation by qualified electricians and lighting professionals. Installation must comply with all applicable national, state, and local electrical codes.
            </p>
            <p className="text-neutral-700 mb-4">
              Product warranties are provided separately with each product and are subject to proper installation, use, and maintenance. Warranty information is available in product documentation or by contacting our support team.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Downloads and Documentation</h2>
            <p className="text-neutral-700 mb-4">
              We provide technical documentation, IES files, installation guides, and product catalogs for download. These materials are:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Provided for legitimate business and professional use</li>
              <li>Subject to our intellectual property rights</li>
              <li>Not to be redistributed or modified without permission</li>
              <li>Updated periodically and should be verified for current accuracy</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Third-Party Links</h2>
            <p className="text-neutral-700 mb-4">
              This website may contain links to third-party websites or resources, including sales agents and distributors. These links are provided for your convenience only. We do not endorse and are not responsible for the content, accuracy, or practices of third-party websites.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-neutral-700 mb-4">
              To the fullest extent permitted by law, Tokistar Lighting Incorporated shall not be liable for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Indirect, incidental, special, or consequential damages</li>
              <li>Loss of profits, revenue, data, or use</li>
              <li>Errors or omissions in website content</li>
              <li>Interruptions or delays in website availability</li>
              <li>Actions taken based on website information</li>
            </ul>
            <p className="text-neutral-700 mb-4">
              Some jurisdictions do not allow limitations on implied warranties or liability, so the above limitations may not apply to you.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Disclaimer of Warranties</h2>
            <p className="text-neutral-700 mb-4">
              This website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Indemnification</h2>
            <p className="text-neutral-700 mb-4">
              You agree to indemnify and hold harmless Tokistar Lighting Incorporated, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of your use of the website or violation of these terms.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Sales Terms and Conditions</h2>
            <p className="text-neutral-700 mb-4">
              Product sales are subject to separate terms and conditions, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>All orders require written confirmation and acceptance</li>
              <li>Pricing is subject to change without notice</li>
              <li>Orders may be subject to minimum quantities</li>
              <li>Lead times vary by product and quantity</li>
              <li>Custom products may have extended delivery times</li>
              <li>Returns and exchanges are subject to our return policy</li>
            </ul>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Governing Law</h2>
            <p className="text-neutral-700 mb-4">
              These Terms of Use shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these terms shall be brought exclusively in the courts of California.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Changes to Terms</h2>
            <p className="text-neutral-700 mb-4">
              We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website after changes are posted constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Severability</h2>
            <p className="text-neutral-700 mb-4">
              If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>

            <h2 className="text-2xl font-semibold text-neutral-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-neutral-700 mb-4">
              If you have questions about these Terms of Use, please contact us:
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

            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-lg p-6 mt-8">
              <p className="text-neutral-800 font-medium mb-2">
                Professional Use Notice
              </p>
              <p className="text-neutral-700 text-sm">
                Tokistar Lighting products are designed for professional installation by licensed electricians. Always consult with qualified professionals for proper specification, installation, and maintenance of lighting systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
