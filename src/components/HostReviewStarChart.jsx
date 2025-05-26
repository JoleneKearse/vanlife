import star from "/star.svg";

const HostReviewStarChart = () => {
  return (
    <section>
      <div className="flex items-center gap-2 my-6 mr-2 ml-2 md:mr-0 md:ml-0">
        <h2 className="text-3xl font-extrabold">5.0</h2>
        <img src={star} alt="" aria-hidden="true" />
        <p className="text-neutral-300">overall rating</p>
      </div>
      <ul className="text-neutral-300 space-y-4 grid grid-rows-5 mr-2 ml-2 md:mr-0 md:ml-0">
        <li className="grid justify-center items-center grid-cols-[1fr_235px_1fr] md:grid-cols-[1fr_300px_1fr] gap-4">
          <span>5 stars</span>
          <div
            className="h-2 flex-1/2 bg-brand-500 rounded"
            role="progressbar"
            aria-labelledby="label-5"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <span>100%</span>
        </li>
        <li className="grid justify-center items-center grid-cols-[1fr_235px_1fr] md:grid-cols-[1fr_300px_1fr] gap-4">
          <span>4 stars</span>
          <div
            className="h-2 flex-1/2 bg-neutral-200 rounded"
            role="progressbar"
            aria-labelledby="label-4"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <span>0%</span>
        </li>
        <li className="grid justify-center items-center grid-cols-[1fr_235px_1fr] md:grid-cols-[1fr_300px_1fr] gap-4">
          <span>3 stars</span>
          <div
            className="h-2 grow bg-neutral-200 rounded"
            role="progressbar"
            aria-labelledby="label-5"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <span>0%</span>
        </li>
        <li className="grid justify-center items-center grid-cols-[1fr_235px_1fr] md:grid-cols-[1fr_300px_1fr] gap-4">
          <span>2 stars</span>
          <div
            className="h-2 grow bg-neutral-200 rounded"
            role="progressbar"
            aria-labelledby="label-5"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <span>0%</span>
        </li>
        <li className="grid justify-center items-center grid-cols-[1fr_235px_1fr] md:grid-cols-[1fr_300px_1fr] gap-4">
          <span>1 star</span>
          <div
            className="h-2 grow bg-neutral-200 rounded"
            role="progressbar"
            aria-labelledby="label-5"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <span>0%</span>
        </li>
      </ul>
    </section>
  );
};

export default HostReviewStarChart;
