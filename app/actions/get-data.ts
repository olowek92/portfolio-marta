import { client } from "@/lib/contentful/client";

import { cache } from "react";

export const revalidate = 3600; // revalidate the data at most every hour

export const getData = cache(async () => {
  const res = await client.getEntries({ content_type: "post" });

  return res.items;
});
