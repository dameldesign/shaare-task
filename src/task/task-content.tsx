const Cleaning = () => {
  const bedroom = [
    { content: "Dusting of furniture and surfaces" },
    { content: "Making bed" },
    { content: "Sweeping and/or mopping floors" },
    { content: "Dusting and wiping of skirtings" },
    {
      content:
        "Folding or hanging clothes on the bed or around the bedroom (This does not include wardrobe or closet reorganization)",
    },
    { content: "Cleaning Mirrors" },
    { content: "Cleaning out cobwebs" },
  ];
  const bathroom = [
    { content: "Cleaning of shower, bath, and sinks" },
    { content: "Toilet clean" },
    { content: "Wiping of counters and taps" },
    { content: "Wiping of walls and mirrors" },
    { content: "Wiping outside of cupboards and cabinets" },
    { content: "Folding or hanging of clean towels" },
    { content: "Emptying bins and cleaning bin area" },
    { content: "Mopping floors" },
    { content: "Cleaning out cobwebs" },
  ];
  const livingRoom = [
    { content: "The dusting of furniture and surfaces" },
    { content: "Mopping and sweeping of floors" },
    { content: "Dusting and wiping of skirtings" },
    { content: "Dusting and wiping of electronics, pictures frames etc." },
    { content: "Dusting and wiping of light switches and other fixtures" },
    { content: "Cleaning Mirrors" },
    { content: "Cleaning out cobwebs" },
   ];

   const kitchen = [
    { content: "Wiping of surfaces, sinks, and appliances" },
    { content: "Washing of dishes" },
    { content: "Wiping outside of cupboards and fridge" },
    { content: "Cleaning the Stove top and the walls behind the stove" },
    { content: "Cleaning inside and outside of the microwave" },
    { content: "Wiping of walls" },
    { content: "Emptying bins and cleaning bin area" },
    { content: "Mopping floors" },
    { content: "Cleaning out cobwebs" },
   ];

  return (
    <div className="flex flex-col gap-2 items-start text-primaryStrong w-full">
      <h1 className="text-sm text-primaryStrong font-medium">BEDROOMS</h1>
      <div>
        {/* Map the array to render the <div> structure for each item */}
        {bedroom.map((bedroom, index) => (
          <div
            key={index}
            className="flex flex-row gap-2.5 item-start justify-center"
          >
            <span className="h-1 w-1 rounded-full mt-2 ml-1 bg-primaryStrong"></span>
            <p className="text-sm text-left font-[300]  w-[95%]">
              {bedroom.content}
            </p>
          </div>
        ))}
      </div>
      <h1 className="text-sm text-primaryStrong font-medium">BATHROOMS</h1>
      <div>
        {/* Map the array to render the <div> structure for each item */}
        {bathroom.map((bathroom, index) => (
          <div
            key={index}
            className="flex flex-row gap-2.5 item-start justify-center"
          >
            <span className="h-1 w-1 rounded-full mt-2 ml-1 bg-primaryStrong"></span>
            <p className="text-sm text-left font-[300]  w-[95%]">
              {bathroom.content}
            </p>
          </div>
        ))}
      </div>
      <h1 className="text-sm text-primaryStrong font-medium">LIVING ROOMS</h1>
      <div>
        {/* Map the array to render the <div> structure for each item */}
        {livingRoom.map((livingRoom, index) => (
          <div
            key={index}
            className="flex flex-row gap-2.5 item-start justify-center"
          >
            <span className="h-1 w-1 rounded-full mt-2 ml-1 bg-primaryStrong"></span>
            <p className="text-sm text-left font-[300]  w-[95%]">
              {livingRoom.content}
            </p>
          </div>
        ))}
      </div>
      <h1 className="text-sm text-primaryStrong font-medium">KITCHEN</h1>
      <div>
        {/* Map the array to render the <div> structure for each item */}
        {kitchen.map((kitchen, index) => (
          <div
            key={index}
            className="flex flex-row gap-2.5 item-start justify-center"
          >
            <span className="h-1 w-1 rounded-full mt-2 ml-1 bg-primaryStrong"></span>
            <p className="text-sm text-left font-[300]  w-[95%]">
              {kitchen.content}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-row gap-2.5 item-start justify-center">
        <div className="flex flex-col items-start w-[90%] justify-center">
          <h1 className="text-sm font-[300]">
            Cleaning of Staircases within the home is also covered.
          </h1>
          <p className="text-sm font-[300]">
            Homes significantly larger than other homes of the same size and
            bookings that run longer than the estimated booking hours might
            attract additional charges which will be duly communicated.
          </p>
        </div>
      </div>
    </div>
  );
};

const Ironing = () => {
  return (
    <div className="flex flex-col gap-4 h-full items-start text-primaryStrong overflow-y-scroll w-full">
      <h1 className="text-sm font-[300]">
        Our pricing covers 1 load of items to be ironed. This typically takes up
        to 2 hours of work per load.
      </h1>
      <div className="flex flex-row gap-2.5 item-start justify-center">
        <span className="h-1 w-1 rounded-full mt-2 ml-3 bg-primaryStrong"></span>
        <div className="flex flex-col items-start justify-center gap-1">
          <h1 className="text-sm font-[300]">1 load:</h1>
          <p className="text-sm font-[300]">
            15 pieces of regular-sized items.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-2.5 item-start justify-center">
        <span className="h-1 w-1 rounded-full mt-2 ml-3 bg-primaryStrong"></span>
        <div className="flex flex-col items-start w-[95%] justify-center ">
          <h1 className="text-sm font-[300]">We are flexible. </h1>
          <p className="text-sm font-[300]">
            Items significantly under or over 1 load will be priced accordingly.
            Kindly contact us for support
          </p>
        </div>
      </div>
    </div>
  );
};

const WardrobeOrganization = () => {
    return (
        <div className="flex flex-col gap-4 h-full items-start text-primaryStrong overflow-y-scroll w-full">
        <h1 className="text-sm font-[300]">
          Our pricing covers 1 load of items to be ironed. This typically takes up
          to 2 hours of work per load.
        </h1>
        <div className="flex flex-row gap-2.5 item-start justify-center">
          <span className="h-1 w-1 rounded-full mt-2 ml-3 bg-primaryStrong"></span>
          <div className="flex flex-col items-start justify-center gap-1">
            <h1 className="text-sm font-[300]">1 load:</h1>
            <p className="text-sm font-[300]">
              15 pieces of regular-sized items.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2.5 item-start justify-center">
          <span className="h-1 w-1 rounded-full mt-2 ml-3 bg-primaryStrong"></span>
          <div className="flex flex-col items-start w-[95%] justify-center ">
            <h1 className="text-sm font-[300]">We are flexible. </h1>
            <p className="text-sm font-[300]">
              Items significantly under or over 1 load will be priced accordingly.
              Kindly contact us for support
            </p>
          </div>
        </div>
      </div>
    );
   };

export { Cleaning, Ironing, WardrobeOrganization };


