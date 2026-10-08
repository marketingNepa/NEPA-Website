# Projects

Each completed project is one Markdown file in this folder. Add a project by
creating a new `.md` file here — it appears automatically on `/projects`
(filtered by category) and gets its own page at `/projects/<filename>`.

## Frontmatter template

```md
---
title: "Project name"
description: "One-sentence summary shown on the card and as the meta description."
category: "Residential"        # Residential | Commercial | Industrial | Boarding House
location: "Suburb, NSW"
year: 2024                      # optional
services: ["Fire Protection", "Hydraulic", "Mechanical", "Electrical"]  # any subset
client: "Client name"          # optional
image: "/assets/img/your-photo.jpg"
imageAlt: "Describe the photo for accessibility & SEO"
gallery:                        # optional extra photos
  - { src: "/assets/img/photo-2.jpg", alt: "Description" }
  - { src: "/assets/img/photo-3.jpg", alt: "Description" }
featured: true                  # optional
draft: false                    # set true to hide while editing
---

Write the project story here in Markdown — scope, approach, outcome.
Use ## headings, lists, **bold**, and links as needed.
```

## Photos
Put project photos in `public/assets/img/` (or a subfolder) and reference them
with a path starting `/assets/img/...`. Keep each image a sensible web size —
there is a hard 5 MB-per-file limit; aim for well under that (ideally < 800 KB).

## Categories
To change the category list, edit **both**:
- `category` enum in `src/content/config.ts`
- `projectCategories` in `src/data/site.ts`
