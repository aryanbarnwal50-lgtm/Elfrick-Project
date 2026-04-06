import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FlaskConical, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Manufacturing", path: "/manufacturing" },
  { name: "Quality", path: "/quality" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white shadow-xl py-3" 
          : "bg-slate-900/40 backdrop-blur-md py-5 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="bg-emerald-600 p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-emerald-600/20">
              <FlaskConical className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}>
                ELFRICK
              </span>
              <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${
                scrolled ? "text-emerald-600" : "text-emerald-400"
              }`}>
                Healthcare
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8 space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-all hover:text-emerald-500 relative group ${
                  scrolled ? "text-slate-600" : "text-white"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? "w-full" : ""
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden md:block px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-xl hover:scale-105 active:scale-95 bg-emerald-600 text-white shadow-emerald-600/20 hover:bg-emerald-700"
            >
              Get Quote
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
                }`}
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-white overflow-hidden shadow-2xl"
      >
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-4 rounded-2xl text-lg font-bold transition-all ${
                location.pathname === link.path
                  ? "text-emerald-600 bg-emerald-50"
                  : "text-slate-600 hover:text-emerald-600 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-emerald-600 text-white px-4 py-5 rounded-2xl text-lg font-bold mt-6 shadow-lg shadow-emerald-600/20"
          >
            Get Quote
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
