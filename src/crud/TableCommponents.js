import React from "react";
import Table from "react-bootstrap/Table";

const TableCommponents = ({ makanans, editData, deleteData }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Makanan</th>
            <th>Deksripsi Makanan</th>
            <th>Harga Makanan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {makanans.map((makanan, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{makanan.nama}</td>
                <td>{makanan.deskripsi}</td>
                <td>Rp. {makanan.harga}</td>
                <td>
                  <button
                    className="btn btn-warning mr-2"
                    onClick={() => editData(makanan.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteData(makanan.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableCommponents;
