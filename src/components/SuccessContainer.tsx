export default function SuccessContainer() {
  return (
    <div className="success-card">
      <div className="success-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <defs>
            <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stop-color="#FF6A3A" />
              <stop offset="100%" stop-color="#FF527B" />
            </linearGradient>
          </defs>
          <g fill="none">
            <circle cx="32" cy="32" r="32" fill="url(#a)" />
            <path
              stroke="#FFF"
              stroke-width="4"
              d="m18.286 34.686 8.334 7.98 19.094-18.285"
            />
          </g>
        </svg>
      </div>
      <div className="success-message">
        <h2>Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to
          {}. Please verify to confirm your subscription. Thanks again!
        </p>
      </div>
      <div className="dismiss-btn">
        <button>Dismiss Message</button>
      </div>
    </div>
  );
}
