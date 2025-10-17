
export interface SiteBundle {
  site: Site;
  sitemap: SitemapEntry[];
  navigation: Navigation;
  pages: Pages;
  components: Components;
  interactions: Interactions;
  styles: Styles;
  cms: Cms;
  seo: Seo;
  edit_instructions: string;
}

export interface Site {
  name: string;
  brand_line: string;
  locale: string;
}

export interface SitemapEntry {
  path: string;
  title: string;
}

export interface Navigation {
  top_nav: string[];
  sticky: boolean;
  cta: Cta;
}

export interface Cta {
  label: string;
  href: string;
}

export interface Pages {
  home: HomePageContent;
  projects: ProjectsPageContent;
  project_detail_template: ProjectDetailTemplate;
  about: AboutPageContent;
  process: ProcessPageContent;
  blog: BlogPageContent;
  contact: ContactPageContent;
}

export interface HomePageContent {
  hero: Hero;
  highlights: Highlight[];
  teasers_from_projects: number;
}

export interface Hero {
  title: string;
  subtitle: string;
  primary_cta: Cta;
  secondary_cta: Cta;
}

export interface Highlight {
  metric: string;
  label: string;
}

export interface ProjectsPageContent {
  title: string;
  intro: string;
  filters: {
    show_tag_filters: boolean;
    show_search: boolean;
    page_size: number;
  };
}

export interface ProjectDetailTemplate {
  sections: string[];
  share_cta: {
    label: string;
    networks: string[];
  };
}

export interface AboutPageContent {
  headline: string;
  summary: string;
  panels: Panel[];
}

export interface Panel {
  title: string;
  list_from?: string;
  content_from?: string;
}

export interface ProcessPageContent {
  headline: string;
  steps: Step[];
  faq: Faq[];
}

export interface Step {
  title: string;
  desc: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface BlogPageContent {
  title: string;
  intro: string;
  list_from: string;
  pagination: {
    page_size: number;
  };
}

export interface ContactPageContent {
  headline: string;
  subtext: string;
  methods: Method[];
  calendar_cta: Cta;
}

export interface Method {
  type: string;
  label: string;
  value_from: string;
}

export interface Components {
  [key: string]: {
    [key: string]: any;
  };
}

export interface Interactions {
  [key: string]: any;
}

export interface Styles {
  palette: { [key: string]: string };
  typography: { [key: string]: any };
  layout: { [key: string]: any };
}

export interface Cms {
  profile: Profile;
  skills: string[];
  tools: string[];
  frameworks: string[];
  education: string;
  contact: Contact;
  projects: Project[];
  posts: Post[];
}

export interface Profile {
  name: string;
  role_target: string;
  headline: string;
  summary: string;
  avatar: string;
  location: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  location: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  timeframe: string;
  problem: string;
  research: string;
  solution: string;
  prioritization: string;
  impact_metrics: string[];
  learnings: string;
  tags: string[];
  keywords: string[];
  hero_image: string;
  hero_image_alt: string;
  gallery: string[];
  links: Cta[];
}

export interface Post {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
}

export interface Seo {
  title: string;
  description: string;
  keywords: string[];
}
