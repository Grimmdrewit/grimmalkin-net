// src/_data/site.js
//
// All configuration should be here. Everything from layouts and
// partials read from `site.*`. Avoid literal URLs, names, font stacks
// etc. Change your site's identity by editing this file, not the templates.

export default {
  title: "grimmalkin.net",
  description: "A haunted house overrun with singing rodents.",
  url: "https://grimmalkin.net", // no trailing slash
  language: "en",

  // IndieWeb author h-card. Used in the footer, /about, and post bylines.
  // See https://indieweb.org/h-card
  author: {
    name: "Grimm",
    url: "https://grimmalkin.net",
    photo: "/assets/images/author.jpg",
    email: "gdi@grimmalkin.net",
    bio: "Hey there. Name's Grimm. I am not a web developer. I'm a Queer Trans artist and writer with anxiety and ADHD who finally got tired of starting over on increasingly hostile social media platforms every couple of years. When I finally threw in the towel with Microsoft and Apple and became a 40 year old beginner on Linux, I figured I'd also sudo bash my head against the keyboard until I figured out how to make a website of my own while I was at it. I'd always wanted to. Why not now?",
    // rel="me" links. Used to verify your identity across sites (e.g. for
    // IndieAuth) and rendered in <head> and the footer h-card.
    relMe: ["https://social.lol/@gdi", "https://github.com/grimmdrewit/"]
  },

  seo: {
    ogImageDefault: "/assets/images/og-default.png",
    // Turn this on if you want twitter:card meta tags too. Open Graph
    // covers most readers (including Mastodon/the fediverse) on its own.
    twitterCardFallback: false
  },

  nav: true, // whether nav.js entries render in the header/footer
  sidebar: true, // whether the optional <aside> (recent posts, rel=me links) renders

  // Number of posts to show on the homepage
  homepagePostsLimit: 5,

  // Source repo. Used by the hero's "Learn more" link, the colophon, and
  // the footer's "Source" link. Point this at your own fork once you have
  // one.
  repoUrl: "https://source.tube/grimmdrewit/grimmalkin-net.git",

  // The dismissible intro banner shown on the homepage (see
  // partials/hero.njk). Meant to explain the starter to a first-time
  // visitor. Edit or disable it once your own site's copy replaces it.
  // Dismissing it is remembered in localStorage (progressive enhancement:
  // with JS off, it always shows, and there's no dismiss button).
  hero: {
    enabled: true,
    title: "Welcome to the IndieWeb 11ty Starter: I did NOT write this code.",
    body: "I did not write this code. I am using This minimal Eleventy starter made by Brennan Day, because I wanted to start off with code that was written with accessibility, security, and efficiency in mind. So I'm borrowing Brennan's, until I find my feet and feel confident enough to code something all by myself, from concept to deployment. I will get there someday soon enough. For now, I just wanted something up that I could play with and see how it all works. There are several ways to 1) write code, 2) make a website with that code, 3) host that website, and 4) deploy the dang thing to the thing. This is one of like, five methods that I've come across so far. (Maybe I'll blog about it once I've set up my internet house the way I want it. I promise I will not tell you 'it's easy, just open up your CLI (I beg your finest pardon, my WHAT) and simply' and then proceed to type like my cat decided to walk across my keyboard while the font was set to wingdings. If this sounds like your experience on the indieweb, Annie Mueller [wrote an essay that absolutely sent me,](https://anniemueller.com/posts/how-i-a-non-developer-read-the-tutorial-you-a-developer-wrote-for-me-a-beginner) and perhaps it will bring you joy as well.)",
    features: "IndieWeb microformats (h-card/h-entry) · sending &amp; receiving webmentions · RSS + JSON feeds · build-time search via Pagefind · CSS-only dark mode · no client-side JavaScript.",
    ctaText: "Read the README",
    ctaUrl: "https://github.com/brennanbrown/11ty-Indie-Web-Blog-Starter#readme"
  },

  webmention: {
    enabled: true,
    // Works identically against webmention.io or a self-hosted mirror
    // (e.g. webmention.folk.zone). Swap these two URLs, the API
    // shape matches either way.
    endpoint: "https://webmention.io/example.com/webmention",
    fetchApiBase: "https://webmention.io/api/mentions.jf2",
    // Never hardcode this. Set WEBMENTION_IO_TOKEN in your environment
    // (locally in `.env`, in Netlify's dashboard for production).
    token: process.env.WEBMENTION_IO_TOKEN
  },

  feed: {
    enabled: true,
    formats: ["rss", "json"] // drop whichever you don't want
  },

  fonts: {
    // Old Style body / Humanist headers. A system font stack so there's
    // zero font loading and zero layout shift. See README.md "Fonts" for
    // how to swap in a Google/Bunny Fonts stack instead.
    body: "'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif",
    heading: "Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', sans-serif",
    monospace: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace"
  },

  theme: {
    // Color palette and design tokens. Edit these to customize your site's
    // appearance. All CSS variables in 01-variables.css.njk reference these values.
    light: {
      bg: "#ffffff",
      bgSecondary: "#f4f4f5",
      font: "#18181b",
      primary: "#3563e9",
      lightGrey: "#e4e4e7",
      grey: "#a1a1aa",
      darkGrey: "#52525b",
      error: "#dc2626",
      success: "#16a34a",
      linkVisited: "#7c5cbf",
      linkHover: "#1d4ed8"
    },
    dark: {
      bg: "#18181b",
      bgSecondary: "#27272a",
      font: "#f4f4f5",
      primary: "#6d8cf0",
      lightGrey: "#3f3f46",
      grey: "#52525b",
      darkGrey: "#a1a1aa",
      error: "#f87171",
      success: "#4ade80",
      linkVisited: "#a68df0",
      linkHover: "#93b4ff"
    }
  },

  license: {
    // AGPL-3.0-or-later: a copyleft license. If you modify this starter
    // and distribute it (including running it as a network service), you
    // must share your changes under the same license. See the full text at
    // the URL below.
    name: "AGPL-3.0-or-later",
    url: "https://www.gnu.org/licenses/agpl-3.0.html"
  },

  credits: {
    madeBy: "Brennan Kenneth Brown",
    madeByUrl: "https://brennan.day",
    project: "Berry House",
    projectUrl: "https://berryhouse.ca"
  }
};
