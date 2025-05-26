import { reviews } from "../data/vans";
import star from "/star.svg";

const HostReviewList = () => {
  return (
    <section className="my-8 mr-2 ml-2 md:mr-0 md:ml-0">
      <h3 className="font-bold text-2xl">Reviews({reviews.length})</h3>
      {reviews.map((review) => (
        <div key={review.id} className="space-y-4 mt-8">
          <div className="flex gap-2">
            {Array.from({ length: review.rating }, (_, index) => (
              <img
                key={index}
                src={star}
                alt={`${review.rating} stars`}
                aria-hidden={index !== 0}
              />
            ))}
          </div>
          <div className="font-bold flex gap-2">
            <p>{review.name}</p>
            <p className="text-neutral-300">{review.date}</p>
          </div>
          <p>{review.text}</p>
          <hr></hr>
        </div>
      ))}
    </section>
  );
};

export default HostReviewList;
