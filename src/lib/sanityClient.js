import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "rc74ey6l",
  dataset: "production",
  apiVersion: "2023-10-10",
  useCdn: true,
});
