import * as React from "react"
import {Box, ChakraProvider, Grid, theme,} from "@chakra-ui/react"
import DataTable from "./components/DataTable/DataTable";
import "./App.css"
export const App = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3} background="#fafbff" >
                <div className="header">
                    <h2 className="title">Top up</h2>
                    <div className="purpleBanner"/>
                </div>
                <DataTable/>
            </Grid>
        </Box>
    </ChakraProvider>
)
