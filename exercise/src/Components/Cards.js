import React from "react";

function Cards() {
  return (
    <div>
      <div className="container ">
        <div className="row  ">

           <div className="col-md-4 col-sm-6">
            <div class="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src="/pics/Swimming.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Swimming</h5>
                <p class="text-center">
                It’s an incredible way to boost your cardio health and overall fitness.
                </p>
                <a href="#" class="btn btn-primary">
                  Readmore
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div class="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src="/pics/Cycling.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Cycling</h5>
                <p class="card-text">
                Cycling is mainly an aerobic activity, which means that your heart, blood vessels and lungs all get a workout
                </p>
                <a href="#" class="btn btn-primary">
                  Readmore
                </a>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div class="card" style={{ width: "18rem" }}>
              <img
                class="card-img-top"
                src="/pics/Running.webp"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Running</h5>
                <p class="card-text">
                Start with brisk walking. Aim for 30 minutes per session. Allow a minimum of 8 to 12 weeks to build up to regular running.
                Buy an appropriate pair of shoes.
                </p>
                <a href="#" class="btn btn-primary">
                  Readmore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
