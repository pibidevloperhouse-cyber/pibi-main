import { Linkedin, Youtube, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-slate-300">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-brand-gradient flex items-center gap-1">
              <div className="w-10 h-10 relative">
                <Image
                  src={"/logo.png"}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="hidden sm:inline">Pibi Tech</span>
            </div>
          </div>
          <div>
            <h4 
              className="font-bold mb-4 text-lg text-[#2ec4b6]"
            >
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/agentic-ai"
                  className="text-white hover:text-primary transition"
                >
                  AI/ML
                </Link>
              </li>
              <li>
                <Link
                  href="/bussiness-intelligent"
                  className="text-white hover:text-primary transition"
                >
                  Data
                </Link>
              </li>
              <li>
                <Link
                  href="/cloud-ops"
                  className="text-white hover:text-primary transition"
                >
                  Cloud & Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/product-development"
                  className="text-white hover:text-primary transition"
                >
                  Product Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/application-development"
                  className="text-white hover:text-primary transition"
                >
                  Digital Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance-bot"
                  className="text-white hover:text-primary transition"
                >
                  Security & GRC
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 
              className="font-bold mb-4 text-lg text-[#2ec4b6]"
            >
              Capabilities
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact-us"
                  className="text-white hover:text-primary transition"
                >
                  Private LLM
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white hover:text-primary transition"
                >
                  AI Training Data
                </Link>
              </li>
              <li>
                <Link
                  href="/intelligent-infrastructure"
                  className="text-white hover:text-primary transition"
                >
                  AI Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 
              className="font-bold mb-4 text-lg text-[#2ec4b6]"
            >
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact-us"
                  className="text-white hover:text-primary transition"
                >
                  Physical AI
                </Link>
              </li>
              <li>
                <Link
                  href="/agentic-ai"
                  className="text-white hover:text-primary transition"
                >
                  Enterprise AI
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white hover:text-primary transition"
                >
                  Industry AI
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white hover:text-primary transition"
                >
                  Customer AI
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <Link
                href="/contact-us"
                className="text-white hover:text-primary transition text-md"
              >
                Home
              </Link>
              <Link
                href="/contact-us"
                className="text-white hover:text-primary transition text-md"
              >
                Careers
              </Link>
              <Link
                href="/contact-us"
                className="text-white hover:text-primary transition text-md"
              >
                Contact us
              </Link>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/pi-bi-technologies"
                target="_blank"
                className="text-white hover:text-primary transition"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/pibi_technologies/"
                target="_blank"
                className="text-white hover:text-primary transition"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@PiBiTechnologies"
                target="_blank"
                className="text-white hover:text-primary transition"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-700 text-center text-white text-md">
            <p className="text-white">
              &copy; {new Date().getFullYear()} Pibi Technologies. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
