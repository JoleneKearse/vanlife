import HostReviewList from "../../components/HostReviewList";
import HostReviewStarChart from "../../components/HostReviewStarChart";

const HostReviewsPage = () => {
  return (
    <main className="w-5-6 md:w-1/2">
      <heading className="flex items-baseline gap-4 my-8 mr-2 ml-2 md:mr-0 md:ml-0">
        <h1 className="font-bold text-3xl">Your reviews</h1>
        <p className="text-neutral-400">
          last{" "}
          <span className="font-bold underline underline-offset-4">
            30 days
          </span>
        </p>
      </heading>
      <HostReviewStarChart />
      <HostReviewList />
    </main>
  );
};

export default HostReviewsPage;
