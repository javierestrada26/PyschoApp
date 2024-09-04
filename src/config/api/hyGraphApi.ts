import { HYGRAPH_API } from '@env'
import { request, gql } from 'graphql-request'



const MASTER_URL = HYGRAPH_API 

export const sleep= async()=>{
  return new Promise((resolve)=>{
    setTimeout(resolve, 2000)
  })

}


const getCategories =  async () => {
  const query = gql`
  query GetCategory {
    categories {
      id
      name
      icon {
        url
      }
    }
  }
  `
  const data = await request(MASTER_URL, query)
  return data
}


const getPublicByCategory = async (category: string) => {
  const query =gql `
  query GetNewLastestPublic {
    newLastestPublics(where: {category: {name: "`+category+`"}}) {
      author
      id
      name
      tag
      youtubeUrl
      description
      content
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      image {
        url
      }
      category {
        name
      }
    }
  }
  `
  const data = await request(MASTER_URL, query)
  return data
}

const getNewLastestPublic = async () => {
  const query = gql`
  query GetNewLastestPublic {
    newLastestPublics(orderBy: updatedAt_DESC, first: 5) {
      author
      id
      name
      tag
      youtubeUrl
      description
      content
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      image {
        url
      }
      category {
        name
      }
    }
  }
  `
  const data = await request(MASTER_URL, query)
  return data
}

const getPersonal = async () => {
  await sleep()
  const query = gql`
  query Personal {
    staffs {
      id
      name
      profession
      city
      description
      whatsUrl
      mailUrl
      image {
        url
      }
    }
  }
  `
  const data = await request(MASTER_URL, query)
  return data
}

const getLink = async () => {
  const query =  gql`
  query MyQuery {
  links {
    name
    medialink
  }
}`
}

export default{
    
    getCategories,
    
    
    getNewLastestPublic,
    getPublicByCategory,
    getPersonal,
    getLink
}