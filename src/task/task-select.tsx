// import React, { ChangeEvent } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// // Import your icons here
// import Unchecked from "@/assets/icons/UnChecked";
// import Checked from "@/assets/icons/Checked";
// import { Cleaning } from "./task-content";

// // Infer the type from the schema
// type FormData = z.infer<typeof schema>;

// // Define a Zod schema for the form data with custom validation
// const schema = z
//   .object({
//     checkbox1: z.boolean(),
//     checkbox2: z.boolean(),
//     checkbox3: z.boolean(),
//   })
//   .refine((data) => Object.values(data).filter(Boolean).length <= 2, {
//     message: "You can select more than 2 checkboxes.",
//     path: ["checkbox1", "checkbox2", "checkbox3"], // Apply the error to all checkboxes
//   });

// const Task = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data);
//   };

//   // Count the number of checked checkboxes
//   const checkedCount = Object.values(watch()).filter(Boolean).length;

//   // State to manage the checked status of each checkbox
//   const [checkedStatus, setCheckedStatus] = React.useState({
//     checkbox1: false,
//     checkbox2: false,
//     checkbox3: false,
//   });

//   // State to manage the visibility of different sections
//   const [showInfoSection1, setShowInfoSection1] = React.useState(true);
//   const [showInfoSection2, setShowInfoSection2] = React.useState(true);
//   const [showInfoSection3, setShowInfoSection3] = React.useState(true);

//   // Functions to toggle the visibility of different sections
//   const toggleDetailsSection1 = () => {
//     setShowInfoSection1(!showInfoSection1);
//   };

//   const toggleDetailsSection2 = () => {
//     setShowInfoSection2(!showInfoSection2);
//   };

//   const toggleDetailsSection3 = () => {
//     setShowInfoSection3(!showInfoSection3);
//   };

//   const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
//     // Prevent updating the state if more than two checkboxes are already checked
//     if (checkedCount >= 2 && !event.target.checked) {
//       return;
//     }

//     const newCheckedStatus = {
//       ...checkedStatus,
//       [event.target.name]: event.target.checked,
//     };

//     setCheckedStatus(newCheckedStatus);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="w-full px-[4%] mt-4 flex flex-col gap-3"
//     >
//       {/* standard cleaning */}
//       <div
//         className={`flex flex-col border rounded-lg h-full max-h-[300px] px-[5.5%] py-[4%] min-h-[48px] w-full items-center justify-between ${
//           checkedStatus.checkbox1 ? "border-primary" : "border-gray-100"
//         }`}
//       >
//         <label className="w-full">
//           <input
//             type="checkbox"
//             {...register("checkbox1")}
//             checked={checkedStatus.checkbox1}
//             onChange={handleCheckboxChange}
//             disabled={checkedCount >= 2}
//             style={{ opacity: 0, position: "absolute" }}
//           />
//           <div className="flex flex-row rounded-lg  overflow-y-scroll w-full items-center justify-between">
//             <p className="text-sm text-primaryStrong font-normal">
//               Standard Cleaning
//             </p>
//             {checkedStatus.checkbox1 ? <Checked /> : <Unchecked />}
//           </div>
//         </label>
//         {checkedStatus.checkbox1 && showInfoSection1 && (
//           <div className="mt-4 flex flex-col gap-3">
//             <button
//               onClick={toggleDetailsSection1}
//               className="text-sm font-normal w-full flex justify-end items-end text-secondary"
//             >
//               Hide details
//             </button>
//             <div className=" custom-scrollbar bg h-[210px] overflow-y-scroll">
//               <Cleaning />
//             </div>
//           </div>
//         )}
//         {errors.checkbox1 && (
//           <p className="text-red-500 absolute text-xs">
//             Error: You can select more than 2 checkboxes.
//           </p>
//         )}
//       </div>
//       {/* deep cleaning */}
//       <div
//         className={`flex flex-col border rounded-lg h-full max-h-[300px] px-[5.5%] py-[4%] min-h-[48px] w-full items-center justify-between ${
//           checkedStatus.checkbox2 ? "border-primary" : "border-gray-100"
//         }`}
//       >
//         {" "}
//         <label className="w-full">
//           <input
//             type="checkbox"
//             {...register("checkbox2")}
//             checked={checkedStatus.checkbox2}
//             onChange={handleCheckboxChange}
//             disabled={checkedCount >= 2}
//             style={{ opacity: 0, position: "absolute" }}
//           />
//           <div className="flex flex-row rounded-lg  overflow-y-scroll w-full items-center justify-between">
//             <p className="text-sm text-primaryStrong font-normal">
//               Deep Cleaning
//             </p>
//             {checkedStatus.checkbox2 ? <Checked /> : <Unchecked />}
//           </div>
//         </label>
//         {checkedStatus.checkbox2 && showInfoSection2 && (
//           <div className="mt-4 flex flex-col gap-3">
//             <button
//               onClick={toggleDetailsSection2}
//               className="text-sm font-normal w-full flex justify-end items-end text-secondary"
//             >
//               Hide details
//             </button>
//             <div className=" custom-scrollbar bg h-[210px] overflow-y-scroll">
//               <Cleaning />
//             </div>
//           </div>
//         )}
//         {errors.checkbox2 && (
//           <p className="text-red-500 absolute text-xs">
//             Error: You can select more than 2 checkboxes.
//           </p>
//         )}
//       </div>
//       {/* move-in cleaning  */}
//       <div
//         className={`flex flex-col border rounded-lg h-full max-h-[300px] px-[5.5%] py-[4%] min-h-[48px] w-full items-center justify-between ${
//           checkedStatus.checkbox3 ? "border-primary" : "border-gray-100"
//         }`}
//       >
//         {" "}
//         <label className="w-full">
//           <input
//             type="checkbox"
//             {...register("checkbox3")}
//             checked={checkedStatus.checkbox3}
//             onChange={handleCheckboxChange}
//             disabled={checkedCount >= 2}
//             style={{ opacity: 0, position: "absolute" }}
//           />
//           <div className="flex flex-row rounded-lg  overflow-y-scroll w-full items-center justify-between">
//             <p className="text-sm text-primaryStrong font-normal">
//               Move-in Cleaning
//             </p>
//             {checkedStatus.checkbox3 ? <Checked /> : <Unchecked />}
//           </div>
//         </label>
//         {checkedStatus.checkbox3 && showInfoSection3 && (
//           <div className="mt-4 flex flex-col gap-3">
//             <button
//               onClick={toggleDetailsSection3}
//               className="text-sm font-normal w-full flex justify-end items-end text-secondary"
//             >
//               Hide details
//             </button>
//             <div className=" custom-scrollbar bg h-[210px] overflow-y-scroll">
//               <Cleaning />
//             </div>
//           </div>
//         )}
//         {errors.checkbox3 && (
//           <p className="text-red-500 absolute text-xs">
//             Error: You can select more than 2 checkboxes.
//           </p>
//         )}
//       </div>

//       <button
//         type="submit"
//         disabled={checkedCount < 2}
//         className="flex items-center justify-center font-medium text-[15px] h-[42px] bg-fade text-white w-[98%] rounded-[20px] mx-auto "
//       >
//         Next
//       </button>
//     </form>
//   );
// };

// export default Task;

// Task.tsx
// Task.tsx
// import React from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import Checkbox from "@/auth/Checkbox"; // Adjust the import path as necessary

// // Define a Zod schema for the form data with custom validation
// const schema = z.object({
//  cleaningType: z.union([z.literal('standard'), z.literal('deep'), z.literal('move-in')]),
// });

// type FormData = z.infer<typeof schema>;

// const Task = () => {
//  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
//     resolver: zodResolver(schema),
//  });

//  const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data);
//  };

//  const cleaningType = watch('cleaningType');

//  return (
//     <form onSubmit={handleSubmit(onSubmit)} className="w-full px-[4%] mt-4 flex flex-col gap-3">
//       <Checkbox
//         name="cleaningType"
//         label="Standard Cleaning"
//         checked={cleaningType === 'standard'}
//         // onChange={(e) => e.target.checked && register('cleaningType').onChange(e)}
//         onChange={(e) => {
//             register('cleaningType').onChange(e); // Always call the register's onChange
//             if (!e.target.checked && cleaningType === 'standard') {
//               // If unchecking and it's the currently selected type, clear the selection
//               register('cleaningType').onChange({ target: { value: '' } } as any);
//             }
//           }}
//         disabled={cleaningType && cleaningType !== 'standard'}
//       />
//       <Checkbox
//         name="cleaningType"
//         label="Deep Cleaning"
//         checked={cleaningType === 'deep'}
//         // onChange={(e) => e.target.checked && register('cleaningType').onChange(e)}
//         onChange={(e) => {
//             register('cleaningType').onChange(e); // Always call the register's onChange
//             if (!e.target.checked && cleaningType === 'deep') {
//               // If unchecking and it's the currently selected type, clear the selection
//               register('cleaningType').onChange({ target: { value: '' } } as any);
//             }
//           }}
//         disabled={cleaningType && cleaningType !== 'deep'}
//       />
//       <Checkbox
//         name="cleaningType"
//         label="Move-in Cleaning"
//         checked={cleaningType === 'move-in'}
//         // onChange={(e) => e.target.checked && register('cleaningType').onChange(e)}
//         onChange={(e) => {
//             register('cleaningType').onChange(e); // Always call the register's onChange
//             if (!e.target.checked && cleaningType === 'move-in') {
//               // If unchecking and it's the currently selected type, clear the selection
//               register('cleaningType').onChange({ target: { value: '' } } as any);
//             }
//           }}
//         disabled={cleaningType && cleaningType !== 'move-in'}
//       />
//       {errors.cleaningType && (
//         <p className="text-red-500 text-xs">You can select one type of cleaning and extra tasks.</p>
//       )}
//       <button type="submit" className="flex items-center justify-center font-medium text-[15px] h-[42px] bg-fade text-white w-[98%] rounded-[20px] mx-auto">
//         Next
//       </button>
//     </form>
//  );
// };

// export default Task;

// import React from "react";
// import { SubmitHandler, useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import Checkbox from "@/auth/Checkbox"; // Adjust the import path as necessary

// // Define a Zod schema for the form data with custom validation
// const schema = z.object({
//  cleaningType: z.union([z.literal('standard'), z.literal('deep'), z.literal('move-in')]),
// });

// type FormData = z.infer<typeof schema>;

// const Task = () => {
//  const { handleSubmit, control, watch, formState: { errors } } = useForm<FormData>({
//     resolver: zodResolver(schema),
//  });

//  const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data);
//  };

//  const cleaningType = watch('cleaningType');

//  return (
//     <form onSubmit={handleSubmit(onSubmit)} className="w-full px-[4%] mt-4 flex flex-col gap-3">
//       <Controller
//         name="cleaningType"
//         control={control}
//         defaultValue={undefined} // Set defaultValue to undefined
//         render={({ field }) => (
//           <Checkbox
//             label="Standard Cleaning"
//             name="Standard Cleaning"
//             checked={field.value === 'standard'}
//             onChange={(e) => {
//                 // Toggle the value based on the checkbox state
//                 const newValue = e.target.checked ? 'standard' : undefined;
//                 field.onChange(newValue);
//               }}
//             disabled={field.value && field.value !== 'standard'}
//           />
//         )}
//       />
//       <Controller
//         name="cleaningType"
//         control={control}
//         defaultValue={undefined} // Set defaultValue to undefined
//         render={({ field }) => (
//           <Checkbox
//             label="Deep Cleaning"
//             name="Deep Cleaning"
//             checked={field.value === 'deep'}
//             onChange={(e) => {
//                 // Toggle the value based on the checkbox state
//                 const newValue = e.target.checked ? 'deep' : undefined;
//                 field.onChange(newValue);
//               }}
//             disabled={field.value && field.value !== 'deep'}
//           />
//         )}
//       />
//       <Controller
//         name="cleaningType"
//         control={control}
//         defaultValue={undefined} // Set defaultValue to undefined
//         render={({ field }) => (
//           <Checkbox
//             label="Move-in Cleaning"
//             name="Move-in Cleaning"
//             checked={field.value === 'move-in'}
//             onChange={(e) => {
//                 // Toggle the value based on the checkbox state
//                 const newValue = e.target.checked ? 'move-in' : undefined;
//                 field.onChange(newValue);
//               }}
//             disabled={field.value && field.value !== 'move-in'}
//           />
//         )}
//       />
//       {errors.cleaningType && (
//         <p className="text-red-500 text-xs">You can select one type of cleaning and extra tasks.</p>
//       )}
//       <button type="submit" className="flex items-center justify-center font-medium text-[15px] h-[42px] bg-fade text-white w-[98%] rounded-[20px] mx-auto">
//         Next
//       </button>
//     </form>
//  );
// };

// export default Task;

import React from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Checkbox from "@/auth/Checkbox"; // Adjust the import path as necessary

const schema = z.object({
  cleaningType: z.union([
    z.literal("standard"),
    z.literal("deep"),
    z.literal("move-in"),
  ]),
  extraTasks: z.union([
    z.literal("ironing"),
    z.literal("mopping"),
    z.literal("brushing"),
  ]),
});

type FormData = z.infer<typeof schema>;

const Task = () => {
  const {
    handleSubmit,
    control,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [submissionSuccessful, setSubmissionSuccessful] = React.useState(false); // Step 1: Add state for submission status


  const cleaningType = watch("cleaningType");
  const extraTasks = watch("extraTasks");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setSubmissionSuccessful(true); // Step 2: Update submission status on successful submission
  };

  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-[4%] mt-4 flex flex-col gap-3"
    >
      {cleaningType &&
        extraTasks &&
        Object.values(extraTasks).filter((value) => Boolean(value)).length >
          1 && (
          <p className="text-red-500 font-medium text-xs">
            You can select one type of cleaning and extra tasks
          </p>
        )}
      <Controller
        name="cleaningType"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <Checkbox
            label="Standard Cleaning"
            name="standard"
            checked={field.value === "standard"}
            onChange={(e) => {
              const newValue = e.target.checked ? "standard" : undefined;
              field.onChange(newValue);
            }}
            disabled={field.value && field.value !== "standard"}
          />
        )}
      />
      <Controller
        name="cleaningType"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <Checkbox
            label="Deep Cleaning"
            name="deep"
            checked={field.value === "deep"}
            onChange={(e) => {
              const newValue = e.target.checked ? "deep" : undefined;
              field.onChange(newValue);
            }}
            disabled={field.value && field.value !== "deep"}
          />
        )}
      />
      <Controller
        name="cleaningType"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <Checkbox
            label="Move-in Cleaning"
            name="move-in"
            checked={field.value === "move-in"}
            onChange={(e) => {
              const newValue = e.target.checked ? "move-in" : undefined;
              field.onChange(newValue);
            }}
            disabled={field.value && field.value !== "move-in"}
          />
        )}
      />
      <Controller
        name="extraTasks"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <Checkbox
            label="Ironing"
            name="ironing"
            checked={field.value === "ironing"}
            onChange={(e) => {
              const newValue = e.target.checked ? "ironing" : undefined;
              field.onChange(newValue);
            }}
            disabled={field.value && field.value !== "ironing"}
          />
        )}
      />
      <Controller
        name="extraTasks"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <Checkbox
            label="Mopping"
            name="mopping"
            checked={field.value === "mopping"}
            onChange={(e) => {
              const newValue = e.target.checked ? "mopping" : undefined;
              field.onChange(newValue);
            }}
            disabled={field.value && field.value !== "mopping"}
          />
        )}
      />
      <Controller
        name="extraTasks"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <Checkbox
            label="Brushing"
            name="brushing"
            checked={field.value === "brushing"}
            onChange={(e) => {
              const newValue = e.target.checked ? "brushing" : undefined;
              field.onChange(newValue);
            }}
            disabled={field.value && field.value !== "brushing"}
          />
        )}
      />

<button
 type="submit"
 className={`flex items-center mt-4 my-8 justify-center font-medium text-[15px] h-[42px] text-white w-[98%] rounded-[20px] mx-auto ${
    cleaningType && extraTasks ? "bg-green-500" : "bg-fade"
 }`}
>
 Next
</button>
    </form>
    {submissionSuccessful && ( // Step 3: Conditionally render the success message
        <div  className="text-green-500 font-medium text-lg mb-4">
          Submission was successful!
        </div>
      )}
    </>
  );
};

export default Task;
