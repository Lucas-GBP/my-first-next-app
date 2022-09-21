import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    //Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map( 
        (fileName) => {
            // Remove ".md" from file name to ger id
            const id = fileName.replace(/\.md$/, '');

            //Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Combine the data with the id
            return {
                id,
                ...matterResult
            };
        }
    );

    //Sort posts by date
    return allPostsData.sort(
        ({data: {'date': a}}, {data: {'date': b}}) => {
            if (a < b) { return 1; }
            if (a > b){ return -1; }
            return 0
        }
    );
}