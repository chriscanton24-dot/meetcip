export default function DPA() {
  return (
    <div>
      <div className="gradient-mesh noise-overlay">
        <div className="section-container text-center">
          <h1 className="heading-xl text-primary mb-6">
            Data Processing Addendum
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Last updated: December 12, 2025
          </p>
        </div>
      </div>

      <div className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            This Data Processing Addendum ("DPA") forms part of the Terms of Service between MeetCIP ("Processor") and the customer ("Customer" or "Controller").
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">1. Roles of the Parties</h2>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>The Customer is the data controller and determines the purpose and means of processing personal data.</li>
            <li>MeetCIP acts solely as a data processor and processes data only according to the Customer's instructions and this DPA.</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">2. Scope of Processing</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            MeetCIP may process personal data solely for the purpose of providing the Service, including:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Call answering, routing, and message taking</li>
            <li>Call recording and transcription</li>
            <li>Call logging and analytics</li>
            <li>Customer-configured AI responses</li>
          </ul>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Data processed may include:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Caller phone numbers</li>
            <li>Call audio</li>
            <li>Call transcripts</li>
            <li>Business configuration data</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">3. Customer Responsibilities</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            The Customer represents and warrants that:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>They have a lawful basis to collect and process all personal data</li>
            <li>They comply with all applicable privacy, call recording, and consent laws</li>
            <li>They provide required disclosures to callers</li>
            <li>Their instructions to MeetCIP are lawful</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">4. MeetCIP Obligations</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            MeetCIP agrees to:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Process data only as necessary to provide the Service</li>
            <li>Implement reasonable technical and organizational security measures</li>
            <li>Ensure personnel with access to data are bound by confidentiality</li>
            <li>Not sell or misuse Customer data</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">5. Subprocessors</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            MeetCIP may use subprocessors (e.g., telephony, cloud infrastructure, AI providers) to deliver the Service.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            MeetCIP ensures that:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Subprocessors are contractually bound to protect data</li>
            <li>Processing remains consistent with this DPA</li>
          </ul>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            A current list of subprocessors is available upon request.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">6. Data Security</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            MeetCIP implements safeguards including:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Encryption in transit and at rest</li>
            <li>Role-based access controls</li>
            <li>Multi-tenant data isolation</li>
            <li>Audit logging</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">7. Data Retention & Deletion</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Upon termination of the Service, Customer data will be:
          </p>
          <ul className="text-lg text-gray-600 leading-relaxed mb-6 list-disc pl-6 space-y-2">
            <li>Retained only as necessary for legal or operational reasons</li>
            <li>Deleted or anonymized upon request, subject to applicable laws</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">8. Data Subject Rights</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            MeetCIP will reasonably assist the Customer in responding to data subject requests, where applicable and legally required.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">9. Limitation of Liability</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            This DPA is subject to the limitation of liability provisions in the Terms of Service.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">10. Governing Law</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            This DPA is governed by the laws of the State of Texas, unless otherwise required by applicable data protection laws.
          </p>

          <h2 className="text-3xl font-bold text-primary mb-4 mt-12">11. Order of Precedence</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            In the event of conflict:
          </p>
          <ol className="text-lg text-gray-600 leading-relaxed mb-6 list-decimal pl-6 space-y-2">
            <li>This DPA</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
