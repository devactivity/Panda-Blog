import { MdPages } from 'react-icons/md'
export default {
  name: "page",
  title: "Page",
  type: "document",
  liveEdit: false,
  icon: MdPages,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};
