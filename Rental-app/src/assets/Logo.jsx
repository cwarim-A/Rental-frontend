export default function Logo({ size = "md" }) {
    const sizes = {
        sm: "text-lg",
        md: "text-2xl",
        lg: "text-4xl",
    };

    return (
        <div className="flex items-center justify-center gap-2">
            {/* Icon box */}
            <div className="bg-navy p-2 rounded-xl">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                </svg>
            </div>

            {/* App name */}
            <span className={`${sizes[size]} font-serif font-bold text-navy`}>
                Rent<span className="text-brand-blue">ly</span>
            </span>
        </div>
    );
}