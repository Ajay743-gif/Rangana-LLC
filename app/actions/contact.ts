"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const firstName = formData.get("firstName")?.toString().trim();
  const lastName = formData.get("lastName")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!firstName || !lastName || !message) {
    return { status: "error", message: "Please fill in all required fields." };
  }

  // Log submission — wire up email/CRM here when ready
  console.log("Contact form submission:", { firstName, lastName, email, message });

  return { status: "success", message: "The form has been submitted successfully!" };
}
