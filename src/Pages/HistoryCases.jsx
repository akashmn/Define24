import React, { useState } from 'react';
import Table from "../Components/Table"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { TextField, Modal, Box } from '@mui/material';

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
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ width: 400, padding: 4, bgcolor: 'background.paper' }}>
          <h2 id="modal-modal-title">Case Details</h2>
          {selectedCase && (
            <div id="modal-modal-description">
              <p>Case ID: {selectedCase.caseId}</p>
              <p>Date: {selectedCase.date}</p>
              <p>Status: {selectedCase.status}</p>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default History;