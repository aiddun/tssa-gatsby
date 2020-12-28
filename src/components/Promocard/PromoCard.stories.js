import React from "react";
import PromoCard from "./PromoCard";

// This default export determines where your story goes in the story list
export default {
  title: "Promo Card",
  component: PromoCard,
};

const Template = (args) => <PromoCard {...args} />;

export const Promo = Template.bind({});

Promo.args = {
  name: "Community",
  link: "#",
  children: (
    <p>
      "The Turing Scholars program seeks to matriculate around 50 students every
      year, leading to an incredibly close-knit cohort of students passionate
      about computer science."
    </p>
  ),
  img:
    "//ts.dunlap.ai/sites/default/files/styles/utexas_promo_unit_landscape_image/public/IMG_4711.JPG?itok=Ur0Wj-yd",
  imgAlt: "Class of 2020",
};
