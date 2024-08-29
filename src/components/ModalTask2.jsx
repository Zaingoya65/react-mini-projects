//Task 2 Modal Window


import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ModalContainer() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Click
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Important Announcement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            aliquid nulla optio eveniet molestias, alias libero nam ab sequi
            temporibus sint quasi in vel corporis, placeat ex, accusamus ipsa?
            Hic quod libero, commodi, totam necessitatibus dolorum facilis esse
            et maiores minus nam corrupti, rerum labore error debitis modi?
            Excepturi facere culpa pariatur ea sunt fuga ipsa corporis,
            distinctio tenetur, similique provident sequi placeat. Fugit minus
            ab odit ad quo amet sit autem laboriosam, enim libero sed error
            excepturi atque dolore ut, rem numquam eveniet nobis explicabo,
            quasi ducimus. Rerum architecto voluptate suscipit obcaecati,
            mollitia sapiente laudantium aliquid corporis repellendus aperiam!
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
