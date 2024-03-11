import { atom } from 'jotai'

const initialComments = [
  {
    id: 0,
    studentName: "Pedro Henrique",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus eligendi amet nihil et perferendis minus rerum reiciendis recusandae, similique laudantium at, nisi voluptatibus distinctio illo exercitationem provident labore ex?",
    quantityLikes: 437,
    conclusionDate: "01/03/2024",
    liked: false
  },
  {
    id: 1,
    studentName: "Roberto Carlos",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi animi impedit magni sint ullam fuga dignissimos beatae, nam exercitationem.",
    quantityLikes: 56,
    conclusionDate: "20/06/2019",
    liked: true
  },
  {
    id: 2,
    studentName: "Paulo Ricardo",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi animi impedit magni sint ullam fuga dignissimos beatae, nam exercitationem.",
    quantityLikes: 269,
    conclusionDate: "10/10/2021",
    liked: false
  }
]

export const commentsAtom =  atom(initialComments)
