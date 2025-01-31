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
      label: false,
      placeholder: "Enter your Title",
      required: true,
      isSelect: false
    },
    {
      name: "assignee",
      type: "select",
      label: true,
      options: assigneeOpt,
      required: true,
      isSelect: true
    },
    {
      name: "status",
      type: "select",
      label: true,
      options: statusOpt,
      required: true,
      isSelect: true
    },
    {
      name: "description",
      type: "textarea",
      label: false,
      placeholder: "Enter your Description",
      required: true,
      isSelect: false
    }, 
  ]