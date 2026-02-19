import { Link } from "react-router-dom";

const RegistrationClosed = () => {
    return (
        <div className="flex items-center justify-center min-h-[70vh] px-4">
            <div className="relative w-full max-w-xl text-center p-10 rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl shadow-2xl">
                {/* Decorative glow */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-green-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-10 h-10 text-red-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                    Online Registration has been{" "}
                    <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                        Closed
                    </span>
                </h1>

                {/* Divider */}
                <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />

                {/* Message */}
                <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                    On Spot Venue Registration is{" "}
                    <span className="font-bold text-green-400">available soon - 20.2.2026</span>
                </p>

                {/* Back button */}
                <Link
                    to="/event/tech"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                    </svg>
                    Back to Events
                </Link>
            </div>
        </div>
    );
};

export default RegistrationClosed;
