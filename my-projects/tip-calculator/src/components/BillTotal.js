export default function BillTotal({ bill, tip }) {
  const totalBill = Number(bill) + Number(tip);
  return (
    <div className="billTotal">
      <h3>
        Your total bill is ${totalBill} (${bill} + ${tip} tip)
      </h3>
    </div>
  );
}
