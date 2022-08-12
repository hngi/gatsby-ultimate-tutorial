import React from "react";
import { StoryblokComponent, storyblokEditable } from "gatsby-source-storyblok";

const Grid = ({ blok }) => (
  <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
    {blok.columns.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default Grid;