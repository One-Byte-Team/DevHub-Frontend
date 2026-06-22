import { createBrowserRouter } from 'react-router'
import Test from "@/components/Test"

export const router = createBrowserRouter([
   {
      path: "/",
      Component: Test,
   }
])