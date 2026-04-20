export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface LandingPage extends CosmicObject {
  type: 'landing-page';
  metadata: {
    hero_headline?: string;
    hero_subheadline?: string;
    hero_background_image?: {
      url: string;
      imgix_url: string;
    };
    primary_cta_text?: string;
    primary_cta_url?: string;
    secondary_cta_text?: string;
    secondary_cta_url?: string;
    features_section_title?: string;
    features_section_subtitle?: string;
    testimonials_section_title?: string;
    testimonials_section_subtitle?: string;
    footer_tagline?: string;
    seo_meta_title?: string;
    seo_meta_description?: string;
  };
}

export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    feature_title?: string;
    feature_description?: string;
    icon?: string;
    feature_image?: {
      url: string;
      imgix_url: string;
    };
    display_order?: number;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    customer_name?: string;
    role?: string;
    company?: string;
    quote?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    display_order?: number;
  };
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}