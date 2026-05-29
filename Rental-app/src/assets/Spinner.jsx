export default function Spinner({ size = "md", color = "navy" }) {
    const sizes = {
        sm: "h-4 w-4 border-2",
        md: "h-8 w-8 border-4",
        lg: "h-12 w-12 border-4",
    };

    const colors = {
        navy: "border-navy border-t-transparent",
        blue: "border-brand-blue border-t-transparent",
        white: "border-white border-t-transparent",
    };

    return (
        <div
            className={`${sizes[size]} ${colors[color]} rounded-full animate-spin flex items-center justify-center`}
        />
    );
}