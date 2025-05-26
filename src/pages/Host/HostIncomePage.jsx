import { transactionsData } from "../../data/vans";
import { formatDate } from "../../utils/utils";
import incomeChart from "../../assets/income.png";

const HostIncomePage = () => {
  return (
    <main className="w-5-6 md:w-1/2 mx-auto">
      <div className="space-y-8 my-8 mr-2 ml-2 md:mr-0 md:ml-0">
        <h1 className="font-bold text-3xl">Income</h1>
        <p className="text-neutral-300">
          Last{" "}
          <span className="font-bold underline underline-offset-4">
            30 days
          </span>
        </p>
        <p className="text-4xl font-extrabold">
          $
          {transactionsData
            .reduce((total, transaction) => total + transaction.amount, 0)
            .toLocaleString()}
        </p>
        <img
          src={incomeChart}
          alt="A chart showing the income over the last 30 days"
          className="w-full h-auto"
        />
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">
            Transactions ({transactionsData.length})
          </h2>
          <p className="text-neutral-300">
            Last{" "}
            <span className="font-bold underline underline-offset-4">
              30 days
            </span>
          </p>
        </div>
        {transactionsData.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-neutral-100 rounded px-4 py-6 flex justify-between items-center"
          >
            <p className="text-3xl font-bold">${transaction.amount}</p>
            <p>{formatDate(transaction.date)}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HostIncomePage;
