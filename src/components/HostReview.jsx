import { Link } from "react-router-dom";

const HostReview = () => {
  return (
    <article className="bg-brand-300 px-6 py-8 flex justify-between">
      <div className="flex justify-between items-center font-bold gap-4">
        <p>Review score</p>
        <div className="flex items-center gap-2">
          <img src="/star.svg" alt="" />
          <p><span id="host-rating">5.0</span>/5</p>
        </div>
        
      </div>
      <Link to="/host/reviews" className="font-medium">Details</Link>
    </article>
  );
}

export default HostReview;