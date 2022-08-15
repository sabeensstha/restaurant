import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback,
} from "reactstrap";

function Contact(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telnum, setTelnum] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [contactType, setContactType] = useState("Tel.");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    telnum: false,
    email: false,
  });
  const handleBlur = (field) => (e) => {
    setTouched({ ...touched, [field]: true });
  };

  const validate = (firstName, lastName, telnum, email) => {
    const errors = {
      firstName: "",
      lastName: "",
      telnum: "",
      email: "",
    };
    if (touched.firstName && firstName.length < 3)
      errors.firstName = "First name should be >= 3 characters";
    else if (touched.firstName && firstName.length > 10)
      errors.firstName = "First Name should be <= 10 characters";

    if (touched.lastName && lastName.length < 3)
      errors.lastName = "Last name should be >= 3 characters";
    else if (touched.lastName && lastName.length > 10)
      errors.lastName = "Last Name should be <= 10 characters";

    const reg = /^\d+$/;
    if (touched.telnum && !reg.test(telnum))
      errors.telnum = "Telnum should contain only numbers";

    if (touched.email && email.split("").filter((x) => x === "@").length !== 1)
      errors.email = "Not valid Email";

    return errors;
  };

  const handleSubmit = (e) => {
    console.log("Current state is:" + JSON.stringify(firstName));
    alert("Current state is:" + JSON.stringify(firstName));
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setTelnum("");
    setAgree("");
    setContactType("");
    setMessage("");
  };

  const errors = validate(firstName, lastName, telnum, email);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            Kathmandu
            <br />
            Koteshwor
            <br />
            Nepal
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>:{" "}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a role="button" className="btn btn-info">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
            <div className="col-12 col-md-9">
              <Form onSubmit={handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="firstName" md={2}>
                    First Name
                  </Label>
                  <Col md={10}>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={firstName}
                      valid={errors.firstName === ''}
                      invalid={errors.firstName !== ''}
                      onChange={(e) => setFirstName(e.target.value)}
                      onBlur={handleBlur("firstName")}
                    />
                    <FormFeedback>{errors.firstName}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="lastName" md={2}>
                    Last Name
                  </Label>
                  <Col md={10}>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      valid={errors.lastName === ''}
                      invalid={errors.lastName !== ''}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      onBlur={handleBlur("firstName")}
                    />
                    <FormFeedback>{errors.lastName}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="telnum" md={2}>
                    Contact Tel.
                  </Label>
                  <Col md={10}>
                    <Input
                      type="text"
                      id="telnum"
                      name="telnum"
                      placeholder="Tel. Num"
                      value={telnum}
                      valid={errors.telnum === ''}
                      invalid={errors.telnum !== ''}
                      onChange={(e) => setTelnum(e.target.value)}
                      onBlur={handleBlur("lastName")}
                    />
                    <FormFeedback>{errors.telnum}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="email" md={2}>
                    Email
                  </Label>
                  <Col md={10}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      valid={errors.email === ''}
                      invalid={errors.email !== ''}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={handleBlur("telnum")}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 10, offset: 3 }}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="agree"
                          checked={agree}
                          onChange={(e) => setAgree(e.target.checked)}
                          onBlur={handleBlur("email")}
                        />{" "}
                        <strong>May we contact You?</strong>
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={{ size: 10, offset: 3 }}>
                    <Input
                      type="select"
                      name="contactType"
                      value={contactType}
                      onChange={(e) => setContactType(e.target.value)}
                    >
                      <option>Tel.</option>
                      <option>Email</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="message" md={2}>
                    Your Feedback
                  </Label>
                  <Col md={10}>
                    <Input
                      type="textarea"
                      id="message"
                      name="message"
                      rows="12"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="primary">
                      Send Feedback
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
