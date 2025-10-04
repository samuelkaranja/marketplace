import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8 text-xs text-gray-500 flex items-center justify-between">
        <div>
          <a className="underline">Terms & Conditions</a>
          <span className="mx-3">|</span>
          <a className="underline">Privacy Policy</a>
        </div>
        <div>© 2025 KEMONK. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
