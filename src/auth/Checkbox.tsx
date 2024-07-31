import React, { useState, ReactNode } from "react";
import Unchecked from "@/assets/icons/UnChecked";
import Checked from "@/assets/icons/Checked";
import { Cleaning } from "@/task/task-content";

interface CleaningOptionProps {
 label: string;
 name: string;
 checked: boolean;
 onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
 disabled?: boolean;
 detailsComponent?: ReactNode; // This can be any React component
}

const CleaningOption: React.FC<CleaningOptionProps> = ({
 name,
 label,
 checked,
 onChange,
 disabled,
 detailsComponent = <Cleaning />, // Default to Cleaning component if not provided
}) => {
 const [showDetails, setShowDetails] = useState(false);

 const toggleDetails = () => {
    setShowDetails(!showDetails);
 };

 const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    if (event.target.checked) {
      setShowDetails(true); // Ensure details are shown when the checkbox is checked
    }
 };

 return (
    <div
      className={`flex flex-col border rounded-lg h-full max-h-[300px] px-[5.5%] py-[4%] min-h-[48px] w-full items-center justify-between ${
        checked ? "border-primary" : "border-gray-100"
      }`}
    >
      <label className="w-full">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleCheckboxChange}
          disabled={disabled}
          style={{ opacity: 0, position: "absolute" }}
        />
        <div className="flex flex-row rounded-lg overflow-y-scroll w-full items-center justify-between">
          <p className="text-sm text-primaryStrong font-normal">{label}</p>
          {checked ? <Checked /> : <Unchecked />}
        </div>
      </label>
      {checked && showDetails && (
        <div className="mt-4 flex flex-col gap-3">
          <button
            onClick={toggleDetails}
            className="text-sm font-normal w-full flex justify-end items-end text-secondary"
          >
            Hide details
          </button>
          <div className="custom-scrollbar bg h-[210px] overflow-y-scroll">
            {detailsComponent} {/* Render the details component */}
          </div>
        </div>
      )}
    </div>
 );
};

export default CleaningOption;