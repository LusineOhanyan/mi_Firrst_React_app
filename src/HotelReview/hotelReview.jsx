import React from "react";
import styles from "./hotel.module.css";
import hotel from "./hotel_imgs/hotel.png";
import location from "./hotel_imgs/location.jpg";
import mail from "./hotel_imgs/Email.png"
import phone from "./hotel_imgs/phone.png"
import locationIcon from "./hotel_imgs/icon.png"
import media from "./hotel_imgs/internet.png"
import photo from "./hotel_imgs/photo.png"
import stars from "./hotel_imgs/stars.png"

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
      stars: stars,
      photo: photo,
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
      stars: stars,
      photo: photo,
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
      stars: stars,
      photo: photo,
      text: "This hotel was a peaceful retreat from the busy city. Soundproof rooms and relaxing textures.",
      ratings: {
        Sound: 10,
        Scent: 9,
        Texture: 10,
        Visual: 9.5,
        Staff: 8.5,
      },
    },

     {
      username: "sophie_2025",
      date: "Nov 2, 2024",
      stars: stars,
      photo: photo,
      text: "Joe’s California Hotel exceeded my expectations. The modern, minimalist design gave it a luxurious feel. The entire space was clean, quiet, and visually stunning. Staff was friendly and always ready to help..",
      ratings: {
        Sound: 9,
        Scent: 10,
        Texture: 10,
        Visual: 9,
        Staff: 10,
      },
    },

     {
      username: "a_201502",
      date: "Jan 20, 2024",
      stars: stars,
      photo: photo,
      text: "I had a truly relaxing stay at Joe’s California Hotel. The room was pristine and the bed incredibly comfortable. The atmosphere throughout the hotel felt calm and luxurious. Every detail seemed thoughtfully designed..",
      ratings: {
        Sound: 9.5,
        Scent: 9,
        Texture: 10,
        Visual: 9,
        Staff: 10,
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
                <img className={styles.stars} alt="stars" src={stars}/>
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
        
              <p  className={styles.conatctInfo}>Contact Information</p>
               <div  className={styles.mediaContainer}>
              <img alt="media"  src={media}  className={styles.icons}/>
              <p>joehotel.com</p>
              </div>
              <div  className={styles.mailContainer}>
              <img alt="mail"  src={mail} className={styles.icons}/>
              <p>careers@joe.com</p>
              </div>
              <div className={styles.phoneContainer}>
              <img alt="phone" src={phone} className={styles.icons}/>
              <p>(111) 222 - 3344</p>
              </div>
              <div className={styles.locationContainer}>
                <img alt="location"  src={locationIcon} className={styles.icons}/>
                <p>1234 Sunset Blvd Los Angeles, CA 90210</p>
              </div>
             
            <img alt="location" src={location} />
          </div>
        </div>
       </div>
       </div>
        {/* ✅ Customer Reviews Section */}
        <div  className={styles.reviewContainer} >
          <div className={styles.first} >
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

          <hr style={{ margin: "24px 0"}} />

          {/* Individual Reviews */}
          {reviews.map((review, index) => (
            <div key={index}  style={{marginBottom: "20px"}} >
              <div >{review.date}</div>
              <img src={review.stars} alt={review.stars} className={styles.stars}/>
              <div className={styles.user} ><img src={review.photo} alt={review.username} className="review-photo" />  {review.username}</div>
              
              <p>{review.text}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "8px",  }}>
                {Object.entries(review.ratings).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key}:</strong> {value}
                  </div>
                ))}
              </div>
               <hr style={{ margin: "24px 0", backgroundColor: "#eee", height: "1px"}} />
            </div>
          ))}
        </div>
        {/* End Reviews Section */}
      </div>
   
   </>
  );
};

export default HotelReview;
