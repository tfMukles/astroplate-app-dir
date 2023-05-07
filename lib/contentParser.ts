import { IData } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getPageData = (filePath: string) => {
  const pageData = fs.readFileSync(path.join(filePath), "utf-8");
  const pageDataParsed = matter(pageData);
  let data = pageDataParsed.data as IData;

  return { data };
};
