import Table from "../Components/Table"
import VisibilityIcon from '@mui/icons-material/Visibility';

function ActiveCases() {
  const titles = ["Case ID", "Date", "Status"];
  const keys = ["caseId", "date", "status"];
  const data = [
    { caseId: "1", date: "2022-01-01", status: "Active" },
    { caseId: "2", date: "2022-01-02", status: "Active" },
    // Add more data as needed
  ];
  const onButtonClick = (rowData) => {
    console.log("Button clicked for row: ", rowData);
  };

  return (
    <Table
      titles={titles}
      keys={keys}
      data={data}
      onButtonClick={onButtonClick}
      showAction={true}
      actionTitle="View Details"
      buttonLabel={<VisibilityIcon />}
    />
  );
}

export default ActiveCases;