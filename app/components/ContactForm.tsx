"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "../actions/contact";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  return (
    <div>
      <h3 className="text-2xl mb-6" style={{ fontFamily: "var(--font-yanone), sans-serif" }}>
        GET IN TOUCH
      </h3>

      {state.status === "success" && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded text-sm">
          {state.message}
        </div>
      )}
      {state.status === "error" && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded text-sm">
          {state.message}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-4">
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="flex-1">
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Hammad"
              required
              className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#46237a]"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="M."
              required
              className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#46237a]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Please enter your email here"
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#46237a]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Enter your message"
            required
            className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#46237a] resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="self-start px-10 py-4 bg-[#673da6] text-white text-sm font-medium hover:bg-[#46237a] transition-colors disabled:opacity-60"
        >
          {isPending ? "Submitting…" : "Submit"}
        </button>
      </form>
    </div>
  );
}
