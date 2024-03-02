import { Button, Card } from 'react-bootstrap'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [userDetails, setUserDetails] = useState("")
  const [colorBackground, setColorBackground] = useState()
  const [randomNumber, setRandomNumber] = useState("1")

  const randomNum = () => {
    var setRandom = Math.floor(Math.random() * 30) + 1;
    setRandomNumber(setRandom)
  }

  var colors = ["#e8676a", "#7aeb3e", "#128ade", "#c7de12", "#de12ab"];
  function getRandomColorFromArray() {
    var randomIndex = Math.floor(Math.random() * colors.length);
    var bgColor = colors[randomIndex]
    setColorBackground(bgColor)
  }
  console.log(colorBackground);

  const getUser = async () => {
    const response = await fetch(`https://dummyjson.com/users/${randomNumber}`)
    const data = await response.json()
    setUserDetails(data)
  }
  useEffect(() => {
    getUser()
    getRandomColorFromArray()
  }, [randomNumber])

  console.log(userDetails.address);

  return (
    <>
      <div className="container">
        <h1 className='text-center'>Random user on Refresh</h1>
        <div className="cardDiv d-flex text-center justify-content-center">

          <Card style={{ backgroundColor: `${colorBackground}` }}>
            <Card.Img variant="top" src={userDetails?.image} />
            <Card.Body>
              <Card.Title>
                <div className="row">
                  <div className="col-lg-6">
                <h5>{userDetails?.firstName}  {userDetails?.lastName}</h5>
                <p>{userDetails?.gender}</p>
                <h6>Birth Date :</h6><p>{userDetails?.birthDate}</p>
                <h6>Age :</h6><p>{userDetails?.age}</p>
                <h6>Weight :</h6><p>{userDetails?.weight}</p>
                <h6>Height :</h6><p>{userDetails?.height}</p>
                  </div>
                  <div className="col-lg-6">
                  <h6>Address:</h6><p>{userDetails?.address?.address}</p>
                  <h6>Phone:</h6><h5>{userDetails?.phone}</h5>
                  <h6>Company:</h6> <h5>{userDetails?.company?.address?.address}</h5>
                  <h6>Email:</h6> <h5>{userDetails?.email}</h5>


                  </div>
                </div>
               
              </Card.Title>
              <Card.Text>

              </Card.Text>
              <Button onClick={() => randomNum()} variant="primary">Refresh</Button>
            </Card.Body>
          </Card>

        </div>
      </div>
    </>
  );
}

export default App;