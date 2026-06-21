

const Bookings = () => {
  return (
    <div>
      <h1 className="text-2xl font-serif text-navy mb-2">Bookings</h1>
      <p className="text-gray-400 text-sm font-sans mb-8">
        Track your reservations and requests.
      </p>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <p className="text-gray-400 text-sm font-sans">
          No bookings yet.
        </p>
      </div>
    </div>
  )
}

export default Bookings