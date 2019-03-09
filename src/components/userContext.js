import React from 'react'
/*Step 1: Create the context */
/*Context created with createContext()  comes with a provider and consumer component */
const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}