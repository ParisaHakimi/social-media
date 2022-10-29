import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const ProfilePage = () => {
  const [userImage, setUserImage] = useState([]);
  // const [user, setUser] = useState('')
  // const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/allImages`)
      .then((res) => {
        console.log("line 12 ", res.data);
        setUserImage(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-4">
          <h2>PicGram</h2>
        </div>
        <div className="container d-flex">
          <div className="col-3 pe-3">
            <div className="container text-center border p-2 mb-3">
              <img
                src="./images/profileImage.jpeg"
                alt=""
                className="rounded mx-auto d-block profileImage img-fluid"
              />
              <div className="container w-100 d-flex justify-content-around align-items-center mt-3">
                <button type="button" className="btn btn-info circle">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn btn-secondary circle">
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div className="container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corrupti maiores, blanditiis earum saepe harum beatae, ad
                laborum perferendis alias molestiae temporibus tempora
                consequuntur aliquid soluta, reiciendis exercitationem quaerat
                delectus sapiente?
              </p>
              <button type="button" className="btn btn-info w-50">
                Edit
              </button>
            </div>
          </div>
          <div className="col-6 border p-2 border">
            <div className="container  p-2 d-flex flex-wrap justify-content-between">
              {userImage.map((image) => (
                <Link
                  to={`/single-image/${image._id}`}
                  className="size d-flex justify-content-center align-items-center mb-2"
                >
                  <img
                    src={image.postedImage}
                    alt=""
                    className="rounded img-fluid gallery "
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-3  d-flex flex-column justify-content-around align-items-center">
            <Link to="/addPost" className="btn btn-info w-50">
              Add post
            </Link>
            <div className="chat">chat here</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
