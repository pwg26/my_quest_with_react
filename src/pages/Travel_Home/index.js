import React, { useState, useEffect } from "react";
import Container from "../../components/Container";
import "../../components/style.css";
import "../../images/me.jpg";

function Travel() {
  return (
    <main>
      <section class="container">
        <div class="card mb-5" style="max-width: 1000px">
          <div class="row justify-content-md-center">
            <div class="col-sm-6">
              <img src="assets/images/lake.jpg" alt="..." class="img-fluid" />
            </div>
            <div class="col-sm-6 justify-content-md-center">
              <div class="card-body">
                <h1 class="card-title">Travel</h1>
                <p class="card-text">
                  My biggest passion in this life is travelling. Being in
                  historic, beuatiful and differnet places with no end point
                  truly makes me feel alive. Back in 2018 I took a full gap year
                  after graduating college to travel the world. It's been
                  impossible to shake the travel bug ever since. This is a big
                  reason why I took up coding in the first place order to work
                  remotley and keep living the dream. <br />
                  <br />
                  Check out some of my adventures at:
                  <a href="sayulita.html">Sayulita</a>,
                  <a href="munich.html"> Munich</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Travel;
