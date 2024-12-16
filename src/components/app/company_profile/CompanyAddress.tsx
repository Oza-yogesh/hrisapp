import AddressForm from "./AddressForm";

function CompanyAddress() {
  return (
    <div>
      <AddressForm title="Registered Office" />
      <AddressForm title="Corporate Office" />
      <AddressForm title="Custom Address Title" />
    </div>
  );
}

export default CompanyAddress;
