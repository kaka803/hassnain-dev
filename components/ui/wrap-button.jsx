import React from "react";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const WrapButton = ({ className, children, href }) => {
  return (
    <div className="flex items-center justify-center">
      {href ? (
        <Link href={href}>
          <div
            className={cn(
              "group cursor-pointer border group border-[#3B3A3A] bg-[#2a3354] gap-2 h-[36px] flex items-center p-[4px] rounded-full",
              className
            )}>
            <div className="border border-[#3B3A3A] bg-[#ffffff] h-[28px] rounded-full flex items-center justify-center text-[#2a3354] px-2">
              <p className="font-medium text-xs tracking-tight mr-1 ml-1 flex items-center gap-1 justify-center">
                {children}
              </p>
            </div>
            <div className="text-[#3b3a3a] group-hover:ml-1 transition-all size-[18px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]">
              <ArrowRight
                size={14}
                className="group-hover:rotate-45 transition-all text-white"
              />
            </div>
          </div>
        </Link>
      ) : (
        <div
          className={cn(
            "group cursor-pointer border group border-[#3B3A3A] bg-[#2a3354] gap-2 h-[36px] flex items-center p-[4px] rounded-full",
            className
          )}>
          <div className="border border-[#3B3A3A] bg-[#ffffff] h-[28px] rounded-full flex items-center justify-center text-[#2a3354] px-2">
            <Globe className="mx-1 animate-spin" size={14} />
            <p className="font-medium text-xs tracking-tight mr-1">
              {children ? children : "Get Started"}
            </p>
          </div>
          <div className="text-[#3b3a3a] group-hover:ml-1 transition-all size-[18px] flex items-center justify-center rounded-full border-2 border-[#3b3a3a]">
            <ArrowRight
              size={14}
              className="group-hover:rotate-45 transition-all text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WrapButton;
