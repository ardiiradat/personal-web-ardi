import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address</span>Taman Kedaung. Kedaung Pamulang Tangerang Selatan, Banten, Indonesia
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Mail me</span>{" "}
        <a href="mailto:steve@mail.com">ardi.iradat@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
