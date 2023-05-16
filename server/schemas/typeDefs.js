const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
    bookId: String
    authors: [String]
    bookTitle: String
    description: String
    image: String
    link: String
  }

  input BookInput {
    authors: [String]
    bookTitle: String
    description: String
    bookId: String
    image: String
    # link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(book: BookInput!): User
    removeBook(bookId: ID!): User
    # savedBook(bookData,Book)
  }
`;

module.exports = typeDefs;
