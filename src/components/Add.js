import {React,useState} from 'react'
import { Button,Form,Modal } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

const Add = ({addedMovie}) => {
  const [name,setName]=useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(0);
  const [Poster,setPoster]=useState("");
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleSubmit = (e) => {e.preventDefault()
   addedMovie({Title:name,Genre:genre,Released:date,Rate:rating,Poster})
   setName("");
   setGenre("");
   setDate("");
   setPoster("");
   setRating(0);
   handleClose() }

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Add Movie
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handleSubmit}>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Movie Name" onChange={(e)=> setName(e.target.value) }value={name} required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Poster</Form.Label>
    <Form.Control type="url" placeholder="Movie Name" onChange={(e)=> setPoster(e.target.value) } value={Poster}required />
    
    
  </Form.Group>
  

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Genre</Form.Label>
    <Form.Control type="text" placeholder="Genre" onChange={(e)=> setGenre(e.target.value) } value={genre} required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Date</Form.Label>
    <Form.Control type="text" placeholder="Released date" onChange={(e)=> setDate(e.target.value) } value={date}required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Rate</Form.Label>
    <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        
      </Modal.Footer>
    </Modal>
  </>
  );
}

export default Add