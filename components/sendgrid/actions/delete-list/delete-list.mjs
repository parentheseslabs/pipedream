import common from "../common.mjs";

export default {
  ...common,
  key: "sendgrid-delete-list",
  name: "Delete List",
  description: "Allows you to delete a specific contact list. [See the docs here](https://docs.sendgrid.com/api-reference/lists/delete-a-list)",
  version: "0.0.1",
  type: "action",
  props: {
    ...common.props,
    id: {
      type: "string",
      label: "Id",
      description: "Unique Id of the List to be deleted",
    },
    deleteContacts: {
      type: "boolean",
      label: "Delete Contacts?",
      description: "Indicates that all contacts on the list are also to be deleted",
      default: false,
    },
  },
  async run({ $ }) {
    this.deleteContacts = !!this.deleteContacts;
    const resp = await this.sendgrid.deleteList(this.id, this.deleteContacts);
    $.export("$summary", `Successfully deleted list ${this.list}.`);
    return resp;
  },
};
