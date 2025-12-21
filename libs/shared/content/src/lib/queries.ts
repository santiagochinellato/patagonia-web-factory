// libs/shared/content/src/lib/queries.ts

export const GET_ALL_POSTS = `*[_type == "post"] {
  title,
  slug,
  publishedAt,
  mainImage
}`;

export const GET_PAGE_BY_SLUG = `*[_type == "page" && slug.current == $slug][0] {
  title,
  content
}`;

export const GET_PROFESSIONAL_PROFILE = `*[_type == "professional_profile"][0] {
  ...,
  heroSection {
    ...,
    profilePhoto {
      ...,
      asset->
    }
  },
  experience {
    ...,
    currentPositions[] {
      ...,
      responsibilities[]
    },
    pastPositions[] {
      ...,
      responsibilities[],
      achievements[]
    }
  },
  education {
    ...,
    formalEducation[],
    complementaryEducation[]
  },
  authority {
    ...,
    institutions[] {
      ...,
      logo {
        ...,
        asset->
      }
    },
    memberships[]
  },
  scientificPublications {
    ...,
    articles[] | order(year desc) [0..4] 
  },
  awardsAndRecognitions {
    ...,
    awards[] | order(highlighted desc, year desc) [0..2],
    grants[]
  },
  services,
  ctaSection {
    ...,
    primary {
      ...,
      secondaryButton {
        ...,
        file {
          ...,
          asset->
        }
      }
    }
  },
  navigation
}`;
