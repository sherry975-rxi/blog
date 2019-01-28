import { DiscussionEmbed } from "disqus-react";
import PropTypes from "prop-types";
import React from "react";

import config from "../../../content/meta/config";

const Comments = props => {
  const { data, facebook, slug, theme } = props;

  const config = {
    url: "https://rameezkhan.me/example",
    identifier: "example",
    title: "Example"
  };

  return (
    <React.Fragment>
      <DiscussionEmbed shortName={"rameezkhan-me"} config={config} />
    </React.Fragment>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Comments;
