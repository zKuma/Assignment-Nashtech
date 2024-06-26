import { useRoutes } from "react-router-dom";
import React, { Suspense } from "react";
import { NotFound } from "../pages";
import { RequiredAuth } from "../components";
import { path } from "./routeContants";

const LoginLazy = React.lazy(() => import("../pages/Login"));
const EditPostLazy = React.lazy(() => import("../pages/Posts/EditPost"));
const CreatePostLazy = React.lazy(() => import("../pages/Posts/CreatePost"));
const DetailPostLazy = React.lazy(() => import("../pages/Posts/DetailPost"));
const PostsLazy = React.lazy(() => import("../pages/Posts/Posts"));
const ProfileLazy = React.lazy(() => import("../pages/Profile"));
const HomeLazy = React.lazy(() => import("../pages/Home"));
const BooksLazy = React.lazy(() => import("../pages/Books/Books"));
const CreateBookLazy = React.lazy(() => import("../pages/Books/CreateBook"));
const DetailBookLazy = React.lazy(() => import("../pages/Books/DetailBook"));
const EditBookLazy = React.lazy(() => import("../pages/Books/EditBook"));

export const AppRoute = () => {
  const elements = useRoutes([
    {
      path: path.HOME,
      element: (
        <Suspense>
          <HomeLazy />
        </Suspense>
      ),
      errorElement: <NotFound />,
    },
    {
      path: path.POSTS,
      element: (
        <Suspense>
          <PostsLazy />
        </Suspense>
      ),
      errorElement: <NotFound />,
    },
    {
      path: path.BOOKS,
      element: (
        <Suspense>
          <BooksLazy />
        </Suspense>
      ),
      errorElement: <NotFound />,
    },
    {
      path: path.DETAILPOST__ID,
      element: (
        <Suspense>
          <DetailPostLazy />
        </Suspense>
      ),
      errorElement: <NotFound />,
    },
    {
      path: path.DETAILBOOKS__ID,
      element: (
        <Suspense>
          <DetailBookLazy />
        </Suspense>
      ),
      errorElement: <NotFound />,
    },
    {
      path: path.EDITPOST__ID,
      element: (
        <Suspense>
          <EditPostLazy />
        </Suspense>
      ),
      errorElement: <NotFound />,
    },
    {
      path: path.EDITBOOKS__ID,
      element: (
        <Suspense>
          <EditBookLazy />
        </Suspense>
      ),
      errorElement: <NotFound />,
    },
    {
      path: path.CREATEPOST,
      element: (
        <Suspense>
          <CreatePostLazy />
        </Suspense>
      ),
      errorElement: <NotFound />,
    },
    {
      path: path.CREATEBOOK,
      element: (
        <Suspense>
          <CreateBookLazy />
        </Suspense>
      ),
      errorElement: <NotFound />,
    },
    {
      path: path.LOGIN,
      element: (
        <Suspense>
          <LoginLazy />
        </Suspense>
      ),
      errorElement: <NotFound />,
    },
    {
      path: path.PROFILE,
      element: (
        <RequiredAuth>
          <Suspense>
            <ProfileLazy />
          </Suspense>
        </RequiredAuth>
      ),
    },
  ]);

  return elements;
};
