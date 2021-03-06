import { tsAppIndex } from '../../templates'

const javascript = {
  react: [
    {
      fileName: 'overmind/index.js',
      code: `
import { Overmind } from 'overmind'
import { createConnect } from 'overmind-react'

export const overmind = new Overmind({
  state: {
    isLoadingPosts: false
  }
})

export const connect = createConnect(overmind)
`,
    },
  ],
  vue: [
    {
      fileName: 'overmind/index.js',
      code: `
import { Overmind } from 'overmind'
import { createPlugin } from 'overmind-vue'

export const overmind = new Overmind({
  state: {
    isLoadingPosts: false
  }
})

export const OvermindPlugin = createPlugin(overmind)
`,
    },
  ],
}

const typescript = {
  react: [
    {
      fileName: 'overmind/state.ts',
      code: `
export type Post = {
  id: number
  title: string
  body: string
}

export type State = {
  isLoadingPosts: boolean
  posts: Post[]
}

export const state: State = {
  isLoadingPosts: false,
  posts: []
}
`,
    },
    {
      fileName: 'overmind/index.ts',
      code: tsAppIndex(
        'react',
        `
import { state } from './state'

const config = {
  state,
}
`
      ),
    },
  ],
  vue: javascript.vue,
  angular: [
    {
      fileName: 'overmind/state.ts',
      code: `
export type Post = {
  id: number
  title: string
  body: string
}

export type State = {
  isLoadingPosts: boolean
  posts: Post[]
}

export const state: State = {
  isLoadingPosts: false,
  posts: []
}
`,
    },
    {
      fileName: 'overmind/index.ts',
      code: tsAppIndex(
        'angular',
        `
import { state } from './state'

const config = {
  state,
}
`
      ),
    },
  ],
}

export default (ts, view) => (ts ? typescript[view] : javascript[view])
