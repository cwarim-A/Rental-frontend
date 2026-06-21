
import { mockActiveBooking, mockRecentProperties, mockActivity, mockUser } from './../../data/mockData';
const stats = [
  { label: "Saved Properties", value: "12" },
  { label: "Active Bookings", value: "3" },
  { label: "Pending Requests", value: "5" },
  { label: "Viewed Recently", value: "24" },
];

const Overview = () => {
  return (
    // <div>
    //   <h1 className="text-2xl font-serif text-navy mb-2">Overview</h1>
    //   <p className="text-gray-400 text-sm font-sans mb-8">
    //     Welcome back! Here's what's happening.
    //   </p>

    //   {/* Stat cards */}
    //   <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
    //     {stats.map(({ label, value }) => (
    //       <div key={label} className="bg-white rounded-2xl p-6 shadow-sm">
    //         <p className="text-gray-400 text-xs font-sans uppercase tracking-wider mb-2">
    //           {label}
    //         </p>
    //         <p className="text-3xl font-serif text-navy">{value}</p>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="bg-navy rounded-2xl p-6 mb-10 flex items-center gap-6 overflow-hidden">
    //     <img
    //       src={mockActiveBooking.image}
    //       alt={mockActiveBooking.propertyName}
    //       className="w-24 h-24 rounded-xl object-cover hidden sm:block"
    //     />
    //     <div className="flex-1">
    //       <span className="bg-brand-blue/20 text-brand-blue text-xs font-sans px-3 py-1 rounded-full">
    //         {mockActiveBooking.status}
    //       </span>
    //       <h3 className="text-white font-serif text-lg mt-2">
    //         {mockActiveBooking.propertyName}
    //       </h3>
    //       <p className="text-white/50 text-sm font-sans mt-1">
    //         {mockActiveBooking.rentAmount} • Next payment: {mockActiveBooking.nextPaymentDue}
    //       </p>
    //     </div>
    //     <button className="bg-white text-navy text-sm font-sans px-4 py-2 rounded-xl hover:bg-gray-100 transition whitespace-nowrap">
    //       View Details
    //     </button>
    //   </div>


    //   {/* Two column layout */}
    //   <div className="grid lg:grid-cols-3 gap-6">

    //     {/* Recently viewed */}
    //     <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
    //       <h2 className="text-base font-serif text-navy mb-4">Recently Viewed</h2>
    //       <div className="grid sm:grid-cols-3 gap-4">
    //         {mockRecentProperties.map((property) => (
    //           <div key={property.id} className="group cursor-pointer">
    //             <img
    //               src={property.image}
    //               alt={property.name}
    //               className="w-full h-28 object-cover rounded-xl mb-2 group-hover:opacity-90 transition"
    //             />
    //             <p className="text-sm font-sans text-navy font-medium truncate">
    //               {property.name}
    //             </p>
    //             <p className="text-xs font-sans text-brand-blue">{property.price}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     </div>


    //   <div className="bg-white rounded-2xl p-6 shadow-sm">
    //     <h2 className="text-base font-serif text-navy mb-4">Recent Activity</h2>
    //     <div className="flex flex-col gap-4">
    //       {mockActivity.map((activity) => (
    //         <div key={activity.id} className="border-l-2 border-brand-blue pl-3">
    //           <p className="text-sm font-sans text-navy">{activity.text}</p>
    //           <p className="text-xs font-sans text-gray-400 mt-1">{activity.time}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    // </div>
    <div>
      {/* Welcome header */}
      <h1 className="text-2xl font-serif text-navy mb-1">
        Welcome back, {mockUser.firstName}
      </h1>
      <p className="text-gray-400 text-sm font-sans mb-8">
        Here's what's happening with your rentals.
      </p>

      {/* Stat cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
        {stats.map(({ label, value, icon }) => (
          <div key={label} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-gray-400 text-xs font-sans uppercase tracking-wider">
                {label}
              </p>
              <span className="text-brand-blue text-lg">{icon}</span>
            </div>
            <p className="text-3xl font-serif text-navy">{value}</p>
          </div>
        ))}
      </div>

      {/* Active booking highlight */}
      <div className="bg-navy rounded-2xl p-6 mb-10 flex items-center gap-6 overflow-hidden">
        <img
          src={mockActiveBooking.image}
          alt={mockActiveBooking.propertyName}
          className="w-24 h-24 rounded-xl object-cover hidden sm:block"
        />
        <div className="flex-1">
          <span className="bg-brand-blue/20 text-brand-blue text-xs font-sans px-3 py-1 rounded-full">
            {mockActiveBooking.status}
          </span>
          <h3 className="text-white font-serif text-lg mt-2">
            {mockActiveBooking.propertyName}
          </h3>
          <p className="text-white/50 text-sm font-sans mt-1">
            {mockActiveBooking.rentAmount} • Next payment: {mockActiveBooking.nextPaymentDue}
          </p>
        </div>
        <button className="bg-white text-navy text-sm font-sans px-4 py-2 rounded-xl hover:bg-gray-100 transition whitespace-nowrap">
          View Details
        </button>
      </div>

      {/* Two column layout */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Recently viewed */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-base font-serif text-navy mb-4">Recently Viewed</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {mockRecentProperties.map((property) => (
              <div key={property.id} className="group cursor-pointer">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-28 object-cover rounded-xl mb-2 group-hover:opacity-90 transition"
                />
                <p className="text-sm font-sans text-navy font-medium truncate">
                  {property.name}
                </p>
                <p className="text-xs font-sans text-brand-blue">{property.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-base font-serif text-navy mb-4">Recent Activity</h2>
          <div className="flex flex-col gap-4">
            {mockActivity.map((activity) => (
              <div key={activity.id} className="border-l-2 border-brand-blue pl-3">
                <p className="text-sm font-sans text-navy">{activity.text}</p>
                <p className="text-xs font-sans text-gray-400 mt-1">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Overview