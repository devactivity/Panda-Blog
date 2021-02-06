export default {
  type: "object",
  name: "writter",
  title: "Writter",
  fields: [
    {
      title: "Person",
      name: "person",
      description: "Writter of the article",
      type: "reference",
      to: { type: "person" },
    },
    {
      title: "Roles",
      name: "roles",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "radio",
        list: [
          { title: "Writter", value: "writter" },
          { title: "Editor", value: "editor" },
        ],
      },
    },
  ],
  preview: {
    select: {
      personName: "person.name",
      roles: "roles",
      image: "person.image",
    },
    prepare(data) {
      return {
        ...data,
        title: data.personName,
        subtitle: data.roles && data.roles.join("/"),
        media: data.image,
      };
    },
  },
};
