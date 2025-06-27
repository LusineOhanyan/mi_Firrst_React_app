// import React from "react";
// import styles from "./hotel.module.css"
// import hotel from "./hotel.png"
// import location from "./location.jpg"



// const HotelReview = () => {
//   return (
   
//     <div className={styles.background}>
//        <div className={styles.container}>
//        <div className={styles.nameHotel}>
//          <div className={styles.firstPart}>
//         <div className={styles.section1}>
//             <img alt="nameHotelImg" className={styles.nameHotelImg}  src={hotel} />
//             <div className={styles.section2}>
//               <p className={styles.hotelName}>Joe’s California Hotel</p>
//               <p>Rates</p>
//            </div>
          
//         </div>
//         </div>
//     </div>
//     <div className={styles.locationAbout}>
//       <div className={styles.aboutHotel}>
//         <h1 className={styles.title}>About the Hotel</h1>
//         <p>Nestled in the heart of the city, Joe’s California Hotel 
//             blends modern minimalism with timeless elegance. 
//             Designed for comfort-seekers and design lovers alike, our hotel offers a calm, curated atmosphere where every detail reflects sophistication. From our sleek interiors and serene ambiance to personalized guest services,
//             Joe’s California Hotel is your peaceful retreat 
//             in the middle of the vibrant city. Discover refined simplicity. Stay with style.</p>
//       </div>
//     <div className={styles.location}>
//       <p>Contact Information</p>
//       <p>careers@joe.com</p>
//       <p>(111) 222 - 3344</p>
//       <p>1234 Sunset Blvd Los Angeles, CA 90210</p>
//       <img alt="location" src={location}></img>
//     </div>
//     </div>
//     </div>
//   </div> 
//   );
// };

// export default HotelReview; // ← սա պարտադիր է





import React from "react";
import styles from "./hotel.module.css";
import hotel from "./hotel.png";
import location from "./location.jpg";

const HotelReview = () => {
  const overallRating = 9.7;
  const overallCategories = {
    Sound: 9,
    Scent: 9.5,
    Texture: 7,
    Visual: 10,
    Staff: 7.5,
  };

  const reviews = [
    {
      username: "emily_19",
      date: "May 25, 2025",
      text: "I had a truly relaxing stay at Joe’s California Hotel. Beautiful view and amazing scent everywhere!",
      ratings: {
        Sound: 9.5,
        Scent: 9,
        Texture: 10,
        Visual: 9,
        Staff: 10,
      },
    },
    {
      username: "olivia_tay",
      date: "May 24, 2025",
      text: "Absolutely loved every minute. Staff was friendly and the scent was unforgettable.",
      ratings: {
        Sound: 9,
        Scent: 8.5,
        Texture: 9,
        Visual: 10,
        Staff: 9.5,
      },
    },
    {
      username: "jamesbaldwin",
      date: "May 22, 2025",
      text: "This hotel was a peaceful retreat from the busy city. Soundproof rooms and relaxing textures.",
      ratings: {
        Sound: 10,
        Scent: 9,
        Texture: 10,
        Visual: 9.5,
        Staff: 8.5,
      },
    },
  ];

  return (
    <>
    <div className={styles.parent}>
        <div className={styles.background}>
      <div className={styles.container}>
        {/* Top part with hotel image and name */}
        <div className={styles.nameHotel}>
          <div className={styles.firstPart}>
            <div className={styles.section1}>
              <img alt="nameHotelImg" className={styles.nameHotelImg} src={hotel} />
              <div className={styles.section2}>
                <p className={styles.hotelName}>Joe’s California Hotel</p>
                <p>Rates</p>
              </div>
            </div>
          </div>
        </div>

        {/* About & Contact */}
        <div className={styles.locationAbout}>
          <div className={styles.aboutHotel}>
            <h1 className={styles.title}>About the Hotel</h1>
            <p>
              Nestled in the heart of the city, Joe’s California Hotel
              blends modern minimalism with timeless elegance.
              Designed for comfort-seekers and design lovers alike, our hotel offers a calm, curated atmosphere where every detail reflects sophistication.
              From our sleek interiors and serene ambiance to personalized guest services,
              Joe’s California Hotel is your peaceful retreat
              in the middle of the vibrant city. Discover refined simplicity. Stay with style.
            </p>
          </div>

          <div className={styles.location}>
            <p>Contact Information</p>
            <p>careers@joe.com</p>
            <p>(111) 222 - 3344</p>
            <p>1234 Sunset Blvd Los Angeles, CA 90210</p>
            <img alt="location" src={location} />
          </div>
        </div>
       </div>
       </div>
        {/* ✅ Customer Reviews Section */}
        <div style={{top:"100px", width: "600px", marginRight:"350px"}}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2>Customer Reviews</h2>
            <button className={styles.reviewButton}>
              Write a Review
            </button>
          </div>
          <div className={styles.overall}>{overallRating}</div>
          <p>(578 Reviews)</p>

          {/* Rating Bars */}
          {Object.entries(overallCategories).map(([key, value]) => (
            <div key={key} style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span>{key}</span>
                <span>{value}</span>
              </div>
              <div style={{ background: "#eee", borderRadius: "6px", height: "6px" }}>
                <div
                  style={{
                    width: `${(value / 10) * 100}%`,
                    background: "#6f2da8",
                    height: "100%",
                    borderRadius: "6px",
                  }}
                />
              </div>
            </div>
          ))}

          <hr style={{ margin: "24px 0" }} />

          {/* Individual Reviews */}
          {reviews.map((review, index) => (
            <div key={index} >
              <div >{review.date}</div>
              <div >{review.username}</div>
              <p>{review.text}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "8px" }}>
                {Object.entries(review.ratings).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}:</strong> {value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* End Reviews Section */}
      </div>
   
   </>
  );
};

export default HotelReview;
