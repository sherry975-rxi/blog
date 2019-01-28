import { CommentCount, DiscussionEmbed } from "disqus-react";
import PropTypes from "prop-types";
import React from "react";

import config from "../../../content/meta/config";

const Comments = props => {
  const { data, facebook, slug, theme } = props;

  const config = { url: `https://www.rameezkhan.me${slug}` };

  const shortName = "rameezkhan-me";

  console.log(props);

  return (
    <React.Fragment>
      <CommentCount shortname={shortName} config={config} />
      <DiscussionEmbed shortname={shortName} config={config} />
    </React.Fragment>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Comments;
