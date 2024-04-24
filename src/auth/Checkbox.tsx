// import React, { useState } from 'react';
// import Unchecked from "@/assets/icons/UnChecked";
// import Checked from "@/assets/icons/Checked";
// import { Cleaning } from "@/task/task-content";

// interface CleaningOptionProps {
//     label: string;
//     name: string;
//     checked: boolean;
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
//     disabled: boolean;
// }

// const CleaningOption: React.FC<CleaningOptionProps> = ({ name, label, checked, onChange, disabled }) => {
//     const [showDetails, setShowDetails] = useState(false);

//     const toggleDetails = () => {
//        setShowDetails(!showDetails);
//     };

//     // Ensure the onChange handler updates the form state correctly
//     const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         onChange(event); // Call the passed onChange handler to update the form state
//         toggleDetails(); // Optionally toggle details if needed
//     };

//     return (
//        <div className={`flex flex-col border rounded-lg h-full max-h-[300px] px-[5.5%] py-[4%] min-h-[48px] w-full items-center justify-between ${checked ? "border-primary" : "border-gray-100"}`}>
//          <label className="w-full">
//            <input
//              type="checkbox"
//              name={name}
//              checked={checked}
//              onChange={handleCheckboxChange} // Use the custom handler
//              disabled={disabled}
//              style={{ opacity: 0, position: "absolute" }}
//            />
//            <div className="flex flex-row rounded-lg overflow-y-scroll w-full items-center justify-between" onClick={() => !disabled && handleCheckboxChange({ target: { checked: !checked, name } } as never)}>
//              <p className="text-sm text-primaryStrong font-normal">{label}</p>
//              {checked ? <Checked /> : <Unchecked />}
//            </div>
//          </label>
//          {checked && showDetails && (
//            <div className="mt-4 flex flex-col gap-3">
//              <button onClick={toggleDetails} className="text-sm font-normal w-full flex justify-end items-end text-secondary">
//                Hide details
//              </button>
//              <div className="custom-scrollbar bg h-[210px] overflow-y-scroll">
//                <Cleaning />
//              </div>
//            </div>
//          )}
//        </div>
//     );
// };

// export default CleaningOption;



import React, { useState } from 'react';
import Unchecked from "@/assets/icons/UnChecked";
import Checked from "@/assets/icons/Checked";
import { Cleaning } from '@/task/task-content';

interface CleaningOptionProps {
    label: string;
    name: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

const CleaningOption: React.FC<CleaningOptionProps> = ({ name, label, checked, onChange, disabled }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
        toggleDetails();
    };

    return (
        <div className={`flex flex-col border rounded-lg h-full max-h-[300px] px-[5.5%] py-[4%] min-h-[48px] w-full items-center justify-between ${checked ? "border-primary" : "border-gray-100"}`}>
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
                    <button onClick={toggleDetails} className="text-sm font-normal w-full flex justify-end items-end text-secondary">
                        Hide details
                    </button>
                    <div className="custom-scrollbar bg h-[210px] overflow-y-scroll">
                   <Cleaning />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CleaningOption;

