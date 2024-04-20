import { useState } from 'react';
import Table from "../Components/Table"
import VisibilityIcon from '@mui/icons-material/Visibility';
import Modal from 'react-modal';

function ActiveCases() {
  const titles = ["Case ID", "Date", "Status"];
  const keys = ["caseId", "date", "status"];
  const data = [
    { caseId: "1", date: "2022-01-01", status: "Active" },
    { caseId: "2", date: "2022-01-02", status: "Active" },
    // Add more data as needed
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const onButtonClick = (rowData) => {
    setSelectedCase(rowData);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
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
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Case Details"
      >
        <h2>Case Details</h2>
        {selectedCase && (
          <div>
            <p>Case ID: {selectedCase.caseId}</p>
            <p>Date: {selectedCase.date}</p>
            <p>Status: {selectedCase.status}</p>
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default ActiveCases;