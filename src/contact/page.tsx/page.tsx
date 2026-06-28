"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex h-screen items-center justify-center">

      <button
        onClick={() => setOpen(true)}
        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
      >
        Contact Us
      </button>

      <ContactModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />

    </main>
  );
}