// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./types/blockContent";
import figure from "./types/figure";
import slideshow from "./types/slideShow";
import blockText from "./types/blockText";
import mainImage from "./types/mainImage";

import category from "./category";
import person from "./person";
import company from "./company";
import page from "./page";
import post from "./post";
import writter from "./writter";
import siteSettings from "./siteSettings";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    category,
    person,
    company,
    page,
    post,
    writter,
    siteSettings,
    figure,
    slideshow,
    blockContent,
    blockText,
    mainImage,
  ]),
});
