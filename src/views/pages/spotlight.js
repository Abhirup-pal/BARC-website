import Card from "react-bootstrap/Card";
import classes from "assets/css/style.module.css";
import "react-multi-carousel/lib/styles.css";
import Footer from "components/Footer/Footer.js";
import PageNavbar from "components/Navbars/PageNavbar.js";

function Spotlight() {
  const StudData = [
    [
    {
      src: require("assets/img/Vaidehi Gupta.jpg"),
      altText: "Vaidehi Gupta",
      title:"Vaidehi Gupta",
      backText:`Vaidehi Gupta is an Undergraduate student in the Department of Physics. She has worked at the University of Minnesota under Prof. Michael Coughlin in the field of Astrophysics. She, along with her team, had worked on the paper "Foraging with MUSHROOMS: A Mixed-Integer Linear Programming Scheduler for Multimessenger Target of Opportunity Searches with the Zwicky Transient Facility."
      `,
      knowMoreLink:"/",
      frontText:
        "",
      caption: "Vaidehi Gupta",

    },
    {
      src: require("assets/img/Akash Roy.jpg"),
      altText: "Akash Roy",
      title:"Akash Roy",
      backText:"Akash Roy is an undergraduate student from the Department of Mining engineering enrolled in its Dual Degree Course. He has held a position of responsibility by being a Placement Coordinator in the past. He was a member of the group representing IIT KGP and finished second in the annual case study competition EXL EQ (Excellence Quotient).",
      knowMoreLink:"/",
      frontText:
        "",
      caption: "Akash Roy",

    },
    {
      src: require("assets/img/aditi kambli.jpg"),
      altText: "Aditi Kambli",
      title:"Aditi Kambli",
      backText:"Aditi Kambli was an undergraduate student with  B.Tech in Ocean Engineering and Naval Architecture and M.Tech in Financial Engineering in 2020. She got her paper published at the International Conference on Machine Learning and Soft Computing.",
      knowMoreLink:"/",
      frontText:
        "",
      caption: "Aditi Kambli",

    }
    ],
    [
    {
      src: require("assets/img/DeepakSomani.jpg"),
      altText: "Deepak Somani",
      title:"Deepak Somani",
      backText:"Deepak Somani is an undergraduate from the Department of Mechanical Engineering. He is currently working at Brown University as a research intern in the area of molecular computation, which is a branch of computing that uses DNA, chemicals, and molecular biology hardware, instead of traditional silicon-based computer technologies.",
      knowMoreLink:"/",
      frontText:
        "",
      caption: "Deepak Somani",

    },
    { src: require("assets/img/Pratim Mujumdar.jpeg"),
    altText: "Pratim Mujumdar",
    title:"Pratim Mujumdar",
    backText:"Pratim Mujumdar is an undergraduate from the Department of Chemical Engineering. He is a part of the team that represented India in ‘CoreNet Global Academic Challenge 6.0’. His team is among one of the four teams to reach the final round after giving tough competition to 1300 teams from around the globe. They emerged victorious in the final round and won against the University of Washington, New York University, and the University of Denver.",
    knowMoreLink:"/",
    frontText:
      "",
    caption: "Pratim Mujumdar",
    },
    {
      src: require("assets/img/Siddhant Samarth.png"),
      altText: "Siddhant Samarth",
      title:"Siddhant Samarth",
      backText:"Siddhant Samarth is an undergraduate from the Department of Civil Engineering. He is a part of the team that represented India in ‘CoreNet Global Academic Challenge 6.0’.His team is among one of the four teams to reach the final round after giving tough competition to 1300 teams from around the globe. They emerged victorious in the final round and won against the University of Washington, New York University, and the University of Denver.",
      knowMoreLink:"/",
      frontText:
        "",
      caption: "Siddhant Samarth",

    }
    ],
  ];
  return (
    <>
      <PageNavbar />
      <h1 className={classes.title}>Spotlight</h1>
      {/* <CardGroup> */}
     
      <div className={classes.allContainer}>
        {StudData.map((e,i)=>{
          {console.log(e)}
          return(
            <>
            <div className="card-group">
            {e.map((ele,idx)=>{
              return(
                <>
<div className="card d-flex flex-row justify-content-center  align-items-center p4 px-2" >
<Card className={classes.outerCard}>
                <div class={classes.card}>
                  ..
                  <div className={classes.flip_card}>
                    <div className={classes.flip_card_inner}>
                      <div className={classes.flip_card_front}>
                        <Card.Img variant="top" src={ele.src} className={classes.image} style={{height:"23rem"}}/>
                        <Card.Body>
                          <Card.Title className={classes.cardTit}>{ele.title}</Card.Title>
                          <Card.Text className={classes.text}>
                            {ele.frontText}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          {/* <small className="text-muted">
                            Hover to know more
                          </small> */}
                        </Card.Footer>
                      </div>
                      <div className={classes.flip_card_back}>
                        <h5>{ele.backText}</h5>
                      </div>
                    </div>
                          {/* <Button className={classes.btn}>Know More</Button> */}
                  </div>
                </div>
              </Card>
        </div>
                </>
              )
            })}

      </div>
            </>
          )
        })}
        </div>
      {/* <Card className={classes.outerCard}>
      <div class={classes.card}>..
    <div className={classes.flip_card}>
    <div className={classes.flip_card_inner}>
    <div className={classes.flip_card_front}>
    <Card.Img variant="top" src={require("assets/img/fabien-bazanegue.jpg")}/>
    <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text className={classes.text}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Hover to know more</small>
        </Card.Footer>
      </div>
    <div className={classes.flip_card_back}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum, corporis facilis ratione id, molestias quam illum? Praesentium fugiat sequi omnis accusamus numquam tempora dolor labore ullam natus recusandae, quisquam ipsam laboriosam quo nisi impedit voluptates at minus eum molestias, vel est </p>
      </div>
  </div>
  </div>
    </div>
        
        
      </Card>
      <Card className={classes.outerCard}>
      <div class={classes.card}>..
    <div className={classes.flip_card}>
    <div className={classes.flip_card_inner}>
    <div className={classes.flip_card_front}>
    <Card.Img variant="top" src={require("assets/img/chester-wade.jpg")}/>
    <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text className={classes.text}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.lorem20
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.lorem20
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Hover to know more</small>
        </Card.Footer>
      </div>
    <div className={classes.flip_card_back}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum, corporis facilis ratione id, molestias quam illum? Praesentium fugiat sequi omnis accusamus numquam tempora dolor labore ullam natus recusandae, quisquam ipsam laboriosam quo nisi impedit voluptates at minus eum molestias, vel estLorem ipsum dolor sit amet, consectetur adipisicing elit. In aut temporibus deleniti voluptatum hic debitis praesentium ducimus est, placeat ex aliquam maiores vel labore, eaque culpa. Magnam, libero quos atque blanditiis quas illum deleniti in deserunt possimus esse, sapiente aliquid veniam. Perspiciatis accusantium soluta, hic labore in dolore ab autem repudiandae veritatis maiores laudantium consequuntur unde. Doloribus obcaecati excepturi numquam atque cum, corporis facilis ratione id, molestias quam illum? Praesentium fugiat sequi omnis accusamus numquam tempora dolor labore ullam natus recusandae, quisquam ipsam laboriosam quo nisi impedit voluptates at minus eum molestias, vel est </p>
      </div>
  </div>
  </div>
    </div>
        
        
      </Card> */}
      {/* </CardGroup> */}
      <Footer></Footer>
    </>
  );
}

export default Spotlight;
