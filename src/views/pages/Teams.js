import "assets/css/st.css";
import Footer from "components/Footer/Footer.js";
import PageNavbar from "components/Navbars/PageNavbar.js";
function contactus() {
  const headsData = [

    {
      src: require("assets/img/denys.jpg"),
      name: "Abhinil Kumar",
      pos: "General Secretary",
      fb: "https://www.facebook.com/abhinil07",
      insta: '',
      linkedin: "https://www.linkedin.com/in/abhinilkumar07/",
      mail: "abhinilkumar@gmail.com",
      contact: "8210169485"
    },
    {
      src: require("assets/img/denys.jpg"),
      name: "Devansh Srivastava",
      pos: "General Secretary",
      fb: "https://www.facebook.com/devansh.srivastava.1671",
      insta: '',
      linkedin: "https://www.linkedin.com/in/devansh-srivastava-97004620b/",
      mail: "devanshrishi26@gmail.com",
      contact: "9450124028"
    },
    {
      src: require("assets/img/denys.jpg"),
      name: "Shashi Ranjan",
      pos: "Senior Coordinator",
      fb: "https://www.facebook.com/profile.php?id=100056269372029",
      insta: '',
      linkedin: "https://www.linkedin.com/in/shashi-ranjan-861612210/",
      mail: "iit2020sr@gmail.com",
      contact: "8651045902"
    },
    {
      src: require("assets/img/denys.jpg"),
      name: "Siddharth Ghankot",
      pos: "Senior Coordinator",
      fb: "https://www.facebook.com/siddharth.ghankot",
      insta: '',
      linkedin: "https://www.linkedin.com/in/siddharth-ghankot-3aa015210/",
      mail: "siddharthghankot2003@gmail.com",
      contact: "8073539279"
    },
    {
      src: require("assets/img/denys.jpg"),
      name: "Aditya Mohite",
      pos: "Senior Coordinator",
      fb: "https://www.facebook.com/aditya.mohite.5245",
      insta: '',
      linkedin: "https://www.linkedin.com/in/adityamohiteiit/",
      mail: "adityamohite825@gmail.com",
      contact: "7249123851"
    },
    {
      src: require("assets/img/denys.jpg"),
      name: "Hariom Chaudhari",
      pos: "Web and Graphics Design Coordinator",
      fb: "https://www.facebook.com/ChaudhariHariomVijay",
      insta: '',
      linkedin: "https://www.linkedin.com/in/chaudharihariomvijay/",
      mail: "chaudharihariomvijay@gmail.com ",
      contact: "9561797648"
    },

    {
      src: require("assets/img/denys.jpg"),
      name: "Samyukta Kagdelwar",
      pos: "Senior Coordinator",
      fb: "https://www.facebook.com/samyukta.kagdelwar",
      insta: '',
      linkedin: "https://www.linkedin.com/in/samyukta-kagdelwar-1027b020b/",
      mail: "samyuktakagdelwar7@gmail.com",
      contact: "7218204399"
    },
    {
      src: require("assets/img/denys.jpg"),
      name: "Vidit Gupta",
      pos: "Web Design Coordinator",
      fb: "https://www.facebook.com/vidit.gupta.79",
      insta: '',
      linkedin: "https://www.linkedin.com/in/vidit-gupta-34662b207/",
      mail: "gvidit23@gmail.com",
      contact: "9174562462"
    }
  ];

  const studData = [
    {
      name: "Aadit Shah",
      pos: "Student Member",
      fb: "https://www.facebook.com/aadit.shah.94?mibextid=LQQJ4d",
      linkedin: "https://www.linkedin.com/in/aadit-shah-6b291022a",
      contact: "9819250603",
      mail:"shahaadit03@gmail.com"
    },
    {
      name: "Abhirup Pal",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100075401053606",
      linkedin: "https://www.linkedin.com/in/abhirup-pal-bab956224/",
      contact: "9875303263",
      mail:"abhiruppal2804@gmail.com"
    },
    {
      name: "Abhishek Tiwari",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100036010306556&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/abhishek-tiwari-5608b21a3",
      contact: "7489808207",
      mail:"Abhishekpk120@gmail.com"
    },
    {
      name: "Aditya Sharma ",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100002888868638&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/aditya-sharma-356671233",
      contact: "7014493349",
      mail:"adityasharmakn@gmail.com"
    },
    {
      name: "Aishwary Patel",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100074647653881&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/aishwary-patel-976298226",
      contact: "9630271203",
      mail:"aishwarypatel2004@gmail.com"
    },
    {
      name: "Archie Avirati",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100074750037795&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/archie-avirati-406338224",
      contact: "7024385271",
      mail:"aviratiarchie@gmail.com"
    },
    {
      name: "Ayush Sunil Munot ",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100075329244988",
      linkedin: "https://www.linkedin.com/in/ayush-munot-5b4963223",
      contact: "9890079441",
      mail:"munotayush6@gmail.com "
    },
    {
      name: "Bhoumik Mhatre",
      pos: "Student Member",
      fb: "https://www.facebook.com/bhoumik.mhatre.1",
      linkedin: "https://www.linkedin.com/in/bhoumik-mhatre-5396b623a/",
      contact: "8087562959",
      mail:"bhoumikmhatre@gmail.com"
    },
    {
      name: "Bhumi Tayal",
      pos: "Student Member",
      fb: "https://www.facebook.com/people/Bhumi-Tayal/100074774606356/",
      linkedin: "https://www.linkedin.com/in/bhumi-tayal-725913226/",
      contact: "7684067297",
      mail:"tayalbhumi8@gmail.com"
    },
    {
      name: "Dommeti Chaitanya Srinivas",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100076109945148&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/chaitanya-srinivas-41559323b",
      contact: "8074797345",
      mail:"chaitanyads127@gmail.com"
    },
    {
      name: "Komal Arya",
      pos: "Student Member",
      fb: "https://www.facebook.com/komal.arya.7359447",
      linkedin: "https://www.linkedin.com/in/komal-arya-381b0822b",
      contact: "9102515688",
      mail:"komalarya776@gmail.com"
    },
    {
      name: "Pahnabi Roy",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100080970711338&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/pahnabi-roy-8a8a1b234/",
      contact: "8100537502",
      mail:"roypahnabi@gmail.com"
    },
    {
      name: "Pratham Gupta",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100048664521001",
      linkedin: "https://www.linkedin.com/in/pratham-gupta-80bb08223/",
      contact: "7505259662",
      mail:"prathamgupta717@gmail.com"
    },
    {
      name: "Sharansh vardhan",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100023522052604&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/sharansh-vardhan-289ba9248/",
      contact: "6376339863",
      mail:"ankitkumar18175468@gmail.com"
    },
    {
      name: "Vishal Arya",
      pos: "Student Member",
      fb: "https://www.facebook.com/vishal.arya.92351995?mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/vishal-arya-1ab87a23a",
      contact: "7827523608",
      mail:"aryav7196@gmail.com"
    },
    {
      name: "Vishal Saraswat",
      pos: "Student Member",
      fb: "https://www.facebook.com/profile.php?id=100075526327320&mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/vishal-saraswat-604baa224",
      contact: "6354116363",
      mail:"saraswatvishal007@gmail.com"
    }
  ]
  return (
    <>
      <PageNavbar></PageNavbar>
      <h1 className="title">Our Team</h1>
      <div className="demo">
        <div className="container">
          <h3 className="title">Senior Coordinators</h3>
          <div className="row">
            {headsData.map((ele, i) => {
              return (
                <>
                  <div className="col-md-4 my-4 col-sm-6">
                    <div className="our-team">
                      <div className="team_img">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                        <ul className="social">
                          <li><a href={ele.fb} target="_blank"><i className="fab fa-facebook"></i></a></li>
                          <li><a href={"mailto: " + ele.mail} target="_blank"><i className="fa fa-envelope"></i></a></li>
                          <li><a href={ele.linkedin}><i className="fab fa-linkedin" target="_blank"></i></a></li>
                          {/* <li><a href={ele.insta}><i className="fab fa-instagram" target="_blank"></i></a></li> */}
                          <li><a href={"tel:" + ele.contact}><i className="fa fa-mobile" target="_blank"></i></a></li>
                        </ul>
                      </div>
                      <div className="team-content">
                        <h3 className="title">{ele.name}</h3>
                        <span className="post">{ele.pos}</span>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
            
          </div>
            <h3 className="title">Student Members</h3>
            <div className="row">
              {studData.map((ele, i) => {
                let contactLink = "tel:" + ele.contact;
                return (
                  <>
                    <div className="card col-md-4 my-4 col-sm-6 d-flex justify-content-center align-items-center card_" style={{ width: "15rem" }}>
                      <div className="card-body">
                        <h4 className="card-title">{ele.name}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">{ele.pos}</h6>
                        <a href={ele.fb} className="card-link mx-2" target="_blank"><i className="fab fa-facebook" /></a>
                        <a href={"mailto: " + ele.mail} className="card-link mx-2" target="_blank"><i className="fa fa-envelope"></i></a>
                        <a href={contactLink} className="card-link mx-2" target="_blank"><i className="fa fa-mobile "/></a>
                        <a href={ele.linkedin} className="card-link mx-2" target="_blank"><i className="fab fa-linkedin "/></a>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>



        </div>
      </div>
      <Footer/>
    </>
  );
}

export default contactus;