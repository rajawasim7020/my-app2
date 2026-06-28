"use client";
export default function Popup({ isOpen, name, onClose }: { isOpen?: boolean, name: string, onClose: () => {} }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-xl shadow-xl text-center w-96">

                <h2 className="text-2xl font-bold text-green-600">
                    Feedback Submitted ✅
                </h2>

                <p className="mt-4 text-lg">
                    Thank You, <span className="font-bold">{name}</span>!
                </p>

                <button
                    onClick={onClose}
                    className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg"
                >
                    Close
                </button>

            </div>
        </div>
    );
}