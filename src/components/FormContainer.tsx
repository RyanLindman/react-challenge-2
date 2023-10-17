export default function FormContainer() {

    

  return (
    <div className="main-container">
      <div className="content-container">
        <div className="intro-container">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monhtly updates on:</p>
          <div className="info-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  stroke-width="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <span>Product discovery and building what matters </span>
          </div>
          <div className="info-text2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  stroke-width="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <span>Measuring to ensure updates are a success </span>
          </div>
          <div className="info-text3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
            >
              <g fill="none">
                <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
                <path
                  stroke="#FFF"
                  stroke-width="2"
                  d="M6 11.381 8.735 14 15 8"
                />
              </g>
            </svg>
            <span>And much more! </span>
          </div>
          <div className="form-container">
            <div>
              <form action="">
                <label htmlFor="email">Email address</label>
                <br />
                <input
                  type="email"
                  placeholder="email@company.com"
                  id="email" required
                ></input>
                <button type="submit">Subscribe to monthly newsletter</button>
              </form>
            </div>
          </div>
        </div>
        <div className="image-container">
            <img src="" alt="image" />
        </div>
      </div>
    </div>
  );
}


