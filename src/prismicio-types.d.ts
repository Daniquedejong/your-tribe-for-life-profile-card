// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type VisitekaartjeDocumentDataSlicesSlice = InstaTitleSlice;

/**
 * Content for visitekaartje documents
 */
interface VisitekaartjeDocumentData {
  /**
   * Slice Zone field in *visitekaartje*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: visitekaartje.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<VisitekaartjeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *visitekaartje*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: visitekaartje.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *visitekaartje*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: visitekaartje.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *visitekaartje*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: visitekaartje.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * visitekaartje document from Prismic
 *
 * - **API ID**: `visitekaartje`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type VisitekaartjeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<VisitekaartjeDocumentData>,
    "visitekaartje",
    Lang
  >;

export type AllDocumentTypes = VisitekaartjeDocument;

/**
 * Primary content in *InstaTitle → Primary*
 */
export interface InstaTitleSliceDefaultPrimary {
  /**
   * title field in *InstaTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * camera field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.camera
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  camera: prismic.ImageField<never>;

  /**
   * arrow field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.arrow
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  arrow: prismic.ImageField<never>;

  /**
   * pic field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.pic
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  pic: prismic.ImageField<never>;

  /**
   * ProfileName field in *InstaTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.profilename
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  profilename: prismic.KeyTextField;

  /**
   * bio field in *InstaTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.bio
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bio: prismic.KeyTextField;

  /**
   * circle field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.circle
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  circle: prismic.ImageField<never>;

  /**
   * story1 field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.story1
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  story1: prismic.ImageField<never>;

  /**
   * story_info1 field in *InstaTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.story_info1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  story_info1: prismic.KeyTextField;

  /**
   * story2 field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.story2
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  story2: prismic.ImageField<never>;

  /**
   * story_info2 field in *InstaTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.story_info2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  story_info2: prismic.KeyTextField;

  /**
   * story3 field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.story3
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  story3: prismic.ImageField<never>;

  /**
   * story_info3 field in *InstaTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.story_info3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  story_info3: prismic.KeyTextField;

  /**
   * story4 field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.story4
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  story4: prismic.ImageField<never>;

  /**
   * story_info4 field in *InstaTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.story_info4
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  story_info4: prismic.KeyTextField;

  /**
   * black_stripe field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.black_stripe
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  black_stripe: prismic.ImageField<never>;

  /**
   * github_pic field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.github_pic
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  github_pic: prismic.ImageField<never>;

  /**
   * email_pic field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.email_pic
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  email_pic: prismic.ImageField<never>;

  /**
   * telephone_pic field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.telephone_pic
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  telephone_pic: prismic.ImageField<never>;

  /**
   * github_name field in *InstaTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.github_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  github_name: prismic.KeyTextField;

  /**
   * email_name field in *InstaTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.email_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_name: prismic.KeyTextField;

  /**
   * telephone_number field in *InstaTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.telephone_number
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  telephone_number: prismic.KeyTextField;

  /**
   * scan_qr field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.scan_qr
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  scan_qr: prismic.ImageField<never>;

  /**
   * home field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.home
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  home: prismic.ImageField<never>;

  /**
   * search field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.search
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  search: prismic.ImageField<never>;

  /**
   * plus field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.plus
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  plus: prismic.ImageField<never>;

  /**
   * video field in *InstaTitle → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: insta_title.primary.video
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  video: prismic.ImageField<never>;
}

/**
 * Default variation for InstaTitle Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InstaTitleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<InstaTitleSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *InstaTitle*
 */
type InstaTitleSliceVariation = InstaTitleSliceDefault;

/**
 * InstaTitle Shared Slice
 *
 * - **API ID**: `insta_title`
 * - **Description**: InstaTitle
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InstaTitleSlice = prismic.SharedSlice<
  "insta_title",
  InstaTitleSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      VisitekaartjeDocument,
      VisitekaartjeDocumentData,
      VisitekaartjeDocumentDataSlicesSlice,
      AllDocumentTypes,
      InstaTitleSlice,
      InstaTitleSliceDefaultPrimary,
      InstaTitleSliceVariation,
      InstaTitleSliceDefault,
    };
  }
}
