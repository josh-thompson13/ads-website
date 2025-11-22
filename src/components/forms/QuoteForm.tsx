"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const services = [
  "Broadacre spraying (pasture/crops)",
  "Spot/target weed spraying",
  "Granular spreading / seeding",
  "Fire ant eradication",
  "Other / general enquiry",
] as const;

const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(8, "Enter a valid phone number"),
  service: z.enum(services, {
    required_error: "Please select a service",
  }),
  sprayArea: z
    .string()
    .trim()
    .min(1, "Please add the approximate area in hectares or acres"),
  location: z.string().trim().min(2, "Enter suburb or area name"),
  sprayRate: z.string().trim().optional(),
  message: z.string().optional(),
  botcheck: z.string().optional(),
  accept: z.boolean().refine((value) => value === true, {
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

  //

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
        spray_area: data.sprayArea,
        location: data.location,
        spray_rate_lha: data.sprayRate?.trim() || "Not specified",
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
        <div
          role="status"
          className="rounded-xl bg-green-50 text-green-900 border border-green-200 p-3"
        >
          Thanks! Your request has been sent. We’ll be in touch shortly.
        </div>
      )}
      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl bg-red-50 text-red-900 border border-red-200 p-3"
        >
          Something went wrong. Please email
          josh@australiandronesolutions.com.au
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            aria-invalid={!!errors.name}
            {...register("name")}
            placeholder="Your name"
          />
          {errors.name && (
            <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            aria-invalid={!!errors.phone}
            {...register("phone")}
            placeholder="0406 371 630"
          />
          {errors.phone && (
            <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            aria-invalid={!!errors.email}
            {...register("email")}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="location">Property location (suburb/area)</Label>
          <Input
            id="location"
            aria-invalid={!!errors.location}
            {...register("location")}
            placeholder="Suburb or area"
          />
          {errors.location && (
            <p className="text-sm text-red-600 mt-1">
              {errors.location.message}
            </p>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="sprayArea">Approximate area to spray</Label>
          <Input
            id="sprayArea"
            aria-invalid={!!errors.sprayArea}
            {...register("sprayArea")}
            placeholder="e.g. 20 ha or 50 acres"
          />
          {errors.sprayArea && (
            <p className="text-sm text-red-600 mt-1">
              {errors.sprayArea.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="sprayRate">
            Spray rate you'd like applied (L/ha)
          </Label>
          <Input
            id="sprayRate"
            aria-invalid={!!errors.sprayRate}
            {...register("sprayRate")}
            placeholder="Optional – leave blank if unsure"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="service">Service</Label>
        <Select
          id="service"
          aria-invalid={!!errors.service}
          defaultValue=""
          {...register("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
        {errors.service && (
          <p className="text-sm text-red-600 mt-1">{errors.service.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about the target weeds/blocks, chemicals, access and timing needs"
        />
      </div>
      <div className="hidden">
        <Label htmlFor="botcheck">Leave this empty</Label>
        <Input
          id="botcheck"
          tabIndex={-1}
          aria-hidden
          {...register("botcheck")}
        />
      </div>
      <div className="flex items-start gap-2">
        <input
          id="accept"
          type="checkbox"
          {...register("accept")}
          className="mt-1"
        />
        <Label htmlFor="accept" className="m-0">
          I agree to the terms and acknowledge the privacy notice.
        </Label>
      </div>
      {errors.accept && (
        <p className="text-sm text-red-600">
          {errors.accept.message as string}
        </p>
      )}
      <div className="flex gap-3">
        <Button
          type="submit"
          disabled={isSubmitting || !accessKey}
          aria-disabled={isSubmitting || !accessKey}
        >
          {isSubmitting ? "Sending…" : "Request a Callback"}
        </Button>
        {!accessKey && (
          <span className="text-sm text-neutral-500">
            Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to enable form
          </span>
        )}
      </div>
    </form>
  );
}
