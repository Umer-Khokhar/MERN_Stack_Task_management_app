export const statusOpt = [
    { value: "to do", label: "To Do" },
    { value: "in progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
  ];
  
export const assigneeOpt = [
    { value: "umer khokhar", label: "Umer Khokhar" },
    { value: "ramzan malik", label: "Ramzan Malik" },
    { value: "nadir ali", label: "Nadir Ali" },
    { value: "bilal ahmed", label: "Bilal Ahmed" },
  ];


  export const formData = [
    {
      name: "title",
      type: "text",
      label: null,
      placeholder: "Enter your Title",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: null,
      placeholder: "Enter your Description",
      required: true,
    }, 
    {
      name: "Assignee",
      type: "select",
      label: null,
      options: assigneeOpt,
      required: true,
    },
    {
      name: "status",
      type: "select",
      label: null,
      options: statusOpt,
      required: true,
    }
  ]