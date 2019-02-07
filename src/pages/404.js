import React from "react";

const NotFoundPage = props => {
  const { theme } = props;

  return (
    <div className="not-found">
      <main className="main">
        <div className="comment">
          <i>// 404</i>
        </div>
        <div className="code">
          <span>
            <i className="accent">const</i> link = 💩
          </span>
        </div>
      </main>

      <style jsx>{`
        .not-found {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .comment {
          font-size: xx-large;
        }

        .code {
          font-size: x-large;
        }

        .accent {
          color: orange;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
