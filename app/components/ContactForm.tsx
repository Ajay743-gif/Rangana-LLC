"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "../actions/contact";

const initialState: ContactFormState = { status: "idle", message: "" };

const inputClass =
  "w-full border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none focus:border-navy focus-visible:ring-2 focus-visible:ring-navy/50 transition-colors";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  return (
    <div>
      <h3 className="text-2xl text-navy mb-6" style={{ fontFamily: "var(--font-cormorant), serif", fontWeight: 600 }}>
        Send an enquiry
      </h3>

      {state.status === "success" && (
        <div className="mb-4 p-3 bg-gold/10 border border-gold/40 text-gold-deep text-sm">
          {state.message}
        </div>
      )}
      {state.status === "error" && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 text-sm">
          {state.message}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-4">
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="flex-1">
            <label htmlFor="firstName" className="block text-sm font-medium mb-1 text-ink">
              First name <span className="text-gold-deep">*</span>
            </label>
            <input id="firstName" name="firstName" type="text" placeholder="Hammad" required className={inputClass} />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-sm font-medium mb-1 text-ink">
              Last name <span className="text-gold-deep">*</span>
            </label>
            <input id="lastName" name="lastName" type="text" placeholder="Al Balushi" required className={inputClass} />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-ink">
            Email
          </label>
          <input id="email" name="email" type="email" placeholder="name@company.com" className={inputClass} />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 text-ink">
            How can we help? <span className="text-gold-deep">*</span>
          </label>
          <textarea id="message" name="message" rows={4} placeholder="Tell us briefly what you need" required className={`${inputClass} resize-none`} />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="self-start px-8 py-3.5 bg-navy text-paper text-sm font-semibold hover:bg-navy-deep transition-colors disabled:opacity-60"
        >
          {isPending ? "Sending…" : "Send enquiry"}
        </button>
      </form>
    </div>
  );
}
