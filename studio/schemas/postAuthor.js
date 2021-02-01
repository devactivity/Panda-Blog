export default {
  type: "object",
  name: "postAuthor",
  title: "Post Author",
  fields: [
    {
      title: "Person",
      name: "person",
      description: "Writter of the article",
      type: "reference",
      to: { type: "person" },
    }
  ]
}
