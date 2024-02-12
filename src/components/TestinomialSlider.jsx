import React from "react";

const TestimonialsRow = () => {
  const testimonials = [
    {
      name: "Saurabh M.",
      title: "Clinical Research Course Student",
      description:
        "TechnoBridge institute is very good for pursuing Pharmacovigilance courses. Mentors are very cooperative, they interact with every candidate and solve their all doubts with examples, I really like all online & offline sessions. They also provide placement support through unlimited interview calls.",
    },
    {
      name: "Pooja T.",
      title: "Clinical Research Course Student",
      description:
        "TechnoBridge institute is very good for pursuing Pharmacovigilance courses. Mentors are very cooperative, they interact with every candidate and solve their all doubts with examples, I really like all online & offline sessions. They also provide placement support through unlimited interview calls.",
    },
    {
      name: "Aniket B.",
      title: "Clinical Research Course Student",
      description:
        "TechnoBridge institute is very good for pursuing Pharmacovigilance courses. Mentors are very cooperative, they interact with every candidate and solve their all doubts with examples, I really like all online & offline sessions. They also provide placement support through unlimited interview calls.",
    },
    // Add more testimonials as needed
  ];

  const divStyle = {
    background: "grey",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px",
    marginLeft: "40px",
    width: "400px", // Adjust the width as needed
  };

  return (
    <>
     
      <div class="mt-10"></div>
      <div class="mt-10"></div>
      <div style={{background:'black'}}>
      <h2 style={{textAlign:'center',paddingTop:'20px'}} >
          <strong style={{color:'white'}}>Student Reviews</strong>
        </h2>
        <div class="btmborder"></div>
        <p style={{color:'white'}}>
          <center> Journey Towards Success.</center>
        </p>
        <br />
        </div>
      <div
        style={{
          background: "black",
          display: "flex",
          justifyContent: "start",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} style={divStyle}>
            <h2 className="s-name" style={{color:'white'}}>{testimonial.name}</h2>
            <h4 className="s-title" style={{ color: "yellow" }}>
              {testimonial.title}
            </h4>
            <p className="s-desc">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestimonialsRow;
