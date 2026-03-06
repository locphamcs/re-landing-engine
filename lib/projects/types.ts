// ─────────────────────────────────────────────────────────────
//  Types for Real-Estate Landing Engine
//  All Vietnamese copy lives in the Project config, never in UI.
// ─────────────────────────────────────────────────────────────

export interface ProjectHighlight {
  /** Optional Lucide icon name, e.g. "Home", "Building2" */
  icon?: string
  label: string
  value: string
}

export interface ProjectAccordionItem {
  label: string
  value: string
}

export interface ProjectAccordionGroup {
  title: string
  items: ProjectAccordionItem[]
}

export interface ProjectUnit {
  type: string
  area: string
  price: string
  pricePerSqm?: string
  available?: number
  total?: number
  badge?: string
}

export interface ProjectAmenity {
  /** Lucide icon name, e.g. "Waves", "Dumbbell" */
  icon: string
  name: string
  description?: string
}

export interface ProjectGalleryImage {
  src: string
  alt: string
  caption?: string
  /** Category key for filtering: "noi-that" | "layout" | "mat-bang". Omit for "all" only. */
  category?: "noi-that" | "layout" | "mat-bang"
}

export interface ProjectZone {
  name: string
  description: string
}

export interface ProjectSEO {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
}

export interface Project {
  // ── identity ──────────────────────────────────────
  slug: string
  brand: string
  name: string
  /** URL to brand/developer logo (optional – fallback monogram shown if absent) */
  logoUrl?: string
  tagline: string
  city: string
  address: string
  legalStatus: string
  bookingMin: string
  hotline: string
  zalo: string
  mapEmbedUrl: string

  // ── hero section ──────────────────────────────────
  hero: {
    image: string
    subtitle: string
    badge?: string
  }

  // ── overview section ──────────────────────────────
  overview: {
    title: string
    description: string
    /** Small pill badges displayed below description */
    badges?: string[]
    /** Spec cards grid (icon + label + value) */
    highlights: ProjectHighlight[]
    /** Location / site image */
    image?: string
    imageCaption?: string
    /** Brochure-style bullet rows (label · value) */
    bullets?: Array<{ label: string; value: string }>
    /** Inline metric chips at the bottom of the overview */
    keyMetrics?: Array<{ value: string; label: string }>
    /** Expandable detail groups */
    accordion?: ProjectAccordionGroup[]
  }

  /** Quick unit-type cards (used in Pricing) */
  unitTypes: ProjectUnit[]

  // ── amenities section ─────────────────────────────
  amenities: {
    title: string
    description: string
    items: ProjectAmenity[]
  }

  // ── master plan section ───────────────────────────
  masterPlan: {
    title: string
    description: string
    image?: string
    zones: ProjectZone[]
  }

  // ── gallery section ───────────────────────────────
  gallery: {
    title: string
    images: ProjectGalleryImage[]
  }

  // ── pricing section ───────────────────────────────
  pricing: {
    title: string
    description: string
    units: ProjectUnit[]
    note: string
  }

  // ── contact section ───────────────────────────────
  contact: {
    title: string
    description: string
    developerName: string
    developerAddress: string
    formFields: {
      fullNameLabel: string
      phoneLabel: string
      needLabel: string
      needOptions: string[]
      submitLabel: string
      successMessage: string
    }
  }

  // ── seo ───────────────────────────────────────────
  seo: ProjectSEO

  // ── location section (optional) ───────────────────
  /** Location/connectivity key visual + connectivity list. If omitted, section uses address + mapEmbedUrl only. */
  location?: {
    /** Full-width panorama image path (e.g. /projects/.../location-panorama.jpg) */
    panoramaImage?: string
    /** Key visual heading, e.g. "VỊ TRÍ & KẾT NỐI GIAO THÔNG" */
    heading?: string
    /** Short intro for key visual (1–2 sentences). */
    intro?: string
    /** Brochure-style description paragraph(s) on key visual. */
    description?: string
    /** List: place name — distance in km */
    connectivity?: Array<{ name: string; km: string }>
    /** Optional travel time list (label — minutes). */
    travelTime?: Array<{ label: string; value: string }>
  }
}
