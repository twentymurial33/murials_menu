import { useEffect } from "react";
import { init } from "commandbar";
import "./index.css";

init("5799104b");

const useCommandBar = () => {
  const loggedInUserId = "12345";
  window.CommandBar.boot(loggedInUserId);

  // add page
  window.CommandBar.addCommand({
    text: "Go to Add Page",
    name: "go_to_page_add food",
    template: {
      type: "link",
      value: "/add",
      operation: "self",
    },
    category: "Navigation",
  });

  //dynamic argument
  const onSearchContacts = async (query) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.map((user) => ({
        label: user.name,
        value: user.id,
      }));
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return [];
    }
  };

  window.CommandBar.addArgumentChoices("users", [], {
    onInputChange: onSearchContacts,
  });

  useEffect(() => {
    window.CommandBar.addCallback("users", (args, context) => {
      const selectedUserId = args.selectedChoice.value;
      const selectedUser = context.choices.find(
        (user) => user.id === selectedUserId
      );
      if (selectedUser) {
        alert(`Hi there, ${selectedUser.name}!`);
      }
    });
  }, []);

  //Add Record Actions
  window.CommandBar.addComponent(
    "record-preview-with-image",
    "Basic Record Preview with an image",
    {
      mount: (elem) => ({
        render: (data, metadata) => {
          elem.innerHTML =
            '<div className="record-preview-with-image-container">' +
            '<img src="' +
            data.photo +
            '" alt="' +
            data.label +
            '" />' +
            '<div className="record-text">' +
            "<h3>" +
            data.label +
            "</h3>" +
            "</div>" +
            "</div>";
        },
        unmount: (elem) => {},
      }),
    }
  );

  window.CommandBar.addRecords(
    "pets",
    [
      {
        label: "Fido",
        id: "foo42",
        photo:
          "https://images.unsplash.com/photo-1520943219761-6ca840e2e585?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwcG90cmFpdHN8ZW58MHx8MHx8fDA%3D",
      },
      {
        label: "Buster",
        id: "bar43",
        photo: "https://www.example.com/img/buster.jpg",
      },
      {
        label: "Brutus",
        id: "baz44",
        photo: "https://www.example.com/img/brutus.jpg",
      },
    ],
    { detail: { type: "component", value: "record-preview-with-image" } }
  );

  window.CommandBar.addRecordAction("pets", {
    text: "Open Profile",
    name: "open_profile",
    template: {
      type: "link",
      value: "/pets",
      operation: "self",
    },
  });

  window.CommandBar.addRecordAction("pets", {
    text: "Message",
    name: "message",
    template: {
      type: "callback",
      value: "messagePets",
    },
  });
};
export default useCommandBar;
