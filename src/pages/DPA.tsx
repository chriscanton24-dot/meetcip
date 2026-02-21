export default function DPA() {
  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <h1 className="heading-xl text-primary mb-6">
            Data Processing Addendum (DPA)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Last updated: February 17, 2026
          </p>
        </div>
      </div>

      <div className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            This Data Processing Addendum ("DPA") supplements and forms an integral part of the Terms of Service between MeetCIP ("Processor" or "MeetCIP") and the subscribing entity ("Customer," "Controller," or "you"). This DPA governs the processing of Personal Data by MeetCIP on behalf of Customer in connection with the provision of MeetCIP's AI-powered call answering services (the "Services").
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">1. Definitions</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            For purposes of this DPA:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li><strong>"Controller"</strong> means the entity that determines the purposes and means of processing Personal Data</li>
            <li><strong>"Data Subject"</strong> means an identified or identifiable natural person to whom Personal Data relates</li>
            <li><strong>"GDPR"</strong> means the General Data Protection Regulation (EU) 2016/679</li>
            <li><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person, as defined under applicable Data Protection Law</li>
            <li><strong>"Processing"</strong> means any operation performed on Personal Data, including collection, recording, storage, retrieval, use, disclosure, erasure, or destruction</li>
            <li><strong>"Processor"</strong> means the entity that processes Personal Data on behalf of the Controller</li>
            <li><strong>"Data Protection Law"</strong> means all applicable laws and regulations relating to the processing of Personal Data, including GDPR, CCPA, and other applicable privacy laws</li>
            <li><strong>"Sub-processor"</strong> means any third party appointed by MeetCIP to process Personal Data on behalf of Customer</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">2. Roles and Responsibilities</h2>
          
          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">2.1 Data Controller</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Customer acts as the <strong>Data Controller</strong> and:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Determines the purposes and essential means of processing Personal Data</li>
            <li>Is responsible for the lawful basis for processing Personal Data</li>
            <li>Must provide all required notices and obtain all necessary consents from Data Subjects</li>
            <li>Must comply with all applicable Data Protection Laws</li>
            <li>Warrants that all processing instructions to MeetCIP are lawful</li>
          </ul>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">2.2 Data Processor</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            MeetCIP acts solely as a <strong>Data Processor</strong> and:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Processes Personal Data only on documented instructions from Customer</li>
            <li>Does not determine the purposes or essential means of processing</li>
            <li>Implements appropriate technical and organizational measures to protect Personal Data</li>
            <li>Assists Customer with Data Subject rights requests and regulatory compliance</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">3. Scope and Categories of Processing</h2>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">3.1 Subject Matter and Duration</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Processing relates to the provision of AI-powered call answering services for the duration of the Customer's subscription and applicable retention periods.
          </p>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">3.2 Nature and Purpose of Processing</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            MeetCIP processes Personal Data solely to:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Answer and route inbound telephone calls on Customer's behalf</li>
            <li>Record, transcribe, and analyze call content using AI</li>
            <li>Generate call summaries, logs, and analytics reports</li>
            <li>Send SMS notifications related to call activity (where consented)</li>
            <li>Provide customer dashboard access to call data</li>
            <li>Maintain and improve service quality and security</li>
          </ul>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">3.3 Categories of Data Subjects</h3>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Callers to Customer's business phone line(s)</li>
            <li>Customer's authorized users and employees</li>
            <li>Individuals whose data appears in call content or business records</li>
          </ul>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">3.4 Categories of Personal Data</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Data Elements</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Contact Information</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Phone numbers, names, email addresses</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Call Content</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Audio recordings, voice transcriptions, call metadata</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Communication Records</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Call timestamps, duration, caller ID, call summaries</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Device/Technical Data</td>
                  <td className="px-6 py-4 text-sm text-gray-600">IP addresses, device identifiers, browser information</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Business Information</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Customer service requests, appointment details, business inquiries</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Authentication Data</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Customer login credentials, access logs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">4. Customer Instructions and Compliance</h2>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">4.1 Processing Instructions</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            MeetCIP will process Personal Data only:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>As necessary to provide the Services under the Terms of Service</li>
            <li>In accordance with Customer's documented instructions</li>
            <li>As required by applicable law (with notice to Customer where legally permitted)</li>
          </ul>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">4.2 Customer Compliance Obligations</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Customer represents and warrants that:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>It has obtained all necessary consents and provided all required notices to Data Subjects</li>
            <li>All Data Subjects whose calls are recorded have been lawfully notified as required by applicable law</li>
            <li>Customer has a valid lawful basis under applicable Data Protection Law for all processing</li>
            <li>Customer's use of the Services complies with all applicable laws and regulations</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">5. Data Security Measures</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            MeetCIP implements and maintains appropriate technical and organizational security measures, including:
          </p>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">Technical Measures:</h3>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Encryption of Personal Data in transit and at rest</li>
            <li>Multi-tenant data isolation using customer business identifiers</li>
            <li>Role-based access controls with principle of least privilege</li>
            <li>Secure authentication and password hashing</li>
            <li>Regular security monitoring and automated threat detection</li>
            <li>Secure deletion procedures for expired data</li>
          </ul>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">Organizational Measures:</h3>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Security awareness training for personnel with access to Personal Data</li>
            <li>Background verification for employees with system access</li>
            <li>Confidentiality agreements binding all personnel</li>
            <li>Incident response procedures and data breach protocols</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Documented data handling and retention procedures</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">6. Sub-processors</h2>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">6.1 Authorized Sub-processors</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Customer consents to MeetCIP's use of Sub-processors to deliver the Services. MeetCIP engages Sub-processors in the following categories:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li><strong>Telephony Services:</strong> Call routing, SMS delivery, and phone system infrastructure</li>
            <li><strong>Cloud Infrastructure:</strong> Hosting, storage, database, and computing services</li>
            <li><strong>AI Processing:</strong> Machine learning, natural language processing, and speech recognition</li>
            <li><strong>Payment Processing:</strong> Subscription billing and payment handling</li>
            <li><strong>Communication Services:</strong> Email delivery and customer support tools</li>
          </ul>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">6.2 Sub-processor Locations</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            All Sub-processors currently operate within the United States. MeetCIP will provide advance notice of any Sub-processors located outside the United States.
          </p>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">6.3 Sub-processor Changes</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            MeetCIP will provide <strong>14 days' advance notice</strong> of any new Sub-processors or material changes to existing Sub-processors. Customer may object to such changes by terminating the affected Service with <strong>30 days' written notice</strong>.
          </p>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">6.4 Detailed Sub-processor Information</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Enterprise customers may request a detailed list of current Sub-processors by contacting demomeetcip@gmail.com. Such information is provided under confidentiality restrictions.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">7. Data Retention and Deletion</h2>
          
          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">7.1 Retention Periods</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Data Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Retention Period</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Rationale</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Call recordings and transcripts</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">90 days after account termination</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Operational requirements, dispute resolution</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Call logs and metadata</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">12 months after account termination</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Legal compliance, billing verification</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Customer account data</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">12 months after account termination</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Legal compliance, potential service restoration</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">SMS consent records</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">As required by applicable law</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Regulatory compliance</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Security logs</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">2 years</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Security monitoring, incident investigation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold text-primary mb-3 mt-8">7.2 Data Return and Deletion</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Upon termination of Services or upon Customer's written request:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>MeetCIP will provide available Personal Data to Customer in a commonly used electronic format</li>
            <li>MeetCIP will delete or anonymize all Personal Data <strong>within 90 days</strong>, except where longer retention is required by law</li>
            <li>Deletion certificates will be provided upon request</li>
            <li>Data in backup systems will be overwritten in the ordinary course (maximum 6 months)</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">8. Data Subject Rights</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            MeetCIP will provide reasonable assistance to Customer in responding to requests from Data Subjects to exercise their rights under applicable Data Protection Law, including:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Right of access</li>
            <li>Right to rectification</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">9. Data Breach Notification</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            MeetCIP will:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Notify Customer <strong>without undue delay</strong> and no later than <strong>72 hours</strong> after becoming aware of any Personal Data breach affecting Customer data</li>
            <li>Provide available information about the nature, scope, and likely consequences of the breach</li>
            <li>Describe measures taken or proposed to address the breach</li>
            <li>Provide a point of contact for further information</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">10. Governing Law and Disputes</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            This DPA is governed by the laws of the <strong>State of Texas</strong>, except where Data Protection Law requires application of the laws of the Data Subject's jurisdiction.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">11. Contact Information</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            <strong>Data Protection Inquiries</strong><br />
            MeetCIP<br />
            📧 <a href="mailto:demomeetcip@gmail.com" className="text-accent hover:text-accent-dark">demomeetcip@gmail.com</a>
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            For data protection inquiries, Data Subject rights requests, or DPA-related matters, contact the above.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            <strong>By using the Services, Customer acknowledges that it has read, understood, and agrees to be bound by the terms of this Data Processing Addendum.</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
