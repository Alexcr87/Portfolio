import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="bg-[rgba(29,29,29,0.8)] h-24 grid grid-cols-3 items-center px-8 fixed bottom-0 w-full z-50">
      <div className="flex justify-start">
        <p className="text-white">© Christian Rugna 2024</p>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <Link href="" target="_blank" className="hover:text-primaryColor text-gray-300">
          <Image src="/Whatsapp.svg" alt="Whatsapp logo" width={40} height={40} />
        </Link>
        <Link href="https://github.com/Alexcr87" target="_blank" className="hover:text-black text-gray-300">
          <Image src="/GitHub.svg" alt="GitHub logo" width={60} height={60} />
        </Link>
        <Link href="https://www.linkedin.com/in/christian-rugna/" target="_blank" className="hover:text-primaryColor text-gray-300">
          <Image src="/Linkedin.svg" alt="Linkedin logo" width={60} height={60} />
        </Link>
        <Link href="mailto:your-email@example.com" target="_blank" className="hover:text-primaryColor text-gray-300">
          <Image src="/Gmail.svg" alt="Gmail logo" width={60} height={60} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
