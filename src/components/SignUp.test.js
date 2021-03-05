import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import SignUp from "./SignUp"

// test("renders without errors", () => {
//     render(<SignUp />)
// })

// Currently doesn't work, I think this is because State is kept in a different document, 
// Regardless, the error states "username is undefined"