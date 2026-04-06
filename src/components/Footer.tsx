import { Link } from "react-router-dom";
import { FlaskConical, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  ELFRICK
                </span>
                <span className="text-[10px] font-semibold text-emerald-500 tracking-[0.2em] uppercase">
                  Healthcare
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading the future of pharmaceutical and cosmetic manufacturing with precision, wisdom, and uncompromising quality. GMP certified and WHO compliant facilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-emerald-500 transition-colors">Our Products</Link></li>
              <li><Link to="/manufacturing" className="hover:text-emerald-500 transition-colors">Manufacturing Process</Link></li>
              <li><Link to="/quality" className="hover:text-emerald-500 transition-colors">Quality Assurance</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products" className="hover:text-emerald-500 transition-colors">Pharmaceutical Manufacturing</Link></li>
              <li><Link to="/products" className="hover:text-emerald-500 transition-colors">Cosmetic Formulation</Link></li>
              <li><Link to="/manufacturing" className="hover:text-emerald-500 transition-colors">Contract Manufacturing</Link></li>
              <li><Link to="/manufacturing" className="hover:text-emerald-500 transition-colors">R&D Services</Link></li>
              <li><Link to="/quality" className="hover:text-emerald-500 transition-colors">Third Party Manufacturing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>Plot No. 123, Industrial Area, Phase II, Chandigarh, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>+91 12345 67890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>info@elfrickhealthcare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Elfrick Healthcare PVT LTD. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
