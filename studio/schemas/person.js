import { MdPerson } from "react-icons/md";

export default {
  name: "person",
  title: "Person",
  type: "document",
  icon: MdPerson,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Akan digunakan sebagai URL yang merujuk ke artikel si penulis",
      options: {
        source: "name",
        maxLength: 50,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ]
    }
  ]
}
