export interface Post {
  id: number
  title: string
  description: string
  slug: string
  url: string
  date: string
  category: string
}

export interface Label {
  label: string
  slug: string
}

export interface Labels {
  labels: [
    {
      label: string
      slug: string
    }
  ]
}
