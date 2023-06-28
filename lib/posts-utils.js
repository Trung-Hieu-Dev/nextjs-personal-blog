import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "markdown");

function getPostData(fileName) {
  // get path of file
  const filePath = path.join(postsDirectory, fileName);
  // get content of file
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // extracting markdown file
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, ""); // removes the file extension

  // get content for single post
  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
