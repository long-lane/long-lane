import React from "react";
import { NavLink } from "react-router-dom";

export const Logo = ({ props: { textColor,iconColor } }) => {

  return (
    <NavLink to="/" className="logo">

    <figure>
      <svg
        width="20"
        height="20"
        version="1.1"
        viewBox="0 0 9.2604 9.2604"
        xmlns="http://www.w3.org/2000/svg">
        <g>
          <g            
            transform="matrix(.12328 0 0 .12242 -1.5279 -1.2745)"
            fill={iconColor}
            featurekey="S6ay6y-0">
            <g>
              <g                
                transform="matrix(1 0 0 .94926 0 .52828)"
                fill={iconColor}>
                <polygon points="35.043 56.782 29.789 76.381 49.394 76.381 54.644 56.782" />
                <polygon points="16.071 76.381 12.394 90.102 26.115 90.102 29.789 76.381" />
                <polygon points="58.319 43.063 54.644 56.782 68.363 56.782 72.04 43.063" />
                <polygon points="51.288 33.458 48.716 43.063 58.319 43.063 60.892 33.458" />
                <polygon points="69.384 17.134 66.81 26.739 76.416 26.739 78.988 17.134" />
                <polygon points="28.013 47.18 25.438 56.782 35.043 56.782 37.616 47.18" />
                <polygon points="80.79 10.411 78.988 17.134 85.71 17.134 87.511 10.411" />
                <polygon points="73.842 36.341 72.04 43.063 78.762 43.063 80.562 36.341" />
                <polygon points="46.37 26.735 44.565 33.458 51.288 33.458 53.089 26.735" />
              </g>
            </g>
          </g>
        </g>
      </svg>
      <figcaption style={{ color: `${textColor}` }}>long lane</figcaption>
    </figure>
    </NavLink>

  );
};
