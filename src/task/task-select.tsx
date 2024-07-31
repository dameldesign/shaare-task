// Import necessary React hooks and components
import React from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Ironing, WardrobeOrganization } from "./task-content";
import CleaningOption from "@/auth/Checkbox";

// Define the schema for form validation using Zod
const schema = z.object({
  cleaningType: z.union([
    z.literal("standard"),
    z.literal("deep"),
    z.literal("move-in"),
  ]),
  extraTasks: z.array(
    z.union([
      z.literal("ironing"),
      z.literal("laundry"),
      z.literal("wardrobe-organization"),
    ])
 ),
});

// Infer the type of the form data from the schema
type FormData = z.infer<typeof schema>;

// Define the Task component
const Task = () => {
  // Initialize the form with useForm hook, using the Zod schema for validation
  const { handleSubmit, control, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // State to track if the form submission was successful
  const [submissionSuccessful, setSubmissionSuccessful] = React.useState(false);

  // Watch for changes in the form fields
  const cleaningType = watch("cleaningType");
  const extraTasks = watch("extraTasks");

  // Define the onSubmit function to handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setSubmissionSuccessful(true); // Update the state to indicate successful submission
  };

  // Render the form and its elements
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-[4%] mt-4 flex flex-col gap-3"
      >
        {/* Display a warning if more than one extra task is selected */}
        {cleaningType &&
          extraTasks &&
          Object.values(extraTasks).filter((value) => Boolean(value)).length >
            1 && (
            <p className="text-red-500 bg-white px-1  absolute -translate-y-11 text-xs">
              You can select one type of cleaning and extra tasks
            </p>
          )}
        {/* Render checkboxes for cleaning types */}
        <Controller
          name="cleaningType"
          control={control}
          defaultValue={undefined}
          render={({ field }) => (
            <CleaningOption
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
            <CleaningOption
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
            <CleaningOption
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

        {/* Render checkboxes for extra tasks */}
<Controller
 name="extraTasks"
 control={control}
 defaultValue={[]}
 render={({ field }) => (
    <>
      <CleaningOption
        label="Ironing"
        name="ironing"
        checked={field.value.includes("ironing")}
        onChange={(e) => {
          const newValue = e.target.checked
            ? [...field.value, "ironing"]
            : field.value.filter((task) => task !== "ironing");
          field.onChange(newValue);
        }}
        detailsComponent={<Ironing />} // Pass the Ironing component here
      />
      <CleaningOption
        label="Laundry"
        name="laundry"
        checked={field.value.includes("laundry")}
        onChange={(e) => {
          const newValue = e.target.checked
            ? [...field.value, "laundry"]
            : field.value.filter((task) => task !== "laundry");
          field.onChange(newValue);
        }}
        detailsComponent={<Ironing />}
      />
      <CleaningOption
        label="Wardrobe Organization"
        name="wardrobe-organization"
        checked={field.value.includes("wardrobe-organization")}
        onChange={(e) => {
          const newValue = e.target.checked
            ? [...field.value, "wardrobe-organization"]
            : field.value.filter((task) => task !== "wardrobe-organization");
          field.onChange(newValue);
        }}
        detailsComponent={<WardrobeOrganization />} // Pass the WardrobeOrganization component here
      />
    </>
 )}
/>

        <button
          type="submit"
          className={`flex items-center mt-4 my-8 justify-center font-medium text-[15px] h-[42px] text-white w-[98%] rounded-[20px] mx-auto ${
            cleaningType && extraTasks ? "bg-secondary" : "bg-fade"
          }`}
        >
          Next
        </button>
      </form>
      {submissionSuccessful && ( //  Conditionally render the success message
        <div className="text-green-500 p-4 bg-white rounded-xl shadow font-medium text-lg mb-4">
          Submission was successful!
        </div>
      )}
    </>
  );
};

export default Task;
