import React from 'react'
import {Card} from 'react-bootstrap'
function Task({el}) {
  return (
    <div>
        <Card>
  <Card.Header>{el.id}</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {el.description}
        
      </p>
      <footer className="blockquote-footer">
        {el.isDone} <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
    </div>
  )
}

export default Task