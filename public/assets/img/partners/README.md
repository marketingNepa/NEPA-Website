# Client / Partner logos

Drop client logo files here (SVG preferred, or transparent PNG), then reference
them in `src/data/site.ts` → `partners` array, e.g.:

```ts
export const partners: Partner[] = [
  { name: "Acme Builders", logo: "/assets/img/partners/acme.svg", url: "https://acme.example" },
  ...
];
```

Guidance:
- SVG or transparent PNG, roughly 400×140 px (or any aspect — CSS caps height at 56 px).
- Single-colour or full-colour both work; the site renders them greyscale and
  reveals colour on hover.
- Until a `logo` is set, the partner's `name` renders as a text wordmark, so the
  section looks intentional even before real logos are added.
