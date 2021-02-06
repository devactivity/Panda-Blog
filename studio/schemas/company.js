import { MdBusiness } from "react-icons/md";

export default {
  name: "company",
  title: "Company Details",
  type: "document",
  icon: MdBusiness,
  fields: [
    {
      name: "name",
      title: "Company name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "email",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "zipCode",
      title: "ZIP Code",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
  ],
};
