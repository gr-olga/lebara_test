import * as React from "react"
import {Box, ChakraProvider, Grid, theme,} from "@chakra-ui/react"
import DataTable from "./components/DataTable/DataTable";
import "./App.css"

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3} background="#fafbff">
                <div className="header">
                    <h2 className="title">Top up</h2>
                </div>
                <div className="mainBox">
                    <div className="purpleBanner">
                        <h3 className="headerTitle">Credit</h3>
                        <p className="desc">Credit never expires. You pey per minute, SMS and MB</p>
                    </div>
                    <div className="triangle"></div>
                    <DataTable/>
                </div>
            </Grid>
        </Box>
    </ChakraProvider>
)
