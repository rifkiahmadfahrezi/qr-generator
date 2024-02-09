import { render, screen } from '@testing-library/react'
import App from "../App";
import '@testing-library/jest-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
   {
      path: '/',
      element: <App />
   }
])


describe('App', () => { 
   it("should render on a dodcument", () => {
      render( <RouterProvider router={routes}/>  )
      const app = screen.getByTestId('main')

      expect(app).toBeInTheDocument()
   })
 })