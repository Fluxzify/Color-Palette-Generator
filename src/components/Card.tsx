import { CardProps } from "@/types";
import { useState } from "react";

export default function Card({colorValue}: CardProps) {

  const [copied, setCopied] = useState(false);

   const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(colorValue); 
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); 
    } catch (err) {
      console.error("Error while copying:", err);
    }
  };
return(
<div className="card bg-white shadow-sm w-full sm:w-80 md:w-96">
  <div className="w-full h-48" style={{ backgroundColor: colorValue }}></div>
  <div className="card-body">
    <h2 className="card-title text-black">Color: {colorValue}</h2>
    <div className="card-actions justify-end">
    <button onClick={handleCopy} className="btn btn-info">
      {copied ? "Copied!" : "Copy color"}
    </button>
    </div>
  </div>
</div>);
}