"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [sprayingOpen, setSprayingOpen] = useState(false);
  const [seedingOpen, setSeedingOpen] = useState(false);
  const [surveyingOpen, setSurveyingOpen] = useState(false);

  const closeMenus = () => {
    setSprayingOpen(false);
    setSeedingOpen(false);
    setSurveyingOpen(false);
    setOpen(false);
  };

  const sprayingRef = useRef<HTMLDivElement | null>(null);
  const seedingRef = useRef<HTMLDivElement | null>(null);
  const surveyingRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns on outside click; handle Escape
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (open) return; // don't interfere with mobile menu interactions
      const t = e.target as Node;
      if (
        sprayingRef.current &&
        !sprayingRef.current.contains(t) &&
        seedingRef.current &&
        !seedingRef.current.contains(t) &&
        surveyingRef.current &&
        !surveyingRef.current.contains(t)
      ) {
        setSprayingOpen(false);
        setSeedingOpen(false);
        setSurveyingOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (open) setOpen(false);
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
  }, [open]);

  // Ensure mobile menu does not auto-open or persist across breakpoint changes
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1280px)'); // xl breakpoint
    const handleChange = () => setOpen(false);
    mql.addEventListener('change', handleChange);
    // close on mount to avoid accidental open due to hot reload/state carryover
    handleChange();
    return () => mql.removeEventListener('change', handleChange);
  }, []);

  const Chevron = ({ open }: { open: boolean }) => (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      className={`ml-1 h-4 w-4 transition-transform ${
        open ? "rotate-180" : "rotate-0"
      }`}
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
        <Link
          href="/"
          className="flex items-center gap-2 flex-nowrap"
          aria-label="Australian Drone Solutions home"
        >
          <Image
            src="/logo_no_text.png"
            alt="Australian Drone Solutions logo"
            width={32}
            height={32}
            priority
          />
          <span className="font-bold text-lg tracking-tight whitespace-nowrap">
            Australian Drone Solutions
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden xl:flex items-center gap-6 flex-nowrap whitespace-nowrap"
        >
          <Link href="/" className="hover:text-secondary-hover shrink-0">
            Home
          </Link>
          {/* Spraying */}
          <div className="relative" ref={sprayingRef}>
            <button
              type="button"
              className="inline-flex items-center hover:text-secondary-hover shrink-0"
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
                  <li>
                    <Link
                      href="/services/spraying"
                      className="hover:text-secondary-hover font-medium"
                      onClick={closeMenus}
                    >
                      View all Spraying →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/spraying/weed-control"
                      className="hover:text-secondary-hover"
                      onClick={closeMenus}
                    >
                      Weed Control (Herbicide)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/spraying/disease-management"
                      className="hover:text-secondary-hover"
                      onClick={closeMenus}
                    >
                      Disease Management (Fungicide)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/spraying/pest-control"
                      className="hover:text-secondary-hover"
                      onClick={closeMenus}
                    >
                      Pest Control (Insecticide)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/spraying/special-applications"
                      className="hover:text-secondary-hover"
                      onClick={closeMenus}
                    >
                      Special Applications
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Seeding & Spreading */}
          <div className="relative" ref={seedingRef}>
            <button
              type="button"
              className="inline-flex items-center hover:text-secondary-hover shrink-0"
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
                  <li>
                    <Link
                      href="/services/seeding-spreading"
                      className="hover:text-secondary-hover font-medium"
                      onClick={closeMenus}
                    >
                      View all Seeding & Spreading →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/seeding-spreading/pasture-reseeding"
                      className="hover:text-secondary-hover"
                      onClick={closeMenus}
                    >
                      Pasture Reseeding
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/seeding-spreading/revegetation-projects"
                      className="hover:text-secondary-hover"
                      onClick={closeMenus}
                    >
                      Revegetation Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/seeding-spreading/cover-crops"
                      className="hover:text-secondary-hover"
                      onClick={closeMenus}
                    >
                      Cover Crops
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/seeding-spreading/granular-application"
                      className="hover:text-secondary-hover"
                      onClick={closeMenus}
                    >
                      Granular Application
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {/* Surveying & Mapping */}
          <div className="relative" ref={surveyingRef}>
            <button
              type="button"
              className="inline-flex items-center hover:text-secondary-hover shrink-0"
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
                  <li>
                    <Link
                      href="/services/surveying-mapping"
                      className="hover:text-secondary-hover font-medium"
                      onClick={closeMenus}
                    >
                      View all Surveying & Mapping →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/surveying-mapping/farm-mapping"
                      className="hover:text-secondary-hover"
                      onClick={closeMenus}
                    >
                      Farm Mapping
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/surveying-mapping/land-surveys"
                      className="hover:text-secondary-hover"
                      onClick={closeMenus}
                    >
                      Land Surveys
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/surveying-mapping/infrastructure-inspections"
                      className="hover:text-secondary-hover"
                      onClick={closeMenus}
                    >
                      Infrastructure Inspections
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/surveying-mapping/environmental-monitoring"
                      className="hover:text-secondary-hover"
                      onClick={closeMenus}
                    >
                      Environmental Monitoring
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Link href="/service-area" className="hover:text-secondary-hover shrink-0">
            Service Area
          </Link>
        </nav>
        <div className="hidden xl:block">
          <Link href="/contact">
            <Button size="md" variant="primary" aria-label="Contact">
              Contact
            </Button>
          </Link>
        </div>
        <button
          className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-200 hover:bg-neutral-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="xl:hidden border-t border-neutral-200 bg-white shadow-sm">
          <div className="mx-auto max-w-6xl px-4">
            <nav className="py-3">
              <ul className="divide-y divide-neutral-200">
                <li>
                  <Link
                    href="/"
                    className="block py-3 hover:text-secondary-hover"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </Link>
                </li>

                <li className="py-2">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-1.5 font-medium hover:text-secondary-hover"
                    aria-expanded={sprayingOpen}
                    aria-controls="mobile-spraying"
                    onClick={() => {
                      setSprayingOpen((v) => !v);
                      setSeedingOpen(false);
                      setSurveyingOpen(false);
                    }}
                  >
                    <span>Spraying</span>
                    <Chevron open={sprayingOpen} />
                  </button>
                  {sprayingOpen && (
                    <ul id="mobile-spraying" className="mt-2 grid gap-1 pl-1 text-sm text-neutral-700">
                      <li>
                        <Link
                          href="/services/spraying"
                          className="font-medium hover:text-secondary-hover"
                          onClick={() => setOpen(false)}
                        >
                          View all Spraying →
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/spraying/weed-control" className="hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          Weed Control (Herbicide)
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/spraying/disease-management" className="hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          Disease Management (Fungicide)
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/spraying/pest-control" className="hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          Pest Control (Insecticide)
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/spraying/special-applications" className="hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          Special Applications
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="py-2">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-1.5 font-medium hover:text-secondary-hover"
                    aria-expanded={seedingOpen}
                    aria-controls="mobile-seeding"
                    onClick={() => {
                      setSeedingOpen((v) => !v);
                      setSprayingOpen(false);
                      setSurveyingOpen(false);
                    }}
                  >
                    <span>Seeding & Spreading</span>
                    <Chevron open={seedingOpen} />
                  </button>
                  {seedingOpen && (
                    <ul id="mobile-seeding" className="mt-2 grid gap-1 pl-1 text-sm text-neutral-700">
                      <li>
                        <Link href="/services/seeding-spreading" className="font-medium hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          View all Seeding & Spreading →
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/seeding-spreading/pasture-reseeding" className="hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          Pasture Reseeding
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/seeding-spreading/revegetation-projects" className="hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          Revegetation Projects
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/seeding-spreading/cover-crops" className="hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          Cover Crops
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/seeding-spreading/granular-application" className="hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          Granular Application
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="py-2">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-1.5 font-medium hover:text-secondary-hover"
                    aria-expanded={surveyingOpen}
                    aria-controls="mobile-surveying"
                    onClick={() => {
                      setSurveyingOpen((v) => !v);
                      setSprayingOpen(false);
                      setSeedingOpen(false);
                    }}
                  >
                    <span>Surveying & Mapping</span>
                    <Chevron open={surveyingOpen} />
                  </button>
                  {surveyingOpen && (
                    <ul id="mobile-surveying" className="mt-2 grid gap-1 pl-1 text-sm text-neutral-700">
                      <li>
                        <Link href="/services/surveying-mapping" className="font-medium hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          View all Surveying & Mapping →
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/surveying-mapping/farm-mapping" className="hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          Farm Mapping
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/surveying-mapping/land-surveys" className="hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          Land Surveys
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/surveying-mapping/infrastructure-inspections" className="hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          Infrastructure Inspections
                        </Link>
                      </li>
                      <li>
                        <Link href="/services/surveying-mapping/environmental-monitoring" className="hover:text-secondary-hover" onClick={() => setOpen(false)}>
                          Environmental Monitoring
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link
                    href="/service-area"
                    className="block py-3 hover:text-secondary-hover"
                    onClick={() => setOpen(false)}
                  >
                    Service Area
                  </Link>
                </li>

                <li className="py-3">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    <Button className="w-full">Contact</Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
