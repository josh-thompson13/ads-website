"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [sprayingOpen, setSprayingOpen] = useState(false);
  const [seedingOpen, setSeedingOpen] = useState(false);
  const [surveyingOpen, setSurveyingOpen] = useState(false);

  const sprayingRef = useRef<HTMLDivElement | null>(null);
  const seedingRef = useRef<HTMLDivElement | null>(null);
  const surveyingRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns on outside click or Escape
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (
        sprayingRef.current && !sprayingRef.current.contains(t) &&
        seedingRef.current && !seedingRef.current.contains(t) &&
        surveyingRef.current && !surveyingRef.current.contains(t)
      ) {
        setSprayingOpen(false);
        setSeedingOpen(false);
        setSurveyingOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSprayingOpen(false);
        setSeedingOpen(false);
        setSurveyingOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const Chevron = ({ open }: { open: boolean }) => (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={`ml-1 h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
    </svg>
  );
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Australian Drone Solutions home">
          <span className="h-8 w-8 rounded-md bg-primary inline-block" aria-hidden />
          <span className="font-bold text-lg tracking-tight">Australian Drone Solutions</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-secondary-hover">Home</Link>
          {/* Spraying */}
          <div className="relative" ref={sprayingRef}>
            <button
              type="button"
              className="inline-flex items-center hover:text-secondary-hover"
              aria-haspopup="menu"
              aria-expanded={sprayingOpen}
              onClick={() => {
                setSprayingOpen((v) => !v);
                setSeedingOpen(false);
                setSurveyingOpen(false);
              }}
            >
              Spraying <Chevron open={sprayingOpen} />
            </button>
            {sprayingOpen && (
              <div className="absolute left-0 mt-2 bg-white border border-neutral-200 rounded-xl shadow p-3 w-72">
                <ul className="space-y-2">
                  <li><Link href="/services/spraying" className="hover:text-secondary-hover font-medium">View all Spraying →</Link></li>
                  <li><Link href="/services/spraying/weed-control" className="hover:text-secondary-hover">Weed Control (Herbicide)</Link></li>
                  <li><Link href="/services/spraying/disease-management" className="hover:text-secondary-hover">Disease Management (Fungicide)</Link></li>
                  <li><Link href="/services/spraying/pest-control" className="hover:text-secondary-hover">Pest Control (Insecticide)</Link></li>
                  <li><Link href="/services/spraying/special-applications" className="hover:text-secondary-hover">Special Applications</Link></li>
                </ul>
              </div>
            )}
          </div>
          {/* Seeding & Spreading */}
          <div className="relative" ref={seedingRef}>
            <button
              type="button"
              className="inline-flex items-center hover:text-secondary-hover"
              aria-haspopup="menu"
              aria-expanded={seedingOpen}
              onClick={() => {
                setSeedingOpen((v) => !v);
                setSprayingOpen(false);
                setSurveyingOpen(false);
              }}
            >
              Seeding & Spreading <Chevron open={seedingOpen} />
            </button>
            {seedingOpen && (
              <div className="absolute left-0 mt-2 bg-white border border-neutral-200 rounded-xl shadow p-3 w-80">
                <ul className="space-y-2">
                  <li><Link href="/services/seeding-spreading" className="hover:text-secondary-hover font-medium">View all Seeding & Spreading →</Link></li>
                  <li><Link href="/services/seeding-spreading/pasture-reseeding" className="hover:text-secondary-hover">Pasture Reseeding</Link></li>
                  <li><Link href="/services/seeding-spreading/revegetation-projects" className="hover:text-secondary-hover">Revegetation Projects</Link></li>
                  <li><Link href="/services/seeding-spreading/cover-crops" className="hover:text-secondary-hover">Cover Crops</Link></li>
                  <li><Link href="/services/seeding-spreading/granular-application" className="hover:text-secondary-hover">Granular Application</Link></li>
                </ul>
              </div>
            )}
          </div>
          {/* Surveying & Mapping */}
          <div className="relative" ref={surveyingRef}>
            <button
              type="button"
              className="inline-flex items-center hover:text-secondary-hover"
              aria-haspopup="menu"
              aria-expanded={surveyingOpen}
              onClick={() => {
                setSurveyingOpen((v) => !v);
                setSprayingOpen(false);
                setSeedingOpen(false);
              }}
            >
              Surveying & Mapping <Chevron open={surveyingOpen} />
            </button>
            {surveyingOpen && (
              <div className="absolute left-0 mt-2 bg-white border border-neutral-200 rounded-xl shadow p-3 w-80">
                <ul className="space-y-2">
                  <li><Link href="/services/surveying-mapping" className="hover:text-secondary-hover font-medium">View all Surveying & Mapping →</Link></li>
                  <li><Link href="/services/surveying-mapping/farm-mapping" className="hover:text-secondary-hover">Farm Mapping</Link></li>
                  <li><Link href="/services/surveying-mapping/land-surveys" className="hover:text-secondary-hover">Land Surveys</Link></li>
                  <li><Link href="/services/surveying-mapping/infrastructure-inspections" className="hover:text-secondary-hover">Infrastructure Inspections</Link></li>
                  <li><Link href="/services/surveying-mapping/environmental-monitoring" className="hover:text-secondary-hover">Environmental Monitoring</Link></li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/service-area" className="hover:text-secondary-hover">Service Area</Link>
          <Link href="/contact" className="hover:text-secondary-hover">Contact</Link>
        </nav>
        <div className="hidden md:block">
          <Link href="/contact">
            <Button size="md" variant="primary" aria-label="Get a Quote">Get a Quote</Button>
          </Link>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-200"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="h-0.5 w-5 bg-current mb-1.5" />
          <div className="h-0.5 w-5 bg-current mb-1.5" />
          <div className="h-0.5 w-5 bg-current" />
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-neutral-200">
          <div className="mx-auto max-w-6xl px-4 py-4 grid gap-3">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            {/* Spraying */}
            <Link href="/services/spraying" onClick={() => setOpen(false)}>Spraying</Link>
            <Link href="/services/spraying/weed-control" onClick={() => setOpen(false)} className="pl-3 text-sm">Weed Control (Herbicide)</Link>
            <Link href="/services/spraying/disease-management" onClick={() => setOpen(false)} className="pl-3 text-sm">Disease Management (Fungicide)</Link>
            <Link href="/services/spraying/pest-control" onClick={() => setOpen(false)} className="pl-3 text-sm">Pest Control (Insecticide)</Link>
            <Link href="/services/spraying/special-applications" onClick={() => setOpen(false)} className="pl-3 text-sm">Special Applications</Link>
            {/* Seeding & Spreading */}
            <Link href="/services/seeding-spreading" onClick={() => setOpen(false)}>Seeding & Spreading</Link>
            <Link href="/services/seeding-spreading/pasture-reseeding" onClick={() => setOpen(false)} className="pl-3 text-sm">Pasture Reseeding</Link>
            <Link href="/services/seeding-spreading/revegetation-projects" onClick={() => setOpen(false)} className="pl-3 text-sm">Revegetation Projects</Link>
            <Link href="/services/seeding-spreading/cover-crops" onClick={() => setOpen(false)} className="pl-3 text-sm">Cover Crops</Link>
            <Link href="/services/seeding-spreading/granular-application" onClick={() => setOpen(false)} className="pl-3 text-sm">Granular Application</Link>
            {/* Surveying & Mapping */}
            <Link href="/services/surveying-mapping" onClick={() => setOpen(false)}>Surveying & Mapping</Link>
            <Link href="/services/surveying-mapping/farm-mapping" onClick={() => setOpen(false)} className="pl-3 text-sm">Farm Mapping</Link>
            <Link href="/services/surveying-mapping/land-surveys" onClick={() => setOpen(false)} className="pl-3 text-sm">Land Surveys</Link>
            <Link href="/services/surveying-mapping/infrastructure-inspections" onClick={() => setOpen(false)} className="pl-3 text-sm">Infrastructure Inspections</Link>
            <Link href="/services/surveying-mapping/environmental-monitoring" onClick={() => setOpen(false)} className="pl-3 text-sm">Environmental Monitoring</Link>
              <Link href="/service-area" onClick={() => setOpen(false)}>Service Area</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full">Get a Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
