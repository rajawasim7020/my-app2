// export default function FeedbackForm() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 shadow-[0_12px_30px_#f0eeee]">
//       <div className="w-full max-w-2xl  shadow-lg rounded-xl p-8 bg-amber-50">
        

//         <form className="space-y-5">
//           {/* Name */}
//           <div>
//             <label className="block mb-2 font-semibold">Name</label>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#111111] bg-[#f0eeee] "
//             />
//           </div>

//           {/* Mobile Number */}
//           <div>
//             <label className="block mb-2 font-semibold">Mobile Number</label>
//             <input
//               type="tel"
//               placeholder="Enter mobile number"
//               className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#111111] bg-[#f0eeee] "
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block mb-2 font-semibold">Email</label>
//             <input
//               type="email"
//               placeholder="Enter email address"
//               className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#111111] bg-[#f0eeee]"
//             />
//           </div>

//           {/* Category */}
//           <div>
//             <label className="block mb-2 font-semibold ">Category</label>
//             <select className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#111111] bg-[#f0eeee] cursor-pointer ">
//               <option>Select Category</option>
//               <option>Singup/Login</option>
//               <option>Task</option>
//               <option>Discussion</option>
//               <option>MyGov Content</option>
//               <option>Others</option>
              
//             </select>
//           </div>

//           {/* Feedback */}
//           <div>
//             <label className="block mb-2 font-semibold">
//               Feedback (Max 500 Characters)
//             </label>
//             <textarea
//               maxLength={500}
//               rows={6}
//               placeholder="Write your feedback..."
//               className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#111111] resize-none bg-[#f0eeee]"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//   type="submit"
//   className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition cursor-pointer"
// >
//   Submit Feedback
// </button>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }

    setShowPopup(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 shadow-[0_12px_30px_#f0eeee]">
      <div className="w-full max-w-2xl shadow-lg rounded-xl p-8 bg-amber-50">

        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#111111] bg-[#f0eeee]"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block mb-2 font-semibold">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#111111] bg-[#f0eeee]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#111111] bg-[#f0eeee]"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-semibold">Category</label>
            <select className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#111111] bg-[#f0eeee] cursor-pointer">
              <option>Select Category</option>
              <option>Signup/Login</option>
              <option>Task</option>
              <option>Discussion</option>
              <option>MyGov Content</option>
              <option>Others</option>
            </select>
          </div>

          {/* Feedback */}
          <div>
            <label className="block mb-2 font-semibold">
              Feedback (Max 500 Characters)
            </label>
            <textarea
              maxLength={500}
              rows={6}
              placeholder="Write your feedback..."
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-[#111111] resize-none bg-[#f0eeee]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition cursor-pointer"
          >
            Submit Feedback
          </button>

        </form>

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-[100px] rounded-xl shadow-xl p-8 text-center">

              <div className="text-5xl mb-4">✅</div>

              <h2 className="text-2xl font-bold text-green-600">
                Feedback Submitted
              </h2>

              <p className="mt-4 text-lg">
                Thank You,
                <span className="font-bold text-red-600"> {name}</span>!
              </p>

              <button
                onClick={() => setShowPopup(false)}
                className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
              >
                Close
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
