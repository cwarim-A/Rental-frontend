import { useState } from "react";
import { mockProperties } from "../../data/mockData";
import { FiSearch, FiBookmark, FiMapPin } from "react-icons/fi";

const propertyTypes = ["All", "Flat", "Self-Con", "Duplex"];

export default function Properties() {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState("All");
  const [properties, setProperties] = useState(mockProperties);

  // const toggleSave = (id) => {
  //   setProperties((prev) =>
  //     prev.map((p) => (p.id === id ? { ...p, saved: !p.saved } : p))
  //   );
  // };

  const filtered = properties.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    const matchesType = activeType === "All" || p.type === activeType;
    return matchesSearch && matchesType;
  });

  return (
    <div>
      <h1 className="text-2xl font-serif text-navy mb-1">Properties</h1>
      <p className="text-gray-400 text-sm font-sans mb-6">
        Browse available rental properties.
      </p>

      
      <div className="relative mb-4">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by location or property name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white pl-11 pr-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-brand-blue text-sm font-sans transition"
        />
      </div>

      
      <div className="flex gap-2 mb-8 flex-wrap">
        {propertyTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-2 rounded-full text-sm font-sans transition ${activeType === type
                ? "bg-navy text-white"
                : "bg-white text-gray-500 hover:bg-gray-50"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm font-sans text-gray-400 mb-4">
        {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
      </p>

      {/* Property grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
                />
                <button
                  // onClick={() => toggleSave(property.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition text-white `}
                >
                  <FiBookmark size={16} fill="white" />
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1 text-gray-400 text-xs font-sans mb-2">
                  <FiMapPin size={12} />
                  {property.location}
                </div>
                <h3 className="text-navy font-serif text-lg mb-1">{property.name}</h3>
                <p className="text-gray-400 text-xs font-sans mb-3">
                  {property.bedrooms} bedroom{property.bedrooms > 1 ? "s" : ""} • {property.type}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-brand-blue font-sans font-semibold">
                    ₦{property.price.toLocaleString()}/yr
                  </p>
                  <button className="text-navy text-sm font-sans border border-navy px-3 py-1.5 rounded-lg hover:bg-navy hover:text-white transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
          <p className="text-gray-400 font-sans text-sm">
            No properties match your search. Try adjusting your filters.
          </p>
        </div>
      )}
    </div>
  );
}