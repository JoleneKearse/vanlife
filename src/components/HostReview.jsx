import HostLinkTo from "./HostLinkTo";

const HostReview = () => {
  return (
    <article className="bg-brand-300 px-6 py-8 flex justify-between">
      <div className="flex justify-between items-center font-bold gap-4">
        <p>Review score</p>
        <div className="flex items-center gap-2">
          <img src="/star.svg" alt="" />
          <p className="text-neutral-300"><span id="host-rating" className="text-neutral-500">5.0</span>/5</p>
        </div>
        
      </div>
      <HostLinkTo to="/host/reviews">Details</HostLinkTo>
    </article>
  );
}

export default HostReview;