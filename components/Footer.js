import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 text-center">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="cursor-pointer hover:underline font-bold">ABOUT</h5>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="cursor-pointer hover:underline font-bold font-bold">
          COMMUNITY
        </h5>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="cursor-pointer hover:underline font-bold font-bold cursor-pointer hover:underline">
          SUPPORT
        </h5>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="cursor-pointer hover:underline font-bold font-bold">
          CONTACT
        </h5>
      </div>
    </div>
  );
}

export default Footer;
