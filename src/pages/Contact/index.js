import React from "react";

import "../../components/style.css";

function Contact() {
  return (
    <main>
      <section className="container rounded">
        <div className="row justify-content-md-center">
          <div className="col-sm-6 mt-4 mb-2 bg-white">
            <h1>Contact</h1>
            <h6>kcaskade@gmail.com</h6>
            <h6>908-229-2296</h6>
            <hr />

            <form>
              <div className="form-group">
                <label for="names">First & Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="names"
                  placeholder="First Last"
                />
              </div>

              <div className="form-group">
                <label for="email">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label for="number">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  placeholder="(xxx)-xxx-xxxx"
                />
              </div>

              <div className="form-group">
                <label for="text">Leave Message Below</label>
                <textarea
                  className="form-control"
                  id="text"
                  rows="3"
                ></textarea>
              </div>

              <button className="btn btn-primary mt-1 mb-1" type="submit">
                submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Contact;
