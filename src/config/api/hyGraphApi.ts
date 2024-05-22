import { request, gql } from 'graphql-request'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const MASTER_URL = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cluxybisy0hmt08uxbz2s10tn/master'




const getSlider = async () => {
    const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
    `
    
    const data = await request(MASTER_URL, query)
    
    return data
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


const getLastesPublications = async () => {
  const query = gql`
  query GetLastestPublic {
    latestPublication {
      id
      name
      category {
        name
      }
      about
      images {
        url
      }
    }
  }
  `
  const data = await request(MASTER_URL, query)
  return data
}

const getPublicationsByCategory = async (category: string) => {
  const query = gql`
  query GetLastestPublic {
    latestPublication(where: {category: {name: "`+category+`"}}) {
      id
      name
      category {
        name
      }
      about
      images {
        url
      }
      chapter {
        ... on Chapter {
          id
          name
          video {
            url
          }
        }
      }
      description
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
      demoUrl
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
    }
  }
  `
  const data = await request(MASTER_URL, query)
  return data
}

const getPersonal = async () => {
  const query = gql`
  query Personal {
    staffs {
      id
      name
      profession
      city
      description
      contactUrl
      image {
        url
      }
    }
  }
  `
  const data = await request(MASTER_URL, query)
  return data
}



export default{
    getSlider,
    getCategories,
    getLastesPublications,
    getPublicationsByCategory,
    getNewLastestPublic,
    getPublicByCategory,
    getPersonal
}