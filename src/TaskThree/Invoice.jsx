import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Invoice = () => {
  const [invoices] = useState([
    {
      id: 1,
      customer: "Shanmugaraj",
      date: "2025-03-16",
      products: [
        { id: 101, name: "Cotton Fabric", quantity: 2, unit_price: 250, amount: 500, gst: 50 },
        { id: 102, name: "Silk Saree", quantity: 1, unit_price: 1200, amount: 1200, gst: 120 },
        { id: 103, name: "Woolen Shawl", quantity: 1, unit_price: 800, amount: 800, gst: 80 },
        { id: 104, name: "Linen Shirt", quantity: 3, unit_price: 400, amount: 1200, gst: 120 }
      ],
      total_product_amount: 500 + 1200 + 800 + 1200,
      total_gst: 50 + 120 + 80 + 120,
      grand_total: 500 + 1200 + 800 + 1200 + (50 + 120 + 80 + 120),
    },
    {
      id: 2,
      customer: "Suriya",
      date: "2025-03-17",
      products: [
        { id: 105, name: "Denim Jeans", quantity: 2, unit_price: 700, amount: 1400, gst: 140 },
        { id: 106, name: "Leather Jacket", quantity: 1, unit_price: 3500, amount: 3500, gst: 350 }
      ],
      total_product_amount: 1400 + 3500,
      total_gst: 140 + 350,
      grand_total: 1400 + 3500 + (140 + 350),
    },
    {
      id: 3,
      customer: "Raja",
      date: "2025-03-17",
      products: [
        { id: 107, name: "Cotton Shirt", quantity: 3, unit_price: 500, amount: 1500, gst: 150 },
        { id: 108, name: "Denim Jacket", quantity: 1, unit_price: 2800, amount: 2800, gst: 280 }
      ],
      total_product_amount: 1500 + 2800,
      total_gst: 150 + 280,
      grand_total: 1500 + 2800 + (150 + 280),
    },
    {
      id: 4,
      customer: "Sathish",
      date: "2025-03-17",
      products: [
        { id: 109, name: "Formal Trousers", quantity: 2, unit_price: 800, amount: 1600, gst: 160 },
        { id: 110, name: "Blazer", quantity: 1, unit_price: 5000, amount: 5000, gst: 500 }
      ],
      total_product_amount: 1600 + 5000,
      total_gst: 160 + 500,
      grand_total: 1600 + 5000 + (160 + 500),
    },
    {
      id: 5,
      customer: "Sakthivel",
      date: "2025-03-17",
      products: [
        { id: 111, name: "Casual Shoes", quantity: 1, unit_price: 2200, amount: 2200, gst: 220 },
        { id: 112, name: "Leather Belt", quantity: 1, unit_price: 900, amount: 900, gst: 90 }
      ],
      total_product_amount: 2200 + 900,
      total_gst: 220 + 90,
      grand_total: 2200 + 900 + (220 + 90),
    }
  ]);
  

  const [modal, setModal] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const toggle = () => setModal(!modal);

  const handleShowInvoice = (invoice) => {
    setSelectedInvoice(invoice);
    setModal(true);
  };

  const handlePrint = () => {
    if (!selectedInvoice) return;

    const printWindow = window.open("", "_blank");
    const invoiceHTML = `
      <html>
      <head>
        <title>Invoice #${selectedInvoice.id}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2 { text-align: center; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
          th { background-color: #f4f4f4; }
          .total { font-weight: bold; }
        </style>
      </head>
      <body>
        <h2>Invoice #${selectedInvoice.id}</h2>
        <p><strong>Customer:</strong> ${selectedInvoice.customer}</p>
        <p><strong>Date:</strong> ${selectedInvoice.date}</p>

        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Amount</th>
              <th>GST</th>
            </tr>
          </thead>
          <tbody>
            ${selectedInvoice.products.map((item) => `
              <tr>
                <td>${item.name}</td>
                <td>${item.quantity}</td>
                <td>₹${item.unit_price}</td>
                <td>₹${item.amount}</td>
                <td>₹${item.gst}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <p class="total"><strong>Total Product Amount:</strong> ₹${selectedInvoice.total_product_amount}</p>
        <p class="total"><strong>Total GST:</strong> ₹${selectedInvoice.total_gst}</p>
        <p class="total"><strong>Grand Total:</strong> ₹${selectedInvoice.grand_total}</p>

        <script>window.print();</script>
      </body>
      </html>
    `;

    printWindow.document.write(invoiceHTML);
    printWindow.document.close();
  };

  const columns = [
    { name: "Customer", selector: (row) => row.customer, sortable: true },
    { name: "Date", selector: (row) => row.date, sortable: true },
    { name: "Total", selector: (row) => `₹${row.grand_total}`, sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <Button color="primary" size="sm" onClick={() => handleShowInvoice(row)}>
          Show
        </Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center">Invoices</h2>
      <div className="card p-4 shadow">
        <DataTable columns={columns} data={invoices} pagination highlightOnHover striped />
      </div>

      {/* Modal to show Invoice Details */}
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Invoice Details</ModalHeader>
        <ModalBody>
          {selectedInvoice && (
            <>
              <p><strong>Customer:</strong> {selectedInvoice.customer}</p>
              <p><strong>Date:</strong> {selectedInvoice.date}</p>

              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Amount</th>
                    <th>GST</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedInvoice.products.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>₹{item.unit_price}</td>
                      <td>₹{item.amount}</td>
                      <td>₹{item.gst}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="font-weight-bold"><strong>Total Product Amount:</strong> ₹{selectedInvoice.total_product_amount}</p>
              <p className="font-weight-bold"><strong>Total GST:</strong> ₹{selectedInvoice.total_gst}</p>
              <p className="font-weight-bold"><strong>Grand Total:</strong> ₹{selectedInvoice.grand_total}</p>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={handlePrint}>Print</Button>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Invoice;
