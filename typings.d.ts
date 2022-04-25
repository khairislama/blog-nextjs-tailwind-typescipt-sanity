export interface Post {
  _id: string
  _createdAt: string
  title: string
  author: {
    name: string
    image: string
  }
  comments: Comment[]
  description: string
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
  body: [object]
}

export interface Comment {
  _id: string
  _ref: string
  _type: string
  _createdAt: string
  _updatedAt: string
  post: {
    _ref: string
    _type: string
  }
  name: string
  email: string
  comment: string
  approved: boolean
}
