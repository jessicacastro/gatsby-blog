import { useStaticQuery, graphql } from "gatsby"

export const useAvatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 80
              height: 80
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  
  return avatarImage.childImageSharp.gatsbyImageData;
}
