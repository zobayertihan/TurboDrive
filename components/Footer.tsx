// Import necessary modules and components
import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

// Footer component definition
const Footer = () => {
  return (
    <footer className="flex flex-col text-black mt-5 border-t border-gray-100">
      {/* Top section of the footer */}
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 Sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6 ">
          {/* Footer logo */}
          <Image
            src={"/logo.svg"}
            alt={"imagelogo"}
            height={18}
            width={118}
            className="object-contain"
          />
        </div>
        {/* Footer links section */}
        <div className="footer-links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer-link">
              {/* Footer link title */}
              <h3 className="font-bold">{link.title}</h3>
              {/* List of links within the footer link */}
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section of the footer */}
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        {/* Copyright text */}
        <p className="text-base text-gray-700">
          TurboDrive 2023 &copy; all right reserved.
        </p>
        {/* Links to terms and privacy policy */}
        <div className="footer-copyrightLink">
          <Link href={"/"} className="text-gray-500">
            Terms & Conditions
          </Link>
          <Link href={"/"} className="text-gray-500">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component
