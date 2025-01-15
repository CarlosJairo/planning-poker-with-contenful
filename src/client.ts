import * as contenful from "contentful";

export const client = contenful.createClient({
  space: import.meta.env.VITE_SPACE_ID || "",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN || "",
});