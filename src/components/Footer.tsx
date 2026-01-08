import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">CIP</span>
              </div>
              <span className="font-display font-bold text-lg">MeetCIP</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Your friendly 24/7 virtual receptionist. Never miss another customer call.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/pricing" className="text-white/70 hover:text-accent transition-colors">Pricing</Link></li>
              <li><Link to="/demo" className="text-white/70 hover:text-accent transition-colors">Request Demo</Link></li>
              <li><a href="/#features" className="text-white/70 hover:text-accent transition-colors">Features</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-white/70 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white/70 hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/dpa" className="text-white/70 hover:text-accent transition-colors">Data Processing Addendum</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            © 2025 MeetCIP — Call Intelligence Platform. All rights reserved.
          </p>
          <p className="text-white/70 text-sm mt-2 md:mt-0">
            Contact: support@meetcip.com
          </p>
        </div>
      </div>
    </footer>
  )
}
