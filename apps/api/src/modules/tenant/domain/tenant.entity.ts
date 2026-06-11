export type SportType = "cricket" | "football" | "kabaddi";

export interface Tenant {
  id: string;
  name: string;
  slug: string;
  branding: {
    appName: string;
    logoUrl?: string;
    theme: {
      primary: string;
      secondary: string;
      accent: string;
    };
  };
  enabledSports: SportType[];
  enabledLanguages: string[];
  featureToggles: Record<string, boolean>;
  subscriptionPlan: "FREE" | "PREMIUM" | "PRO" | "ENTERPRISE";
  isActive: boolean;
}
