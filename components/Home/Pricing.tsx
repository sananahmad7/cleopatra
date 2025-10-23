"use client";
import React from "react";

const Pricing = () => {
  const rows: Array<[string, string, string, string]> = [
    ["Bedroom", "$21.99", "$39.99", "—"],
    ["Bathroom", "$26.99", "$44.99", "—"],
    ["Half Bathroom", "$13.49", "$24.99", "—"],
    ["Other Room", "$31.49", "$49.99", "—"],
    ["Refrigerator", "—", "—", "$14.99"],
    ["Microwave", "—", "—", "$4.99"],
    ["Oven", "—", "—", "$9.99"],
    ["Stovetop", "—", "—", "$9.99"],
    ["Dishwasher", "—", "—", "$9.99"],
    ["Toaster", "—", "—", "$4.99"],
    ["Coffee Maker", "—", "—", "$4.99"],
    ["Blender", "—", "—", "$4.99"],
    ["Washer", "—", "—", "$9.99"],
    ["Dryer", "—", "—", "$9.99"],
    ["Air Fryer", "—", "—", "$4.99"],
    ["Electric Kettle", "—", "—", "$4.99"],
    ["Dishes", "—", "—", "$7.99"],
  ];

  return (
    <div
      className="
        max-w-[988px] mx-auto 
        h-auto 3xl:h-[1060px]
        mt-85  md:mt-9 lg:mt-18 2xl:mt-30
        px-4 sm:px-6 md:px-0
      "
    >
      {/* Header */}
      <h2
        className="
          font-torus font-bold text-center text-[#FD037E]
          text-[34px] leading-10
          sm:text-[42px] sm:leading-12
          md:text-[48px] md:leading-[54px]
          3xl:text-[52px] 3xl:leading-[58px]
          tracking-[0.01em] pt-4
        "
      >
        Simple, Honest Pricing
      </h2>

      {/* Desktop / Tablet table (md and up) */}
      <div className="hidden md:block mt-3 w-full">
        <div className="w-full h-[972px] overflow-hidden rounded-xl border border-[#DCE3EA]">
          <div className="w-full h-full ">
            <table className="min-w-[988px] w-full table-fixed border-collapse">
              <colgroup>
                <col className="w-[35%]" />
                <col className="w-[21.666%]" />
                <col className="w-[21.666%]" />
                <col className="w-[21.666%]" />
              </colgroup>

              {/* Column headers */}
              <thead>
                <tr className="bg-[#C70163] text-white">
                  <th className="h-[58px] px-4 text-left font-semibold rounded-tl-xl">
                    Service Type / ea
                  </th>
                  <th className="h-[58px] px-4 text-center font-semibold border-l border-white/20">
                    Standard Cleaning
                  </th>
                  <th className="h-[58px] px-4 text-center font-semibold border-l border-white/20">
                    Deep Cleaning
                  </th>
                  <th className="h-[58px] px-4 text-center font-semibold border-l border-white/20 rounded-tr-xl">
                    Add-Ons
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="text-[#777777]">
                {rows.map(([service, standard, deep, addon], i) => (
                  <tr
                    key={service + i}
                    className="border-t border-[#E7EDF3] h-[53px]"
                  >
                    <td className="px-4 text-left align-middle">{service}</td>
                    <td className="px-4 text-center align-middle border-l border-[#E7EDF3]">
                      {standard}
                    </td>
                    <td className="px-4 text-center align-middle border-l border-[#E7EDF3]">
                      {deep}
                    </td>
                    <td className="px-4 text-center align-middle border-l border-[#E7EDF3]">
                      {addon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile list (fits >= 374px) */}
      <div className="md:hidden mt-5">
        {/* Mobile header strip to mirror table headings */}
        <div className="grid grid-cols-4 gap-2 rounded-t-xl bg-[#C70163] text-white text-[12px] font-semibold px-3 py-2">
          <div className="text-left">Service</div>
          <div className="text-center">Standard</div>
          <div className="text-center">Deep</div>
          <div className="text-center">Add-Ons</div>
        </div>

        <div className="rounded-b-xl border border-[#DCE3EA] border-t-0">
          {rows.map(([service, standard, deep, addon], i) => (
            <div
              key={service + i}
              className="
                grid grid-cols-4 gap-2 items-center
                px-3
                h-[60px]               /* comfortable tap target */
                border-t border-[#E7EDF3]
                text-[#777777] text-sm
              "
            >
              <div className="text-left font-medium">{service}</div>
              <div className="text-center">{standard}</div>
              <div className="text-center">{deep}</div>
              <div className="text-center">{addon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
