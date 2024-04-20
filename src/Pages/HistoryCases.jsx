import Table from "../Components/Table"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { TextField, Modal } from '@mui/material';
import { useState } from 'react';

function History() {
  const titles = ["Case ID", "Date", "Status"];
  const keys = ["caseId", "date", "status"];
  const data = [
    { caseId: "1", date: "2022-01-01", status: "Closed" },
    { caseId: "2", date: "2022-01-02", status: "Closed" },
    // Add more data as needed
  ];

  const [selectedCase, setSelectedCase] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onButtonClick = (rowData) => {
    setSelectedCase(rowData);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <TextField
        id="date"
        label="Filter by Date"
        type="date"
        defaultValue="2022-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Table
        titles={titles}
        keys={keys}
        data={data}
        onButtonClick={onButtonClick}
        showAction={true}
        actionTitle="View Details"
        buttonLabel={<VisibilityIcon />}
      />
      <Modal
        open={modalIsOpen}
        onClose={closeModal}
      >
        {/* Display the selected case details here */}
      </Modal>
    </div>
  );
}

export default History;