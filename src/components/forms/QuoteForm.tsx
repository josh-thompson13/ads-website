"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const services = [
  "Weed Spraying",
  "Crop Spraying",
  "Fire Ant Eradication",
  "Seeding & Spreading",
  "Surveying",
  "General Enquiry",
];

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone number"),
  service: z.enum([
    "Weed Spraying",
    "Crop Spraying",
    "Fire Ant Eradication",
    "Seeding & Spreading",
    "Surveying",
    "General Enquiry",
  ], {
    required_error: "Please choose a service",
  }),
  propertySize: z.string().min(1, "Please specify property size (e.g. ha)"),
  location: z.string().min(2, "Enter suburb or postcode"),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
  botcheck: z.string().optional(),
  accept: z
    .boolean({
      required_error: "Please accept the terms and privacy notice.",
      invalid_type_error: "Please accept the terms and privacy notice.",
    })
    .refine((value) => value === true, {
      message: "Please accept the terms and privacy notice.",
    }),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export function QuoteForm({ inline = false }: { inline?: boolean }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({ resolver: zodResolver(quoteSchema) });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  async function onSubmit(data: QuoteFormData) {
    if (!accessKey) {
      setStatus("error");
      return;
    }
    if (data.botcheck) return; // honeypot
    try {
      const payload: Record<string, string> = {
        access_key: accessKey,
        subject: "New Callback Request – ADS",
        name: data.name,
        from_name: data.name,
        from_email: data.email,
        reply_to: data.email,
        email: data.email,
        phone: data.phone,
        service: data.service,
        property_size: data.propertySize,
        location: data.location,
        preferred_date: data.preferredDate?.trim() || "Not specified",
        message: data.message?.trim() || "No additional message provided.",
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      const json = await res.json();
      if (json?.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      {status === "success" && (
        <div role="status" className="rounded-xl bg-green-50 text-green-900 border border-green-200 p-3">
          Thanks! Your request has been sent. We’ll be in touch shortly.
        </div>
      )}
      {status === "error" && (
        <div role="alert" className="rounded-xl bg-red-50 text-red-900 border border-red-200 p-3">
          Something went wrong. Please email hello@australiandronesolutions.com.au
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" aria-invalid={!!errors.name} {...register("name")} placeholder="Your name" />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" aria-invalid={!!errors.email} {...register("email")} placeholder="you@example.com" />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" aria-invalid={!!errors.phone} {...register("phone")} placeholder="04xx xxx xxx" />
          {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="service">Service</Label>
          <Select id="service" aria-invalid={!!errors.service} defaultValue="" {...register("service")}>
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
          {errors.service && <p className="text-sm text-red-600 mt-1">{errors.service.message}</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="propertySize">Property size</Label>
          <Input id="propertySize" aria-invalid={!!errors.propertySize} {...register("propertySize")} placeholder="e.g. 20 ha" />
          {errors.propertySize && <p className="text-sm text-red-600 mt-1">{errors.propertySize.message}</p>}
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" aria-invalid={!!errors.location} {...register("location")} placeholder="Suburb or postcode" />
          {errors.location && <p className="text-sm text-red-600 mt-1">{errors.location.message}</p>}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="preferredDate">Preferred date window</Label>
          <Input id="preferredDate" {...register("preferredDate")} placeholder="e.g. next 2–3 weeks" />
        </div>
        <div className="hidden">
          <Label htmlFor="botcheck">Leave this empty</Label>
          <Input id="botcheck" tabIndex={-1} aria-hidden {...register("botcheck")} />
        </div>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...register("message")} placeholder="Tell us about your site and goals" />
      </div>
      <div className="flex items-start gap-2">
        <input id="accept" type="checkbox" {...register("accept")} className="mt-1" />
        <Label htmlFor="accept" className="m-0">
          I agree to the terms and acknowledge the privacy notice.
        </Label>
      </div>
      {errors.accept && <p className="text-sm text-red-600">{errors.accept.message as string}</p>}
      <div className="flex gap-3">
        <Button type="submit" disabled={isSubmitting || !accessKey} aria-disabled={isSubmitting || !accessKey}>
          {isSubmitting ? "Sending…" : "Request a Callback"}
        </Button>
        {!accessKey && (
          <span className="text-sm text-neutral-500">Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to enable form</span>
        )}
      </div>
    </form>
  );
}
