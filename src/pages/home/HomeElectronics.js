import React, { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderThree from "../../wrappers/hero-slider/HeroSliderThree";
import CategoryOneSlider from "../../wrappers/category/CategoryOneSlider";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import TabProductThree from "../../wrappers/product/TabProductThree";
import BannerThree from "../../wrappers/banner/BannerThree";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import BlogFeaturedTwo from "../../wrappers/blog-featured/BlogFeaturedTwo";
import LayoutOne from "../../layouts/LayoutOne";
import ProductCard from "../../components/product/ProductCard";

const HomeElectronics = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="BATTERY"
        description="Electronics home of ZIVON react minimalist eCommerce template."
      />
      <LayoutOne>
        {/* hero slider */}
        <div>
          <HeroSliderThree />
        </div>

        {/* category slider */}
        {/* <CategoryOneSlider spaceBottomClass="pb-95" /> */}

        {/* section title with text */}
        <SectionTitleWithText spaceBottomClass="pb-90 pt-60" />

        <ProductCard/>

        {/* tab product */}
        {/* <TabProductThree spaceBottomClass="pb-60" category="electronics" /> */}

        

        {/* banner */}
        <BannerThree spaceBottomClass="pb-100" />

        {/* testimonial */}
        {/* <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        /> */}

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" spaceTopClass="pt-100" />

        {/* blog featured */}
        {/* <BlogFeaturedTwo spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeElectronics;
