// src/_data/webmentions.js
//
// Build-time fetch of *received* webmentions (likes, reposts, replies,
// mentions) from webmention.io (or a self-hosted mirror with the same
// API). Cached for 12 hours via @11ty/eleventy-fetch so repeated
// local builds don't spam the endpoint.
//
// Sending webmentions is passive. See the <link rel="webmention"> tag in
// partials/head.njk.

import EleventyFetch from "@11ty/eleventy-fetch";
import site from "./site.js";

export default async function () {
  if (!site.webmention.enabled || !site.webmention.token) return [];

  const url = `${site.webmention.fetchApiBase}?target=${site.url}&token=${site.webmention.token}`;

  try {
    const data = await EleventyFetch(url, {
      duration: "6h",
      type: "json"
    });
    return data.children ?? [];
  } catch (error) {
    console.warn("Could not fetch webmentions:", error.message);
    return [];
  }
}
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  const domain = "grimmalkin.net";
  const token = process.env.WEBMENTION_IO_TOKEN;
  
  if (!token) {
    console.warn("No WEBMENTION_IO_TOKEN found. Skipping webmention fetch.");
    return { children: [] };
  }
  
  const url = `https://webmention.io/api/mentions.jf2?domain=${domain}&token=${token}&per-page=1000`;
  
  try {
    const response = await EleventyFetch(url, {
      duration: "6h",
      type: "json"
    });
    
    console.log(`Fetched ${response.children.length} webmentions`);
    return response;
  } catch(e) {
    console.error("Error fetching webmentions:", e);
    return { children: [] };
  }
};
