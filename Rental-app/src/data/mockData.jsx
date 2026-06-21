export const mockUser = {
    firstName: "Akolade",
    lastName: "Doe",
};

export const mockStats = {
    savedProperties: 12,
    activeBookings: 1,
    pendingRequests: 3,
    viewedRecently: 24,
};

export const mockActiveBooking = {
    id: "bk_001",
    propertyName: "2 Bedroom Flat, Lekki Phase 1",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
    rentAmount: "₦1,800,000",
    status: "Active",
    nextPaymentDue: "July 1, 2026",
};

export const mockRecentProperties = [
    {
        id: 1,
        name: "Self-Con, Yaba",
        price: "₦450,000/yr",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=300",
    },
    {
        id: 2,
        name: "3 Bedroom Duplex, Ikeja",
        price: "₦2,200,000/yr",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300",
    },
    {
        id: 3,
        name: "Mini Flat, Surulere",
        price: "₦650,000/yr",
        image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=300",
    },
];

export const mockActivity = [
    { id: 1, text: "Your booking for Lekki Phase 1 was confirmed", time: "2 hours ago" },
    { id: 2, text: "New message from landlord — Yaba listing", time: "1 day ago" },
    { id: 3, text: "Rent payment due in 14 days", time: "2 days ago" },
];

export const mockProperties = [
    {
        id: 1,
        name: "2 Bedroom Flat",
        location: "Lekki Phase 1, Lagos",
        price: 1800000,
        type: "Flat",
        bedrooms: 2,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
        saved: false,
    },
    {
        id: 2,
        name: "Self-Contained Studio",
        location: "Yaba, Lagos",
        price: 450000,
        type: "Self-Con",
        bedrooms: 1,
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400",
        saved: true,
    },
    {
        id: 3,
        name: "3 Bedroom Duplex",
        location: "Ikeja GRA, Lagos",
        price: 2200000,
        type: "Duplex",
        bedrooms: 3,
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
        saved: false,
    },
    {
        id: 4,
        name: "Mini Flat",
        location: "Surulere, Lagos",
        price: 650000,
        type: "Flat",
        bedrooms: 1,
        image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=400",
        saved: false,
    },
    {
        id: 5,
        name: "4 Bedroom Detached House",
        location: "Ajah, Lagos",
        price: 3500000,
        type: "Duplex",
        bedrooms: 4,
        image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=400",
        saved: false,
    },
    {
        id: 6,
        name: "1 Bedroom Apartment",
        location: "Gbagada, Lagos",
        price: 900000,
        type: "Flat",
        bedrooms: 1,
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400",
        saved: true,
    },
];