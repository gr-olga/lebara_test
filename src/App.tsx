import * as React from "react"
import {Box, ChakraProvider, theme,} from "@chakra-ui/react"
import DataTable from "./components/DataTable/DataTable";
import "./App.css"

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <div className="header">
                <h2 className="title">Top up</h2>
            </div>
            <div className="main-box">
                <div className="title-box">
                    <h3 className="header-title">Credit</h3>
                    <p className="desc">Credit never expires. You pey per minute, SMS and MB</p>
                </div>
                <div className="triangle"/>
                <DataTable/>
            </div>
        </Box>
    </ChakraProvider>
)
