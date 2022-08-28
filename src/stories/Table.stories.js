import Table from "../components/table/Table";

export default {
  title: "Table",
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  caption: "Table",
  headers: ["name", "school", "year"],
  body: [
    { name: "Dolores Abernathy", school: "Ashesi University", year: "2027" },
    { name: "Angela Torsu", school: "University of Ghana", year: "2020" },
    { name: "Dolores Abernathy", school: "Academic City", year: "2022" },
    { name: "Michael Jordan", school: "Winsconsin University", year: "2025" },
    { name: "Farida Sheini", school: "Columbia University", year: "2030" },
    { name: "Faddal Ibrahim", school: "Microsoft University", year: "2050" },
    { name: "Alhassan Hassan", school: "Meta University", year: "2040" },
    { name: "Fawzan Abdallah", school: "Apple University", year: "2035" },
  ],
  style: null,
  shadow: true,
};
