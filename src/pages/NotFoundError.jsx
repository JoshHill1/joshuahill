import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../index.css";
import "./NotFoundError.css";

function NotFoundError() {
  const [progress, setProgress] = useState(0);
  const [stopCode, setStopCode] = useState(0);
  const linkRef = useRef(null);
  const hasIncremented = useRef(false);

  useEffect(() => {
  const handleMouseMove = (e) => {
    if (!linkRef.current) return;

    const linkRect = linkRef.current.getBoundingClientRect();
    const cx = linkRect.left + linkRect.width / 2;
    const cy = linkRect.top + linkRect.height / 2;
    const mx = e.clientX;
    const my = e.clientY;

    // Four corners to test
    const corners = [
      [0, 0],
      [window.innerWidth, 0],
      [0, window.innerHeight],
      [window.innerWidth, window.innerHeight],
    ];

    let minProgress = 99;

    // Special case: mouse is inside the link itself
    if (
      mx >= linkRect.left &&
      mx <= linkRect.right &&
      my >= linkRect.top &&
      my <= linkRect.bottom
    ) {
      setProgress(99);
      return;
    }

    for (let i = 0; i < corners.length; i++) {
      const [ex, ey] = corners[i];
      const vx = ex - cx;
      const vy = ey - cy;
      const vlen2 = vx * vx + vy * vy;

      const wx = mx - cx;
      const wy = my - cy;

      // projection t of the mouse point onto the line from center to corner
      const dot = wx * vx + wy * vy;
      let t = dot / vlen2; // can be <0 or >1

      // Clamp t between 0 (at center) and 1 (at corner)
      t = Math.max(0, Math.min(1, t));

      // Interpolated point along line (px, py)
      const px = cx + t * vx;
      const py = cy + t * vy;
      // Distance from center to percent point
      const fullLength = Math.sqrt(vlen2);
      const mouseLength = Math.sqrt((mx - cx) * (mx - cx) + (my - cy) * (my - cy));
      // Relative progress: as mouse moves from center toward corner
      const relT = t * fullLength === 0 ? 0 : Math.min(mouseLength / fullLength, 1);

      // Progress decreases as relT increases
      const progress = Math.round((1 - relT) * 99);
      if (progress < minProgress) minProgress = progress;
    }

    setProgress(minProgress);
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);



  const handleClick = () => {
    setProgress(100);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("stopCode");
    const newValue = storedValue ? parseInt(storedValue) + 1 : 1;
    localStorage.setItem("stopCode", newValue);
    setStopCode(newValue);
  }, []);

  const hexStopCode = stopCode.toString(16).toUpperCase().padStart(8, "0");

  return (
    <div id="not-found-page">
      <h1>(&nbsp;._.)</h1>
      <p>
        Your PC ran into an invalid link and needs to be redirected. We're just
        collecting some error info but going back to the home page is up to
        you.
      </p>
      <p>{progress}% complete</p>
      <div id="sub-err">
        <div id="err-qr">
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://joshdataportfolio.vercel.app/" alt="QR code linking to home page" />
        </div>
        <div id="sub-err-text">
          <p>For more information about this issue and possible fixes, visit</p>
          <Link to="/" id="err-homep-link" ref={linkRef} onClick={handleClick}>https://joshdataportfolio.vercel.app</Link>
          <br />
          <p>for more contact information, please email jjhi11240@gmail.com</p>
          <p>Stop code: 0x{hexStopCode}</p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundError;
