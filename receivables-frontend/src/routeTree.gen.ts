/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginIndexImport } from './routes/login/index'
import { Route as PayableListImport } from './routes/payable/list'
import { Route as PayableCreateImport } from './routes/payable/create'
import { Route as AssignorCreateImport } from './routes/assignor/create'
import { Route as PayableUpdateIdImport } from './routes/payable/update.$id'
import { Route as PayableDetailsIdImport } from './routes/payable/details.$id'
import { Route as AssignorDetailsIdImport } from './routes/assignor/details.$id'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const LoginIndexRoute = LoginIndexImport.update({
  id: '/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const PayableListRoute = PayableListImport.update({
  id: '/payable/list',
  path: '/payable/list',
  getParentRoute: () => rootRoute,
} as any)

const PayableCreateRoute = PayableCreateImport.update({
  id: '/payable/create',
  path: '/payable/create',
  getParentRoute: () => rootRoute,
} as any)

const AssignorCreateRoute = AssignorCreateImport.update({
  id: '/assignor/create',
  path: '/assignor/create',
  getParentRoute: () => rootRoute,
} as any)

const PayableUpdateIdRoute = PayableUpdateIdImport.update({
  id: '/payable/update/$id',
  path: '/payable/update/$id',
  getParentRoute: () => rootRoute,
} as any)

const PayableDetailsIdRoute = PayableDetailsIdImport.update({
  id: '/payable/details/$id',
  path: '/payable/details/$id',
  getParentRoute: () => rootRoute,
} as any)

const AssignorDetailsIdRoute = AssignorDetailsIdImport.update({
  id: '/assignor/details/$id',
  path: '/assignor/details/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/assignor/create': {
      id: '/assignor/create'
      path: '/assignor/create'
      fullPath: '/assignor/create'
      preLoaderRoute: typeof AssignorCreateImport
      parentRoute: typeof rootRoute
    }
    '/payable/create': {
      id: '/payable/create'
      path: '/payable/create'
      fullPath: '/payable/create'
      preLoaderRoute: typeof PayableCreateImport
      parentRoute: typeof rootRoute
    }
    '/payable/list': {
      id: '/payable/list'
      path: '/payable/list'
      fullPath: '/payable/list'
      preLoaderRoute: typeof PayableListImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/assignor/details/$id': {
      id: '/assignor/details/$id'
      path: '/assignor/details/$id'
      fullPath: '/assignor/details/$id'
      preLoaderRoute: typeof AssignorDetailsIdImport
      parentRoute: typeof rootRoute
    }
    '/payable/details/$id': {
      id: '/payable/details/$id'
      path: '/payable/details/$id'
      fullPath: '/payable/details/$id'
      preLoaderRoute: typeof PayableDetailsIdImport
      parentRoute: typeof rootRoute
    }
    '/payable/update/$id': {
      id: '/payable/update/$id'
      path: '/payable/update/$id'
      fullPath: '/payable/update/$id'
      preLoaderRoute: typeof PayableUpdateIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/assignor/create': typeof AssignorCreateRoute
  '/payable/create': typeof PayableCreateRoute
  '/payable/list': typeof PayableListRoute
  '/login': typeof LoginIndexRoute
  '/assignor/details/$id': typeof AssignorDetailsIdRoute
  '/payable/details/$id': typeof PayableDetailsIdRoute
  '/payable/update/$id': typeof PayableUpdateIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/assignor/create': typeof AssignorCreateRoute
  '/payable/create': typeof PayableCreateRoute
  '/payable/list': typeof PayableListRoute
  '/login': typeof LoginIndexRoute
  '/assignor/details/$id': typeof AssignorDetailsIdRoute
  '/payable/details/$id': typeof PayableDetailsIdRoute
  '/payable/update/$id': typeof PayableUpdateIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/assignor/create': typeof AssignorCreateRoute
  '/payable/create': typeof PayableCreateRoute
  '/payable/list': typeof PayableListRoute
  '/login/': typeof LoginIndexRoute
  '/assignor/details/$id': typeof AssignorDetailsIdRoute
  '/payable/details/$id': typeof PayableDetailsIdRoute
  '/payable/update/$id': typeof PayableUpdateIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/assignor/create'
    | '/payable/create'
    | '/payable/list'
    | '/login'
    | '/assignor/details/$id'
    | '/payable/details/$id'
    | '/payable/update/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/assignor/create'
    | '/payable/create'
    | '/payable/list'
    | '/login'
    | '/assignor/details/$id'
    | '/payable/details/$id'
    | '/payable/update/$id'
  id:
    | '__root__'
    | '/'
    | '/assignor/create'
    | '/payable/create'
    | '/payable/list'
    | '/login/'
    | '/assignor/details/$id'
    | '/payable/details/$id'
    | '/payable/update/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AssignorCreateRoute: typeof AssignorCreateRoute
  PayableCreateRoute: typeof PayableCreateRoute
  PayableListRoute: typeof PayableListRoute
  LoginIndexRoute: typeof LoginIndexRoute
  AssignorDetailsIdRoute: typeof AssignorDetailsIdRoute
  PayableDetailsIdRoute: typeof PayableDetailsIdRoute
  PayableUpdateIdRoute: typeof PayableUpdateIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AssignorCreateRoute: AssignorCreateRoute,
  PayableCreateRoute: PayableCreateRoute,
  PayableListRoute: PayableListRoute,
  LoginIndexRoute: LoginIndexRoute,
  AssignorDetailsIdRoute: AssignorDetailsIdRoute,
  PayableDetailsIdRoute: PayableDetailsIdRoute,
  PayableUpdateIdRoute: PayableUpdateIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/assignor/create",
        "/payable/create",
        "/payable/list",
        "/login/",
        "/assignor/details/$id",
        "/payable/details/$id",
        "/payable/update/$id"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/assignor/create": {
      "filePath": "assignor/create.tsx"
    },
    "/payable/create": {
      "filePath": "payable/create.tsx"
    },
    "/payable/list": {
      "filePath": "payable/list.tsx"
    },
    "/login/": {
      "filePath": "login/index.tsx"
    },
    "/assignor/details/$id": {
      "filePath": "assignor/details.$id.tsx"
    },
    "/payable/details/$id": {
      "filePath": "payable/details.$id.tsx"
    },
    "/payable/update/$id": {
      "filePath": "payable/update.$id.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
