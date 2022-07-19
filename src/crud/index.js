import React, { Component } from "react";
import FormComponents from "./FormComponents";
import NavbarComponents from "./NavbarComponents";
import TableCommponents from "./TableCommponents";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.id === "") {
      this.setState({
        makanan: [
          ...this.state.makanan,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananDipilih = this.state.makanan
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });
      this.setState({
        makanan: [
          ...makananDipilih,
          {
            id: this.state.makanan.length,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    });
  };
  editData = (id) => {
    const makananDipilih = this.state.makanan
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });
    this.setState({
      nama: makananDipilih[0].nama,
      deskripsi: makananDipilih[0].deskripsi,
      harga: makananDipilih[0].harga,
      id: makananDipilih[0].id,
    });
  };
  deleteData = (id) => {
    const makananBaru = this.state.makanan
      .filter((makanan) => makanan.id !== id)
      .map((filterMakanan) => {
        return filterMakanan;
      });
    this.setState({
      makanan: makananBaru,
    });
  };
  render() {
    return (
      <div>
        <NavbarComponents />
        <div className="container mt-4">
          <FormComponents
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <TableCommponents
            makanans={this.state.makanan}
            editData={this.editData}
            deleteData={this.deleteData}
          />
        </div>
      </div>
    );
  }
}
