"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [inscrit, setInscrit] = useState(false);

  return (
    <section id="newsletter" className="bg-[#C96F34] text-[#F7F4EF] py-16">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold max-w-sm">
          Recevez l&apos;analyse de la semaine, directement dans votre boîte mail.
        </h2>

        {inscrit ? (
          <p className="bg-white text-[#0B1F3A] font-medium px-6 py-4 rounded-sm">
            Merci ! Un e-mail de confirmation arrive à {email}.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setInscrit(true);
            }}
            className="flex w-full md:w-auto rounded-sm overflow-hidden bg-white min-w-[320px]"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse e-mail"
              className="flex-1 px-4 py-3 text-[#2A2E35] outline-none"
            />
            <button
              type="submit"
              className="bg-[#0B1F3A] text-white font-semibold px-6 py-3 hover:brightness-125 transition"
            >
              S&apos;abonner
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
