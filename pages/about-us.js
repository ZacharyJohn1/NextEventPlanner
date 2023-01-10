import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="about_us_page">
      <h1>About Us Page</h1>
      <div>
        <ul className="about_us_list">
          <li>
            <Image
              alt="logo"
              src={"/images/zach.png"}
              width={200}
              height={250}
            />
            <div>
              <h2>Zach Schroeder</h2>
              <h3>Creator</h3>
              <p>
                I made Event Planner using NextJS, Sass, and good old fashioned Javascript!
              </p>
              <p>zschroeder34@gmail.com</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;
