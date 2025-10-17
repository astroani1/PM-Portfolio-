
import type { SiteBundle } from './types';

export const site_bundle: SiteBundle = {
  "site": {
    "name": "Arnab Das",
    "brand_line": "AI-driven PM building user-centric, measurable products",
    "locale": "en-IN"
  },
  "sitemap": [
    { "path": "/", "title": "Home" },
    { "path": "/projects", "title": "Projects" },
    { "path": "/project/:id", "title": "Project Detail" },
    { "path": "/about", "title": "About" },
    { "path": "/process", "title": "Process" },
    { "path": "/blog", "title": "Blog" },
    { "path": "/contact", "title": "Contact" }
  ],
  "navigation": {
    "top_nav": ["Home", "Projects", "About", "Contact"],
    "sticky": true,
    "cta": { "label": "Download Resume", "href": "/assets/arnab-das-resume.pdf" }
  },
  "pages": {
    "home": {
      "hero": {
        "title": "Product Manager | Building solutions that solve real problems",
        "subtitle": "Hi, I'm Arnab Das—focused on AI platforms, GTM strategy, and data-driven iteration.",
        "primary_cta": { "label": "View My Work", "href": "/projects" },
        "secondary_cta": { "label": "Contact Me", "href": "/contact" }
      },
      "highlights": [
        { "metric": "150+", "label": "Beta users onboarded" },
        { "metric": "18%", "label": "Free→Premium conversion" },
        { "metric": "4.6/5", "label": "User satisfaction" }
      ],
      "teasers_from_projects": 3
    },
    "projects": {
      "title": "Projects",
      "intro": "Selected work with measurable impact. Filter by tags or search titles.",
      "filters": { "show_tag_filters": true, "show_search": true, "page_size": 6 }
    },
    "project_detail_template": {
      "sections": [
        "hero",
        "problem",
        "research",
        "solution",
        "prioritization",
        "impact_metrics",
        "learnings",
        "gallery"
      ],
      "share_cta": { "label": "Share Project", "networks": ["LinkedIn", "X"] }
    },
    "about": {
      "headline": "About Arnab",
      "summary": "PM focused on AI-powered solutions, user empathy, and measurable outcomes.",
      "panels": [
        { "title": "Core Skills", "list_from": "cms.skills" },
        { "title": "Tools", "list_from": "cms.tools" },
        { "title": "Frameworks", "list_from": "cms.frameworks" },
        { "title": "Education", "content_from": "cms.education" }
      ]
    },
    "process": {
      "headline": "How I Work",
      "steps": [
        { "title": "Discover", "desc": "User interviews, data analysis, market research." },
        { "title": "Define", "desc": "Clear problem, success metrics, personas." },
        { "title": "Design", "desc": "Flows, wireframes, prioritization via Impact/Effort." },
        { "title": "Deliver", "desc": "Sprints, cross-functional alignment, launch." },
        { "title": "Iterate", "desc": "A/B tests, feedback loops, dashboard tracking." }
      ],
      "faq": [
        { "q": "How do you prioritize?", "a": "Impact vs Effort, RICE, and strategic alignment." },
        { "q": "How do you measure success?", "a": "Leading/lagging KPIs tied to business outcomes." }
      ]
    },
    "blog": {
      "title": "Notes & Teardowns",
      "intro": "Short, actionable write-ups on product strategy and UX.",
      "list_from": "cms.posts",
      "pagination": { "page_size": 5 }
    },
    "contact": {
      "headline": "Let's Build Something Great Together",
      "subtext": "Open to PM roles where user-centric innovation drives results.",
      "methods": [
        { "type": "email", "label": "Email", "value_from": "cms.contact.email" },
        { "type": "link", "label": "LinkedIn", "value_from": "cms.contact.linkedin" },
        { "type": "location", "label": "Location", "value_from": "cms.contact.location" }
      ],
      "calendar_cta": { "label": "Schedule a 30-minute chat", "href": "/contact#schedule" }
    }
  },
  "components": {
    "NavBar": {
      "props": ["items", "cta", "sticky"],
      "behavior": "Highlights active route; collapses to hamburger on mobile."
    },
    "Footer": {
      "sections": ["about_blurb", "quick_links", "social"],
      "note": "Keep simple with muted colors."
    },
    "ProjectCard": {
      "fields": ["id", "title", "tagline", "role", "timeframe", "tags", "hero_image_alt"],
      "actions": [{ "label": "View Case Study", "href": "/project/:id" }]
    },
    "FilterBar": {
      "controls": ["search_input", "tag_multiselect", "clear_filters"]
    },
    "SkillTag": { "style": "pill" },
    "Accordion": { "usage": "FAQ and long sections" },
    "MetricsRow": { "items": ["metric", "label"] }
  },
  "interactions": {
    "search": {
      "scope": "projects.title, projects.keywords",
      "type": "fuzzy_substring",
      "empty_state": "No projects match your search."
    },
    "filters": {
      "tags": "AND logic across selected tags",
      "reset": true
    },
    "pagination": {
      "page_size": 6,
      "controls": ["prev", "next", "numbers"]
    },
    "routing": {
      "project_detail": "loads project by `id` param from cms.projects"
    },
    "accessibility": {
      "keyboard_nav": true,
      "focus_order": "nav → content → footer",
      "aria_labels": true
    }
  },
  "styles": {
    "palette": {
      "background": "#FFFFFF",
      "surface": "#F7F9FC",
      "text_primary": "#1F1F1F",
      "text_secondary": "#5F6368",
      "accent": "#4285F4",
      "accent_hover": "#3367D6",
      "border": "#E0E3E7"
    },
    "typography": {
      "headers": "Roboto, system-ui, -apple-system",
      "body": "Inter, system-ui, -apple-system",
      "base_size_px": 16,
      "line_height": 1.6
    },
    "layout": {
      "max_width_px": 1160,
      "section_vpad_px": 72,
      "grid_gap_px": 16,
      "card_radius_px": 10,
      "shadow_sm": "0 1px 2px rgba(0,0,0,.06)"
    }
  },
  "cms": {
    "profile": {
      "name": "Arnab Das",
      "role_target": "Product Manager",
      "headline": "AI-driven PM building user-centric, measurable products",
      "summary": "Product builder focused on AI platforms, GTM strategy, and data-backed iteration.",
      "avatar": "arnab_headshot.png",
      "location": "Kolkata, India (open to Bangalore)"
    },
    "skills": [
      "Product Strategy & Roadmapping",
      "User Research & Personas",
      "GTM & Pricing",
      "A/B Testing & Experimentation",
      "Analytics & SQL",
      "AI Product Development"
    ],
    "tools": ["Figma", "Miro", "Notion", "Jira", "GA4", "Mixpanel", "Python", "SQL"],
    "frameworks": ["JTBD", "AARRR", "OKRs", "Impact/Effort", "RICE"],
    "education": "B.Tech, University of Engineering and Management, Kolkata (2017–2021)",
    "contact": {
      "email": "arnab.das@example.com",
      "linkedin": "https://www.linkedin.com/in/arnab-das-564693176/",
      "location": "Kolkata, India | Open to Bangalore"
    },
    "projects": [
      {
        "id": "hiremate",
        "title": "HireMate — AI Mock Interview Platform",
        "tagline": "Affordable, personalized interview practice with real-time feedback.",
        "role": "Product Manager & Founder",
        "timeframe": "Jun 2025 – Present",
        "problem": "Job seekers lack accessible, personalized interview preparation with measurable progress.",
        "research": "25+ interviews; 100+ survey responses; competitor study (Pramp, InterviewBuddy).",
        "solution": "AI mock interviews, immediate feedback on comms/accuracy, analytics dashboard, resume tips.",
        "prioritization": "P0 = AI engine + basic feedback; P1 = analytics + resume; P2 = peer matching + mobile.",
        "impact_metrics": [
          "150 beta users in 2 weeks",
          "4.6/5 satisfaction",
          "18% free→premium conversion",
          "40% confidence lift self-reported",
          "12 users landed offers"
        ],
        "learnings": "Positive reinforcement and guidance improved repeat usage and outcomes.",
        "tags": ["AI", "EdTech", "B2C", "B2B2C", "Analytics"],
        "keywords": ["interview", "mock", "feedback", "resume", "confidence"],
        "hero_image": "https://picsum.photos/seed/hiremate/1200/600",
        "hero_image_alt": "HireMate mock interview dashboard",
        "gallery": ["https://picsum.photos/seed/hiremate1/800/600", "https://picsum.photos/seed/hiremate2/800/600", "https://picsum.photos/seed/hiremate3/800/600"],
        "links": [{ "label": "Website", "href": "/hiremate" }]
      },
      {
        "id": "bike-taxi-durgapur",
        "title": "Bike Taxi — Durgapur Market Entry",
        "tagline": "Tier-2 last-mile strategy with safety and hyperlocal launch plan.",
        "role": "Product Strategy Consultant",
        "timeframe": "Jul 2025",
        "problem": "Limited last-mile options raise travel time and costs in tier-2 corridors.",
        "research": "TAM/SAM/SOM sizing; competitor scan; personas for students and office commuters.",
        "solution": "Hyperlocal launch, SOS safety, captain onboarding playbook, variable pricing.",
        "prioritization": "P0 launch in 3 college clusters; P1 peak pricing; P2 loyalty and subscriptions.",
        "impact_metrics": [
          "₹42 Cr TAM identified",
          "15% Y1 penetration potential",
          "3x lower CAC than metros"
        ],
        "learnings": "Hyperlocal partnerships reduce CAC and speed trust-building.",
        "tags": ["Mobility", "Marketplace", "Tier-2", "Operations"],
        "keywords": ["bike taxi", "demand", "CAC", "safety"],
        "hero_image": "https://picsum.photos/seed/biketaxi/1200/600",
        "hero_image_alt": "Bike taxi app map and ride card",
        "gallery": ["https://picsum.photos/seed/biketaxi1/800/600", "https://picsum.photos/seed/biketaxi2/800/600", "https://picsum.photos/seed/biketaxi3/800/600"],
        "links": []
      },
      {
        "id": "linkedin-fit-score",
        "title": "Teardown — LinkedIn Apply Fit Score",
        "tagline": "Reduce low-signal applications and improve matches.",
        "role": "Product Analyst",
        "timeframe": "Feb – Mar 2025",
        "problem": "Low recruiter response rates due to poor candidate-role fit signals.",
        "research": "50 flow reviews; 12 interviews; public recruiter posts analysis.",
        "solution": "Pre-apply Fit Score with gap hints and improvement guidance.",
        "prioritization": "P0 Fit Score + gaps; P1 skill tags; P2 recruiter hints.",
        "impact_metrics": [
          "30–40% fewer unqualified applies (projected)",
          "Shortlist +12% in pilot",
          "Candidate satisfaction +18% proxy"
        ],
        "learnings": "Clear pre-apply signals reduce spam and raise trust across both sides.",
        "tags": ["Jobs", "Matching", "Signals", "Marketplace"],
        "keywords": ["fit", "apply", "matching", "nudge"],
        "hero_image": "https://picsum.photos/seed/fitscore/1200/600",
        "hero_image_alt": "Fit score pre-apply panel",
        "gallery": ["https://picsum.photos/seed/fitscore1/800/600", "https://picsum.photos/seed/fitscore2/800/600"],
        "links": []
      }
    ],
    "posts": [
      {
        "slug": "pricing-as-learning",
        "title": "Pricing as a Learning System",
        "summary": "Using staged pricing and cohorts to validate WTP and value perception.",
        "date": "2025-08-10",
        "tags": ["Pricing", "GTM", "Experimentation"]
      },
      {
        "slug": "pm-metrics-that-matter",
        "title": "PM Metrics That Matter",
        "summary": "Link leading indicators to lagging business outcomes with dashboards.",
        "date": "2025-09-05",
        "tags": ["Metrics", "Analytics", "Dashboards"]
      }
    ]
  },
  "seo": {
    "title": "Arnab Das | Product Manager Portfolio | AI & User-Centric Products",
    "description": "Multi-page PM portfolio with interactive filters and measurable case studies.",
    "keywords": ["Product Manager", "PM Portfolio", "AI", "GTM", "Kolkata", "Bangalore"]
  },
  "edit_instructions": "To add a new project, append an object under cms.projects with a unique `id`, fill required fields (title, role, timeframe, problem, research, solution, prioritization, impact_metrics[], learnings, tags[], keywords[], hero_image, hero_image_alt, gallery[]). The Projects page, filters, search, and routing will auto-reflect it. To add a new skill, push a string to cms.skills. To add a blog post, append to cms.posts. To update contact or links, edit cms.contact. To change nav labels or CTA, edit `navigation`. To adjust theme, edit `styles.palette` and `styles.typography`. No code changes are needed because pages render from `cms`."
};
