import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const email = this.props.data.email;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
        <div className="row section-head">
          <div>
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>
          </div>
          <div className="row">
            <div>
              <div>
              <h3>Contact Details</h3>
              <p className="address">
                {name}
                <br />
                {city}, {state} {zip}
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
              </div>
            </div>
        </div>
        </div>
        </Fade>
      </section>
    );
  }
}

export default Contact;
