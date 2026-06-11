'use client';

import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text", 
  disabled, 
  formatPrice,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        placeholder=" "
        type={type}
        className={`w-full p-2 pb-0.5 pt-4 font-light bg-white border-2 rounded-2xl outline-none
                  transition disabled:opacity-70 disabled:cursor-not-allowed

                  }
                  peer
        `}
      />
      <label className={`peer-placeholder-shown:scale-100 translate-y-0 
                  peer-focus:scale-75 -translate-y-4
                  absolute text-sm left-4 duration-150 transform -translate-y-3 top-4 z-10 origin-[0] 
                  }
                  `}
      >
        {label}
      </label>
    </div>
   );
}
 
export default Input;